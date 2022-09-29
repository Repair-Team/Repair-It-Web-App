<template>

  <div class="container">
    <img src="../../assets/Background.jpg" alt="banner" />
      <div class="slogan">
       The best Techniques here!
      </div>
  </div>
  <div style="margin: 3rem;">

    <device-card-list></device-card-list>

  </div>
</template>
<script>
import DeviceCardList from "../components/device/device-card-list.component.vue";
export default {
  name: "home-view",
  components: { DeviceCardList},
  data() {},
  created() {},
};
</script>
<style scoped>
.slogan {
  color:white;
  position: absolute;
  top: 28%;
  left: 30%;
  transform: translate(-40%, -20%);
  font-family: "Bebas Neue", cursive;
  font-size: 4vw;
}

.slogan span:nth-child(1) {
  color: #e5383b;
}
.container {

  display: inline-block;
  text-align: center;
  height: auto;

}
img {
  object-fit: none;
  width: 99vw;
  height: 500px;
}

</style>