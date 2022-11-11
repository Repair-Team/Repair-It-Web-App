<template>
    <div class="layout-topbar-login">
        <router-link to="/" class="layout-topbar-login-logo">
            <img alt="Logo" :src="topbarImage()" />
            <span>Repair It</span>
        </router-link>
    </div>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="space-topbar col-12 xl:col-6"
                style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
                <div class="h-full w-full m-0 py-7 px-4"
                    style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">Welcome to Repair It!</div>
                        <span class="text-600 font-medium">Sign up to continue</span>
                    </div>

                    <div class="w-full md:w-10 mx-auto">
                        <label for="firstName" class="block text-900 text-xl font-medium mb-2">First
                            Name</label>
                        <pv-input-text id="firstName" v-model="firstName" type="text" class="form-control w-full mb-3"
                            placeholder="First Name" style="padding:1rem;" />

                        <label for="lastName" class="block text-900 text-xl font-medium mb-2">Last Name</label>
                        <pv-input-text id="lastName" v-model="lastName" type="text" class="form-control w-full mb-3"
                            placeholder="Last Name" style="padding:1rem;" />

                        <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <pv-input-text id="email" v-model="email" type="text" class="w-full mb-3" placeholder="Email"
                            style="padding:1rem;" />

                        <label for="password" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <pv-password id="password" v-model="password" placeholder="Password" :toggleMask="true"
                            class="form-control w-full mb-3" inputClass="w-full" inputStyle="padding:1rem">
                        </pv-password>

                        <label for="confirmPassword" class="block text-900 font-medium text-xl mb-2">Confirm
                            Password</label>
                        <pv-password id="confirmPassword" v-model="confirmPassword" placeholder="Confirm Password"
                            :toggleMask="true" class="form-control w-full mb-3" inputClass="w-full"
                            inputStyle="padding:1rem">
                        </pv-password>

                        <div class="text-center mb-5">
                            <pv-checkbox id="isTechnician" v-model="isTechnician" :binary="true" class="mr-2">
                            </pv-checkbox>
                            <label for="isTechnician">Im' a technician</label>
                        </div>

                        <div class="text-center mb-5">
                            <span class="text-600 font-medium">Already have an account?
                                <router-link to="/">
                                    <a class="font-medium no-underline ml-2 text-right cursor-pointer"
                                        style="color: var(--primary-color)">Sign In</a>
                                </router-link>
                            </span>
                        </div>
                        <router-link to="/">
                            <pv-button label="Sign Up" class="w-full p-3 text-xl" @click="handleSubmit">
                            </pv-button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isTechnician: false,
            isPremium: false
        }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('users', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                isTechnician: this.isTechnician,
                isPremium: this.isPremium
            });
        },
        topbarImage() {
            return 'images/logo-dark.svg';
        }
    }
}
</script>

<style scoped>
.space-topbar {
    margin-top: 8rem;
}

.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>