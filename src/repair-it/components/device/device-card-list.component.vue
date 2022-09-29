<template>
  <div class="card">
    <div class="flex flex-wrap card-container gap-3">
      <deviceCard
        v-for="deviceData in devicesData"
        :key="deviceData.id"
        :deviceData="deviceData"
        style="max-width: 220px"
      ></deviceCard>
    </div>
  </div>
</template>

<script>
import deviceCard from "/src/repair-it/components/device/device-card.component.vue";
import { DevicesApiService } from "/src/repair-it/services/device-api.service";

export default {
  components: {
    deviceCard,
  },
  name: "device-card-list",
  data() {
    return {
      devicesData: [],
      deviceService: undefined,
    };
  },
  created() {
    this.deviceService = new DevicesApiService();
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      this.deviceService.getModels().then((response) => {
        this.devicesData = response.data.filter((item) => item.id);
        console.log("This is my Data Devices", this.devicesData);
      });
    },
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}
h1,
p {
  font-family: "Poppins", sans-serif;
}
p {
  text-align: center;
}
</style>
