<template>
  <div id="app">
    <header class="header">
      <h1>Drag-Drop UI</h1>
    </header>

    <div class="layout">
      <Whiteboard />
      <ComponentSettings/>
      <ComponentMenu />
    </div>
  </div>
</template>

<script>
import Whiteboard from './components/Whiteboard.vue';
import ComponentMenu from './components/ComponentMenu.vue';
import ComponentSettings from './components/ComponentSettings.vue';

//import HelloWorld from './components/draft.vue';

export default {
  name: 'App',

  components: {
    Whiteboard,
    ComponentMenu,
    ComponentSettings,
  },

  data() {
    return {
      components: [],
      generatedCode: '',
    };
  },
};
</script>

<style src="./style.css">
</style>
