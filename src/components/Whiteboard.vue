<template>
  <div class="whiteboard" @drop="handleDrop" @dragover="allowDrop">
    <h2>Visualization</h2>
    <div
      v-for="(component, index) in droppedComponents"
      :key="index"
      class="dropped-item"
      :style="{ left: component.x + 'px', top: component.y + 'px' }"
    >
      <div class="component-container">
        <!-- Component Preview -->
        <div v-if="component.type === 'button'" class="component-preview">
          <button>Button</button>
        </div>

        <div
          v-else-if="component.type === 'textarea'"
          class="component-preview"
        >
          <textarea placeholder="Text Area"></textarea>
        </div>

        <div
          v-else-if="component.type === 'checkbox'"
          class="component-preview"
        >
          <input type="checkbox" /> Checkbox
        </div>

        <span class="delete-icon" @click="deleteComponent(index)">X</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Whiteboard',
  data() {
    return {
      droppedComponents: [],
    };
  },
  methods: {
    allowDrop(event) {
      event.preventDefault();
    },
    handleDrop(event) {
      const componentData = JSON.parse(event.dataTransfer.getData('component'));
      const boundingRect = event.target.getBoundingClientRect();
      this.droppedComponents.push({
        ...componentData,
        x: event.clientX - boundingRect.left,
        y: event.clientY - boundingRect.top,
      });
    },
    deleteComponent(index) {
      this.droppedComponents.splice(index, 1);
    },
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
