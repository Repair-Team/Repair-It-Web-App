
<template>
  <div style="margin-bottom: 4rem">
    <Toolbar></Toolbar>
    <RouterView></RouterView>
  </div>
</template>

<script >
import Toolbar from "../src/repair-it/components/tool-bar.component.vue";

export default {
  components: {
    Toolbar,
  },
  data() {

  },
  created() {
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
}
*::-webkit-scrollbar {
  -webkit-appearance: none;
}
*::-webkit-scrollbar:vertical {
  width: 7px;
}
*::-webkit-scrollbar-button:increment,
*::-webkit-scrollbar-button {
  display: none;
}
*::-webkit-scrollbar:horizontal {
  height: 7px;
}


</style>