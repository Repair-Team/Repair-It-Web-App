<template>
    <BlockViewer header="Pricing" :code="block3">
        <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
            <div class="text-900 font-bold text-6xl mb-4 text-center">Choose your plan</div>
            <div class="text-700 text-xl mb-6 text-center line-height-3">Choose the plan that best suits your needs. Remember that our mission is to offer you the best service.</div>

            <div class="grid">
                <div class="col-12 lg:col-6 text-center">
                    <div class="p-3 h-full">
                        <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                            <div class="text-900 font-medium text-xl mb-2">FREE</div>
                            <div class="text-600">Plan description</div>
                            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div class="align-items-center">
                                <span class="font-bold text-2xl text-900">$0</span>
                                <span class="ml-2 font-medium text-600">per month</span>
                            </div>
                            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                            <ul class="list-none p-0 m-0 flex-grow-1">
                                <li class="flex align-items-center mb-3">
                                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Repair order</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Order tracking</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Random repair technician</span>
                                </li>
                            </ul>
                            <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
                            <Button label="CHOOSE THIS PLAN" class="p-3 w-full mt-auto"></Button>
                        </div>
                    </div>
                </div>

                <div class="col-12 lg:col-6 text-center">
                    <div class="p-3 h-full">
                        <div class="shadow-2 p-3 h-full flex flex-column surface-card" style="border-radius: 6px">
                            <div class="text-900 font-medium text-xl mb-2">PLUS</div>
                            <div class="text-600">Plan description</div>
                            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                            <div class="align-items-center">
                                <span class="font-bold text-2xl text-900">$5</span>
                                <span class="ml-2 font-medium text-600">per month</span>
                            </div>
                            <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                            <ul class="list-none p-0 m-0 flex-grow-1">
                                <li class="flex align-items-center mb-3">
                                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Repair order</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Order tracking</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Repair technician of your choice</span>
                                </li>
                                <li class="flex align-items-center mb-3">
                                    <i class="pi pi-check-circle text-green-500 mr-2"></i>
                                    <span>Faster delivery</span>
                                </li>
                            </ul>
                            <hr class="mb-3 mx-0 border-top-1 border-none surface-border" />
                            <Button label="CHOOSE THIS PLAN" class="p-3 w-full"></Button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </BlockViewer>



</template>

<script>
export default {
}
</script>