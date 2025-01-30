<template>
  <div class="whiteboard" @drop="handleDrop" @dragover="allowDrop" @click="deselectComponent">
    <h2>Visualization</h2>
    <div
      v-for="(component, index) in componentStore.droppedComponents"
      :key="index"
      class="dropped-item"
      :style="{
        left: component.x + 'px',
        top: component.y + 'px',
        backgroundColor: component.backgroundColor || '#e0f7fa',
      }"
      @click.stop="selectComponentForEditing(component)" 
    >
      <div class="component-container">
        <!-- Component Preview based on type -->
        <div v-if="component.type === 'button'" class="component-preview">
          <button>Button</button>
        </div>

        <div v-else-if="component.type === 'textarea'" class="component-preview">
          <textarea placeholder="Text Area"></textarea>
        </div>

        <div v-else-if="component.type === 'checkbox'" class="component-preview">
          <input type="checkbox" /> Checkbox
        </div>

        <span class="delete-icon" @click="deleteComponent(index)">X</span>

      </div>
    </div>
  </div>
</template>

<script>
  import { ref, defineProps, defineEmits } from 'vue'; 
  import { useComponentStore } from '../stores/useComponentStore'; 

export default {
  name: 'Whiteboard',

  setup(props, { emit }) {
    const componentStore = useComponentStore();

    const allowDrop = (event) => {
      event.preventDefault();  // Allow dropping
    };

    const handleDrop = (event) => {
      const componentData = JSON.parse(event.dataTransfer.getData('component'));
      const boundingRect = event.target.getBoundingClientRect();

      const newComponent = {
        ...componentData,
        x: event.clientX - boundingRect.left,
        y: event.clientY - boundingRect.top,
        backgroundColor: '#e0f7fa',
      };

      componentStore.addComponentToWhiteboard(newComponent);
    };

    const deleteComponent = (index) => {
      componentStore.removeComponentFromWhiteboard(index);
    };

    // Emit the selected component to App.vue when a component is clicked
    const selectComponentForEditing = (component) => {
      emit('selectComponent', component); 
    };

    const deselectComponent = () => {
      emit('selectComponent', null);  // Reset selectedComponent to null
    };

    return {
      componentStore,
      allowDrop,
      handleDrop,
      deleteComponent,
      selectComponentForEditing,
      deselectComponent,
    };
  },
};
</script>

<style>
.whiteboard {
  width: 100%;
  height: 500px;
  border: 1px dashed #ccc;
  position: relative;
  background-color: #f0f0f0;
}

.whiteboard h2 {
  text-align: center;
  margin-top: -1.5em;
}

.dropped-item {
  position: absolute;
  cursor: grab;
}

.component-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.component-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #e0f7fa;
  border: 1px solid #004d40;
  border-radius: 4px;
  min-width: 80px;
}

.delete-icon {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
  z-index: 10;
}

/* Hover to See Delete Icon */
.component-container:hover .delete-icon {
  display: flex;
}
</style>