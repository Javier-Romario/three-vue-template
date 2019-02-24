<template>
  <div class="Home">
    <Perspective></Perspective>
    <Cube></Cube>
  </div>
</template>

<script>
// import * as Three from 'three';
import Perspective from './Cameras/Perspective';
import Cube from './Objects/Cube';

export default {
  name: 'Home',
  mounted() {
  },
  data() {
    return {
      renderer: '',
    };
  },
  methods: {
    // loop() {
    // },
  },
  components: {
    Perspective,
    Cube,
  },
};
</script>

<style scoped>
.Home {
  height: 100%;
  width: 100%;
  /* display: flex;
  flex-direction: column; */
}
</style>
