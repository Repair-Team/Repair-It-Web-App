<template>
    <div class="col-12">
        <div class="card">
            <div class="surface-section">
                <div class="font-medium text-3xl text-900 mb-3">My Profile</div>
                <div class="text-500 mb-5">You can see and edit your profile information here!</div>

                <ul class="list-none p-0 m-0">
                    <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div class="col-12">
                            <div class="text-500 w-6 md:w-2 font-medium">Profile Picture</div>
                            <div class="flex justify-content-center">
                                <pv-image src="images/galleria/galleria1.jpg" alt="Image" width="100" preview />
                            </div>
                        </div>
                        <!--<div class="w-6 md:w-2 flex justify-content-end">
                    <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
                </div>-->
                    </li>
                    <div v-for="user in users"> {{
                            setCurrentId(user)
                    }}</div>
                    <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div class="text-500 w-6 md:w-2 font-medium">First Name</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" v-for="user in users"> {{
                                user.firstName
                        }}</div>
                        <!--<div class="w-6 md:w-2 flex justify-content-end">
                    <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
                </div>-->
                    </li>
                    <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div class="text-500 w-6 md:w-2 font-medium">Last Name</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" v-for="user in users">{{
                                user.lastName
                        }}</div>
                        <!--<div class="w-6 md:w-2 flex justify-content-end">
                    <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
                </div>-->
                    </li>
                    <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div class="text-500 w-6 md:w-2 font-medium">Email</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" v-for="user in users">{{
                                user.email
                        }}</div>
                        <!--<div class="w-6 md:w-2 flex justify-content-end">
                    <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
                </div>-->
                    </li>

                    <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div class="text-500 w-6 md:w-2 font-medium">Type</div>
                        <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" v-for="user in users">
                            <div v-if="user.isTechnician">Technician</div>
                            <div v-else>Customer</div>
                        </div>
                    </li>
                    <!--<li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-6 md:w-2 font-medium">User Type</div>
                <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1" v-for="user in users">
                    {{if(user.isTechnician) type="technician", else type = "customer" }}
                    <pv-chip label=type class="mr-2"></pv-chip>

                </div>
                <div class="w-6 md:w-2 flex justify-content-end">
                    <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
                </div>
            </li>-->

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { UsersApiService } from '@/core/services/users-api.services';
export default {
    name: 'Profile',
    data() {
        return {
            users: [],
            usersService: null
        }
    },
    async created() {
        this.usersService = new UsersApiService();
        this.usersService.findByEmail(localStorage.getItem('email')).then((response) => {
            this.users = response.data
        });
        //localStorage.setItem('currentId',getCurrentId(user) );
    },
    methods: {
        setCurrentId(user) {
            localStorage.setItem('currentId', user.id)
        }
    }

}
</script>