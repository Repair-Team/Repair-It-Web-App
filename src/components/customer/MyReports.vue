<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>My Repairs</h5>
                <pv-data-view :value="dataviewValueReports" :layout="layout" :paginator="true" :rows="9"
                    :sortOrder="sortOrder" :sortField="sortField">
                    <!--<template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6 text-right">
                                <pv-data-view-layout-options v-model="layout" />
                            </div>
                        </div>
                    </template>-->
                    <template #list="slotProps">
                        <div class="col-12">
                            <div class="flex flex-column md:flex-row align-items-center p-3 w-full">
                                <img :src="slotProps.data.image" :alt="slotProps.data.name"
                                    class="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5" />
                                <div class="flex-1 text-center md:text-left">
                                    <div class="font-bold text-2xl">{{ slotProps.data.name }}</div>
                                    <div class="mb-3">Report: {{ slotProps.data.description }}</div>
                                </div>
                                <!--<div
                                    class="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                                    <span
                                        :class="'device-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{
                                                slotProps.data.inventoryStatus
                                        }}</span>
                                </div>-->
                            </div>
                        </div>
                    </template>
                </pv-data-view>
            </div>
        </div>
    </div>
</template>

<script>
import { DevicesApiService } from '@/core/services/devices-api.services';
import { ReportsApiService } from '@/core/services/reports-api.services';

export default {
    data() {
        return {
            //dataviewValue: null,
            dataviewValueReports: null,
            layout: 'list'
        }
    },
    data2() {
        return {
            dataviewValue: null,
            layout: 'list'
        }
    },
    devicesService: null,
    reportsService: null,
    created() {
        this.devicesService = new DevicesApiService();
        this.reportsService = new ReportsApiService();
    },
    mounted() {
        this.devicesService.getDevicesByUserId(localStorage.getItem('currentId')).then((response) => {
            this.dataviewValue = response.data
        });
        this.reportsService.getReportsByCustomerId(localStorage.getItem('currentId')).then((response) => {
            this.dataviewValueReports = response.data
        });
    }
}
</script>

<style scoped lang="scss">
@import '../../assets/demo/badges.scss';
</style>