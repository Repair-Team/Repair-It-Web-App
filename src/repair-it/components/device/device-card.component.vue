<template>
  <div class="dvcs-flex">
    <pv-card class="deviceCard">
      <template #header>
        <div class="flex justify-content-center mt-3">
            <div class="icon">
              <img alt="user header" :src="deviceData.imagePath" />
            </div>
        </div>
      </template>
      <template #title>
        <div class="title">
          {{ deviceData.model }}
        </div>
      </template>
      <template #content>
        <p>{{ deviceData.deviceBrandId }}</p>
      </template>
    </pv-card>
  </div>
</template>
<script>

export default {
  name: "device-card",
  props:{
    deviceData: Object,
  },
};


</script>
<style scoped>
.title {
  font-size: 16px !important;
  font-family: Poppins, sans-serif;
  color:black;
}
.deviceCard {
  background-color: transparent;
  color: black;
  box-shadow: none !important;
}
.dvcs-flex{
  display: flex;
  text-align: center;
}
.dvcs-flex img {
  border-radius: 50%;
}

.icon {
  width: 100%;
  height: 100%;
  position: sticky;
  cursor: pointer;
  display: grid;
  z-index: 10;
  transition: transform ease-in-out 150ms;
}

</style>