<template>
  <div style="display:none"></div>
</template>

<script>
import * as Three from 'three';

export default {
  name: 'Cube-Component',
  // Hooks
  mounted() {
    this.$nextTick(() => {
      // Build the Three.js scene:
      this.geometry = new Three.BoxGeometry(1, 1, 1);
      this.material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new Three.Mesh(this.geometry, this.material);
      this.cube.name = 'myCube';
      this.$store.state.ThreeModule.scene.add(this.cube);
      // console.log('added to the store', this.cube, 'Store', this.$store);
      const vm = this;
      setInterval(() => {
        vm.loop();
      }, 1000 / 60);
    });
  },
  // END Hooks
  data() {
    return {
      init: true,
      cube: '',
    };
  },
  methods: {
    loop() {
      this.cube.rotation.z += 0.05;
    },
  },
};

</script>

