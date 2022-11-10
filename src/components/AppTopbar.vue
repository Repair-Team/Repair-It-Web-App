<template>
    <div class="layout-topbar">
        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
            <i class="pi pi-bars"></i>
        </button>
        <router-link to="/" class="layout-topbar-logo">
            <img alt="Logo" :src="topbarImage()" />
            <span>Repair It</span>
        </router-link>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" v-styleclass="{
            selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein',
            leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true
        }">
            <i class="pi pi-ellipsis-v"></i>
        </button>
        <ul class="layout-topbar-menu hidden lg:flex origin-top">
            <router-link to="/">
                <button class="p-link layout-topbar-button">
                    <i class="pi pi-sign-out"></i>
                    <span>Sign Out</span>
                </button>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
        onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        },
        topbarImage() {
            return 'images/logo-dark.svg';
        }
    }
}
</script>