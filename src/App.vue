<template>
  <div id="app">
    <header class="header">
      <h1>Drag-Drop UI</h1>
    </header>

    <div class="layout">
      <Whiteboard @selectComponent="selectComponent" />
  
      <ComponentSettings v-if="selectedComponent" :component="selectedComponent" />
      <ComponentMenu v-else />
    </div>
  </div>
</template>

<script>
import Whiteboard from './components/Whiteboard.vue';
import ComponentMenu from './components/ComponentMenu.vue';
import ComponentSettings from './components/ComponentSettings.vue';

export default {
  name: 'App',

  components: {
    Whiteboard,
    ComponentMenu,
    ComponentSettings,
  },

  data() {
    return {
      selectedComponent: null,
    };
  },

  methods: {
    selectComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>

<style src="./style.css">
</style>