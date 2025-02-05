<template>
  <div class="whiteboard" @drop="handleDrop" @dragover="allowDrop" @click="deselectComponent">
    <h2>Visualization</h2>
    <div
      v-for="(component, index) in componentStore.droppedComponents"
      :key="component.id"
      class="dropped-item"
      :style="{
        left: component.x + 'px',
        top: component.y + 'px',
        backgroundColor: component.backgroundColor || '#e0f7fa',
        width: component.width + 'px',
        height: component.height + 'px',
      }"
      @click.stop="selectComponentForEditing(component)"
    >

      <div class="component-container">
        <!-- Button Component Preview -->
        <div v-if="component.type === 'button'" class="component-preview">
          <button 
            :style="{
              width: component.width + 'px', 
              height: component.height + 'px',
              backgroundColor: component.buttonColor || '#008cba', 
              color: component.textColor || '#ffffff',
              fontSize: component.fontSize + 'px',
              fontFamily: component.fontFamily || 'Arial, sans-serif',
              borderRadius: component.borderRadius + 'px'
            }">
            {{ component.text }}
          </button>
        </div>

        <!-- Textarea Component Preview -->
        <div v-else-if="component.type === 'textarea'" class="component-preview">
          <textarea 
            :placeholder="component.placeholder"
            :style="{
              width: component.width + 'px', 
              height: component.height + 'px',
              fontSize: component.fontSize + 'px',
              fontFamily: component.fontFamily || 'Arial, sans-serif',
              borderRadius: component.borderRadius + 'px'
            }">
          </textarea>
        </div>

        <!-- Checkbox Component Preview -->
        <div v-else-if="component.type === 'checkbox'" class="component-preview">
          <input type="checkbox" :checked="component.checked" /> {{ component.labelText }}
        </div>

        <span class="delete-icon" @click="deleteComponent(component.id)">X</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineEmits } from 'vue';
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
      };

      componentStore.addComponentToWhiteboard(newComponent);
    };

    const deleteComponent = (id) => {
      componentStore.removeComponentFromWhiteboard(id);
    };

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
  position: relative;
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