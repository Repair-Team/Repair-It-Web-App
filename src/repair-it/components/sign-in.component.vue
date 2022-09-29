<template>
  <div class="flex flex-column pt-5">
    <div class="flex align-items-center justify-content-center">
      <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div class="text-center mb-5">
          <img
            src="../../assets/brand.png"
            alt="Image"
            height="80"
            class="mb-3"
          />
          <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span class="text-600 font-medium line-height-3"
            >Don't have an account?</span
          >
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
            >Create today!</a
          >
        </div>

        <div>
          <label for="email1" class="block text-900 font-medium mb-2"
            >Email</label
          >
          <pv-input-text id="email1" type="text" class="w-full" />

          <label for="password1" class="block text-900 font-medium mb-2"
            >Password</label
          >
          <pv-input-text id="password1" type="password" class="w-full mb-3" />

          <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
              <pv-checkbox
                id="rememberme1"
                :binary="true"
                v-model="checked"
                class="mr-2"
              ></pv-checkbox>
              <label for="rememberme1">Remember me</label>
            </div>
            <a
              class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
              >Forgot password?</a
            >
          </div>

          <pv-button
            label="Sign In"
            icon="pi pi-user"
            class="w-full"
          ></pv-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sign-in",
};
</script>

<style lang="scss" scoped>
.btn-width {
  min-width: 100% !important;
}
.center {
  display: flex;
  justify-content: center;
  padding-left: 0;
}
.p-button {
  background: #2196f3;
}
.p-button:enabled:hover {
  background: #1577c5;
}
.p-inputtext:enabled:focus {
  outline: 0 none;
  outline-offset: 0;
  box-shadow: none;
  border-color: #1577c5;
}
</style>
