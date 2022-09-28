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