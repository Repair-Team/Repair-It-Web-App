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
        <!--<pv-column
          field="status"
          header="Status"
          :sortable="true"
          style="min-width: 12rem"
        >
          <template #body="slotProps">
            <pv-tag
              v-if="slotProps.data.status === 'Published'"
              severity="success"
              >{{ slotProps.data.status }}</pv-tag
            >
            <pv-tag v-else severity="info">{{ slotProps.data.status }}</pv-tag>
          </template>
        </pv-column> -->
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
            id="title"
            v-model.trim="device.title"
            required="true"
            autofocus
            :class="{ 'p-invalid': submitted && !device.title }"
          />
          <label for="title">Title</label>
          <small class="p-error" v-if="submitted && !device.title"
            >Title is required.</small
          >
        </span>
      </div>
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

