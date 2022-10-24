<template>
	<div class="surface-section">
		<div class="font-medium text-3xl text-900 mb-3">My Profile</div>
		<div class="text-500 mb-5">You can see and edit your profile information here!</div>
		<div class="col-12">
            <div class="card">
                <h5>Profile Picture</h5>
                <div class="flex justify-content-center">
                    <Image src="images/galleria/galleria1.jpg" alt="Image" width="100" preview />
                </div>
            </div>
        </div>

		<ul class="list-none p-0 m-0">
			<li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
				<div class="text-500 w-6 md:w-2 font-medium">First Name</div>
				<div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Juan</div>
				<div class="w-6 md:w-2 flex justify-content-end">
					<Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
				</div>
			</li>
			<li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
				<div class="text-500 w-6 md:w-2 font-medium">Last Name</div>
				<div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Perez</div>
				<div class="w-6 md:w-2 flex justify-content-end">
					<Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
				</div>
			</li>
			<li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
				<div class="text-500 w-6 md:w-2 font-medium">Email</div>
				<div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">u202013453@upc.edu.pe</div>
				<div class="w-6 md:w-2 flex justify-content-end">
					<Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
				</div>
			</li>
			
			<li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
				<div class="text-500 w-6 md:w-2 font-medium">User Type</div>
				<div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
					<Chip label="Customer" class="mr-2"></Chip>
				</div>
				<div class="w-6 md:w-2 flex justify-content-end">
					<Button label="Edit" icon="pi pi-pencil" class="p-button-text"></Button>
				</div>
			</li>
			
		</ul>
	</div>
	
</template>

<script>
export default {
}
</script>