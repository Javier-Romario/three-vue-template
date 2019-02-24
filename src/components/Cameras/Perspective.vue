<template>
  <canvas
  :resize="onResize"
  :style="{'height': '90%', width: '80%'}"
  class="perspective-camera"></canvas>
  <!--  -->
</template>


<script>
import * as THREE from 'three';
import OrbitControlModule from 'three-orbit-controls';
import resize from 'vue-resize-directive';
import { mapState } from 'vuex';

const OrbitControls = OrbitControlModule(THREE);

export default {
  name: 'Perspective-Camera',
  directives: {
    resize,
  },
  // Hooks
  mounted() {
    // console.log('GO!');
    this.height = this.$el.offsetHeight;
    this.width = this.$el.offsetWidth;
    this.camera = new THREE.PerspectiveCamera(45, this.aspect, 1, 1024);
    this.camera.position.set(this.zoom, this.zoom, this.zoom);
    this.camera.up.set(0, 0, 1);
    this.camera.up.set(0, 0, 1);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    // RENDERER
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      canvas: this.$el,
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.controls = new OrbitControls(this.camera, this.$el);
    this.controls.enabled = true;
    // Start the rendering loop:
    this.loop();
  },
  // END Hooks
  data() {
    return {
      init: true,
      width: 0,
      height: 0,
      camera: '', // THREE js Camera object
      renderer: '', // THREE js renderer object
      mouse: new THREE.Vector2(),
      shaded: true,
      zoom: 3,
    };
  },
  computed: {
    ...mapState({
      // @Todo: get renderer from state
      // renderer: state => state.ThreeModule.renderer,
    }),
    aspect() {
      return this.width / this.height;
    },
  },
  methods: {
    loop() {
      this.renderer.render(this.$store.state.ThreeModule.scene, this.camera);
      requestAnimationFrame(this.loop);
    },
    onResize() {
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
      this.aspect = this.width / this.height;

      this.camera.left = (this.zoom * this.aspect) / -2;
      this.camera.right = (this.zoom * this.aspect) / 2;
      this.camera.top = this.zoom / 2;
      this.camera.bottom = this.zoom / -2;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    },
  },
};
</script>
<style scoped>
.perspective-camera {
  border: 1px solid salmon;
}
</style>

