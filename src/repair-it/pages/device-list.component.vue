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
        <!--
        <pv-column
          field="id"
          header="ID"
          :sortable="true"
          style="min-width: 4rem"
        ></pv-column>
        -->
        <pv-column
          field="deviceBrandName"
          header="Brand Name"
          :sortable="true"
          style="min-width: 16rem"
        ></pv-column>
        <pv-column
          field="deviceModelName"
          header="Model Name"
          :sortable="true"
          style="min-width: 16rem"
        ></pv-column>
        <!--       <pv-column
          field="status"
          header="Status"
          :sortable="true"
          style="min-width: 12rem"
        >
          <template #body="slotProps">
            <pv-tag
              v-if="slotProps.data.status === 'onRepair'"
              severity="success"
              >{{ slotProps.data.status }}</pv-tag
            >
            <pv-tag v-else severity="info">{{ slotProps.data.status }}</pv-tag>
          </template>
        </pv-column> 
      -->
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
            id="deviceBrandName"
            v-model.trim="device.deviceBrandName"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !device.deviceBrandName }"
          />
          <label for="deviceBrandName">Brand Name</label>
          <small class="p-error" v-if="submitted && !device.deviceBrandName"
            >Brand Name is required.</small
          >
        </span>
      </div>
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
            type="text"
            id="deviceModelName"
            v-model.trim="device.deviceModelName"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !device.deviceModelName }"
          />
          <label for="deviceModelName">Model Name</label>
          <small class="p-error" v-if="submitted && !device.deviceModelName"
            >Model Name is required.</small
          >
        </span>
      </div>
      <!--
      <div class="field">
        <span class="p-float-label">
          <pv-textarea
            id="description"
            v-model="device.description"
            required="false"
            rows="2"
            cols="20"
          />
          <label for="description">Description</label>
        </span>
      </div>
      -->
      <!--
      <div class="field">
        <pv-dropdown
          id="published"
          v-model="device.status"
          :options="statuses"
          optionLabel="label"
          placeholder="Select a Status"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value && slotProps.value.value">
              <span :class="'device-badge status-' + slotProps.value.value">{{
                slotProps.value.label
              }}</span>
            </div>
            <div v-else-if="slotProps.value && !slotProps.value.value">
              <span
                :class="'device-badge status-' + slotProps.value.toLowerCase()"
                >{{ slotProps.value }}</span
              >
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
        </pv-dropdown>
      </div>
-->
      <template #footer>
        <pv-button
          :label="'Cancel'.toUpperCase()"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <pv-button
          :label="'Save'.toUpperCase()"
          icon="pi pi-check"
          class="p-button-text"
          @click="saveDevice"
        />
      </template>
    </pv-dialog>
    <pv-dialog
      v-model:visible="deleteDeviceDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="device"
          >Are you sure you want to delete <b>{{ device.deviceBrandName }}</b
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
import { DevicesApiService } from "../services/devices-api.service";
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
      statuses: [
        { label: "onRepair", value: "onRepair" },
        { label: "workingProperly", value: "workingProperly" },
      ],
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
    getDisplayableDevice(device) {
      device.status = device.published
        ? this.statuses[0].label
        : this.statuses[1].label;
      return device;
    },
    getStorableDevice(displayableDevice) {
      return {
        id: displayableDevice.id,
        deviceBrandName: displayableDevice.deviceBrandName,
        deviceModelName: displayableDevice.deviceModelName,
        //published: displayableDevice.status.label === "onRepair",
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
      if (this.device.deviceBrandName.trim()) {
        if (this.device.id) {
          console.log(this.device);
          this.device = this.getStorableDevice(this.device);
          this.devicesService
            .update(this.device.id, this.device)
            .then((response) => {
              console.log(response.data.id);
              this.devices[this.findIndexById(response.data.id)] =
                this.getDisplayableDevice(response.data);
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
            this.device = this.getDisplayableDevice(response.data);
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
