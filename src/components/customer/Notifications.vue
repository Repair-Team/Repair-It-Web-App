<template>
	<div class="card">
		<div class="flex align-items-center justify-content-between mb-4">
			<h5>Notifications</h5>
			
		</div>

		<span class="block text-600 font-medium mb-3">TODAY</span>
		<ul class="p-0 mx-0 mt-0 mb-4 list-none">
			<li class="flex align-items-center py-2 border-bottom-1 surface-border">
				<div
					class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
					<i class="pi pi-dollar text-xl text-blue-500"></i>
				</div>
				<span class="text-900 line-height-3">Your transaction 
					<span class="text-700">has been procesed properly </span>
				</span>
			</li>
			<li class="flex align-items-center py-2">
				<div
					class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
					<i class="pi pi-download text-xl text-orange-500"></i>
				</div>
				<span class="text-700 line-height-3">Your device has been received successfully </span>
			</li>
		</ul>

		<span class="block text-600 font-medium mb-3">YESTERDAY</span>
		<ul class="p-0 m-0 list-none">
			<li class="flex align-items-center py-2 border-bottom-1 surface-border">
				<div
					class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
					<i class="pi pi-dollar text-xl text-blue-500"></i>
				</div>
				<span class="text-900 line-height-3">Your transaction 
					<span class="text-700">has been procesed properly </span>
				</span>
			</li>
			<li class="flex align-items-center py-2 border-bottom-1 surface-border">
				<div
					class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
					<i class="pi pi-question text-xl text-pink-500"></i>
				</div>
				<span class="text-900 line-height-3">A technician 
					<span class="text-700">has a question about your device</span>
				</span>
			</li>
		</ul>
	</div>

</template>

<script>
export default {
}
</script>