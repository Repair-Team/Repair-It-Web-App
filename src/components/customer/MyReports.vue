<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>My Devices</h5>
                <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder"
                    :sortField="sortField">
                    <template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6 text-right">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
                    </template>
                    <template #list="slotProps">
                        <div class="col-12">
                            <div class="flex flex-column md:flex-row align-items-center p-3 w-full">
                                <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name"
                                    class="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5" />
                                <div class="flex-1 text-center md:text-left">
                                    <div class="font-bold text-2xl">{{ slotProps.data.name }}</div>
                                    <div class="mb-3">{{ slotProps.data.description }}</div>
                                    <div class="flex align-items-center">
                                        <i class="pi pi-tag mr-2"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                </div>
                                <div
                                    class="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                                    <Button icon="pi pi-cog" label="Request Repair"
                                        :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                                        class="mb-2"></Button>
                                    <span
                                        :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{                                     
                                                slotProps.data.inventoryStatus

                                        }}</span>
                                </div>
                            </div>
                        </div>
                  </template>
                    <template #grid="slotProps">
                        <div class="col-12 md:col-4">
                            <div class="card m-3 border-1 surface-border">
                                <div class="flex align-items-center justify-content-between">
                                    <div class="flex align-items-center">
                                        <i class="pi pi-tag mr-2"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                    <span
                                        :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{                                                                                
                                                slotProps.data.inventoryStatus                                                                               
                                        }}</span>
                                </div>
                                <div class="text-center">
                                    <img :src="'images/product/' + slotProps.data.image" :alt="slotProps.data.name"
                                        class="w-9 shadow-2 my-3 mx-0" />
                                    <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                                    <div class="mb-3">{{ slotProps.data.description }}</div>
                                </div>
                                <div class="flex align-items-center justify-content-between">
                                    <Button icon="pi pi-cog"
                                        :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </div>
    </div>


</template>
<script>
 
 
import ProductService from "../../core/services/ProductService";

export default {
   data() {
       return {
           dataviewValue: null,
           layout: 'grid'
       }
   },


   productService: null,


   created() {
       this.productService = new ProductService();
   },
   mounted() {
       this.productService.getProducts().then(data => this.dataviewValue = data);
   }
}


</script>
<style scoped lang="scss">
@import '../../assets/demo/badges.scss';
</style>

