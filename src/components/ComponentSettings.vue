<template>
    <div class="component-settings">
      <h2>Modify Component</h2>
      <div class="settings-panel">
        <div>
          <label>Position Adjustment</label>
          <input
            v-model="editComponent.x"
            type="number"
            placeholder="X Position"
          />
          <input
            v-model="editComponent.y"
            type="number"
            placeholder="Y Position"
          />
        </div>
        <div>
          <label>Background Color</label>
          <input
            v-model="editComponent.backgroundColor"
            type="color"
          />
        </div>
        <button @click="saveChanges">Save</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'ComponentSettings',
  
    props: {
      component: {
        type: Object,
        required: true,
      },
    },
  
    data() {
      return {
        // Create a copy of the component to modify in the settings, It gives a copy of the object's properties.
        editComponent: { ...this.component },
      };
    },
  
    methods: {
      saveChanges() {
        this.$emit('update', this.editComponent);
      },
    },
  };
</script>
  
<style scoped>
  .component-settings h2 {
    text-align: center;
  }
  
  .settings-panel {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  
  .settings-panel label {
    display: block;
    margin-bottom: 5px;
  }
  
  .settings-panel input {
    margin-bottom: 10px;
    padding: 5px;
    font-size: 14px;
  }
  
  button {
    padding: 8px 12px;
    background-color: #008cba;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #006f7d;
  }
</style>
  