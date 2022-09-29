<template>
  <div>
  <div class="card">
    <pv-toolbar class="mb-4">
      <template #start>
        <pv-button
            label="New"
            icon="pi pi-plus"
            class="p-button-success mr-2"
            @click="openNew"
        />
        <pv-button
            label="Delete"
            icon="pi pi-trash"
            class="p-button-danger"
            @click="confirmDeleteSelected"
            :disabled="!selectedDevices || !selectedDevices.length"
        />
      </template>
      <template #end>
        <pv-button
            label="Export"
            icon="pi pi-download"
            class="p-button-help"
            @click="exportToCSV($event)"
        />
      </template>
    </pv-toolbar>
    <pv-data-table
        ref="dt"
        :value="devices"
        v-model:selection="selectedDevices"
        dataKey="id"
        :paginator="true"
        :rows="10"
        :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks
      NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of
      {totalRecords} devices"
        responsiveLayout="scroll"
    >
      <template #header>
        <div
            class="table-header flex flex-column md:flex-row md:justify-content-between"
        >
          <h5 class="mb-2 md:m-0 p-as-md-center text-xl">Manage Devices</h5>
          <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <pv-input-text
                    v-model="filters['global'].value"
                    placeholder="Search..."
                />
              </span>
        </div>
      </template>
      <pv-column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
      ></pv-column>
      <pv-column
          field="id"
          header="ID"
          :sortable="true"
          style="min-width: 12rem"
      ></pv-column>
      <pv-column
          field="deviceModelId"
          header="Device Model ID"
          :sortable="true"
          style="min-width: 16rem"
      ></pv-column>
      <pv-column
          field="clientId"
          header="Client ID"
          :sortable="true"
          style="min-width: 16rem"
      ></pv-column>
      <pv-column
          field="purchaseDate"
          header="Purchase Date"
          :sortable="true"
          style="min-width: 16rem"
      ></pv-column>

      <pv-column :exportable="false" style="min-width: 8rem">
        <template #body="slotProps">
          <pv-button
              icon="pi pi-pencil"
              class="p-button-text p-button-rounded"
              @click="editDevice(slotProps.data)"
          />
          <pv-button
              icon="pi pi-trash"
              class="p-button-text p-button-rounded"
              @click="confirmDeleteDevice(slotProps.data)"
          />
        </template>
      </pv-column>
    </pv-data-table>
  </div>


  <pv-dialog
      v-model:visible="deviceDialog"
      :style="{ width: '450px' }"
      header="Device Information"
      :modal="true"
      class="p-fluid"
  >
    <div class="field mt-3">
          <span class="p-float-label">
            <pv-input-text
                type="text"
                id="deviceModelId"
                v-model.trim="device.deviceModelId"
                required="true"
                autofocus
                :class="{ 'p-invalid': submitted && !device.title }"
            />
            <label for="deviceModelId">Device id</label>
            <small class="p-error" v-if="submitted && !device.title"
            >Device Model Id is required.</small
            >
          </span>
    </div>
    <div class="field">
          <span class="p-float-label">
            <pv-input-text
                type="text"
                id="deviceModelId"
                v-model.trim="device.clientId"
                required="true"
            />
            <label for="deviceModelId">Client Id</label>
          </span>
    </div>
    <div class="field">
          <span class="p-float-label">
            <pv-input-text
                type="text"
                id="purchaseDate"
                v-model.trim="device.purchaseDate"
                required="true"
            />
            <label for="purchaseDate">Purchase Date </label>
          </span>
    </div>

    <template #footer>
      <pv-button
          :label="'Cancel'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog()"
      />
      <pv-button
          :label="'Save'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="saveDevice()"
      />
    </template>
  </pv-dialog>
    <!--Dialog for delete in table-->
  <pv-dialog
      v-model:visible="deleteDeviceDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="device"
      >Are you sure you want to delete <b>{{ device.title }}</b
      >?</span
      >
    </div>
    <template #footer>
      <pv-button
          :label="'No'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteDeviceDialog = false"
      />
      <pv-button
          :label="'Yes'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteDevice"
      />
    </template>
  </pv-dialog>

    <!--Dialog for delete-->
  <pv-dialog
      v-model:visible="deleteDevicesDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
  >
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span v-if="device"
      >Are you sure you want to delete the selected devices?</span
      >
    </div>
    <template #footer>
      <pv-button
          :label="'No'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteDevicesDialog = false"
      />
      <pv-button
          :label="'Yes'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteSelectedDevices"
      />
    </template>
  </pv-dialog>
  </div>
</template>
<script>
import { DevicesApiService } from "../../services/device-api.service";
import { FilterMatchMode } from "primevue/api";
export default {
  name: "device-list",
  data() {
    return {
      devices: [],
      deviceDialog: false,
      deleteDeviceDialog: false,
      deleteDevicesDialog: false,
      device: {},
      selectedDevices: null,
      filters: {},
      submitted: false,
      devicesService: null,
    };
  },
  created() {
    this.devicesService = new DevicesApiService();
    this.devicesService.getAll().then((response) => {
      this.devices = response.data;
      console.log(this.devices);
      this.devices.forEach((device) => this.getDisplayableDevice(device));
      console.log(this.devices);
    });
    this.initFilters();
  },
  methods: {

    getStorableDevice(displayableDevice) {
      return {
        id: displayableDevice.id,
        deviceModelId: displayableDevice.deviceModelId,
        clientId: displayableDevice.clientId,
        purchaseDate: displayableDevice.purchaseDate,
      };
    },
    openNew() {
      this.device = {};
      this.submitted = false;
      this.deviceDialog = true;
    },
    hideDialog() {
      this.deviceDialog = false;
      this.submitted = false;
    },
    findIndexById(id) {
      console.log(`current id: ${id}`);
      return this.devices.findIndex((device) => device.id === id);
    },
    saveDevice() {
      this.submitted = true;
      if (this.device.deviceModelId) {
        if (this.device.id) {
          console.log(this.device);
          this.device = this.getStorableDevice(this.device);
          this.devicesService
              .update(this.device.id, this.device)
              .then((response) => {
                console.log(response.data.id);
                this.$toast.add({
                  severity: "success",
                  summary: "Successful",
                  detail: "Device Updated",
                  life: 3000,
                });
                console.log(response);
              });
        } else {
          this.device.id = 0;
          console.log(this.device);
          this.device = this.getStorableDevice(this.device);
          this.devicesService.create(this.device).then((response) => {
            this.devices.push(this.device);
            this.$toast.add({
              severity: "success",
              summary: "Successful",
              detail: "Device Created",
              life: 3000,
            });
            console.log(response);
          });
        }
        this.deviceDialog = false;
        this.device = {};
      }
    },
    editDevice(device) {
      console.log(device);
      this.device = { ...device };
      console.log(this.device);
      this.deviceDialog = true;
    },
    confirmDeleteDevice(device) {
      this.device = device;
      this.deleteDeviceDialog = true;
    },
    deleteDevice() {
      this.devicesService.delete(this.device.id).then((response) => {
        this.devices = this.devices.filter((t) => t.id !== this.device.id);
        this.deleteDevicesDialog = false;
        this.device = {};
        this.$toast.add({
          severity: "success",
          summary: "Successful",
          detail: "Device Deleted",
          life: 3000,
        });
        console.log(response);
      });
    },
    exportToCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteDevicesDialog = true;
    },
    deleteSelectedDevices() {
      this.selectedDevices.forEach((device) => {
        this.devicesService.delete(device.id).then((response) => {
          this.devices = this.devices.filter((t) => t.id !== this.device.id);
          console.log(response);
        });
      });
      this.deleteDevicesDialog = false;
    },
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    align-items: start;
  }
}
.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 960px) {
  ::v-deep(.p-toolbar) {
    flex-wrap: wrap;
    .p-button {
      margin-bottom: 0.25rem;
    }
  }
}
</style>
