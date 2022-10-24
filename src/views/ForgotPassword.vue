<template>
    <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
            <div class="col-12 mt-5 xl:mt-0 text-center">
                <img :src="'images/logo-dark.svg'" alt="Repair It logo" class="mb-5" style="width:81px; height:60px;">
            </div>
            <div class="col-12 xl:col-6"
                style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
                <div class="h-full w-full m-0 py-7 px-4"
                    style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
                    <div class="text-center mb-5">
                        <div class="text-900 text-3xl font-medium mb-3">Recover your password</div>
                        <span class="text-600 font-medium">Don't worry!</span>
                    </div>

                    <div class="w-full md:w-10 mx-auto">
                        <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email" v-model="email" type="text" class="w-full mb-3" placeholder="Email"
                            style="padding:1rem;" />

                        <div class="text-center mb-5">
                            <span class="text-600 font-medium">Don't have an account yet?
                                <router-link to="/signUp">
                                    <a class="font-medium no-underline ml-2 text-right cursor-pointer"
                                        style="color: var(--primary-color)">Sign Up</a>
                                </router-link>
                            </span>
                        </div>
                        <Button label="Send confirmation email" class="w-full p-3 text-xl"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            checked: false
        }
    }
}
</script>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>