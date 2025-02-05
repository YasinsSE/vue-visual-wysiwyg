<template>
  <div class="component-menu">
    <h2>Component Section</h2>
    <div class="menu-list">
      <div
        v-for="(component, index) in componentStore.availableComponents"
        :key="index"
        class="menu-item"
        draggable="true"
        @dragstart="(event) => handleDragStart(event, component)"
        @dragend="handleDragEnd"
      >
        <div class="component-icon">{{ component.icon }}</div>
        <div class="component-label">{{ component.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useComponentStore } from '../stores/useComponentStore';

export default {
  name: 'ComponentMenu',

  setup() {
    const componentStore = useComponentStore(); // Access the store to manage components

    const handleDragStart = (event, component) => {
      // Store component data in drag event
      event.dataTransfer.setData('component', JSON.stringify(component));

      // Create a dynamic drag preview (could be a visual representation of the component)
      const dragPreview = document.createElement('div');
      dragPreview.classList.add('drag-preview');
      dragPreview.innerHTML = `<div class="drag-preview-icon">${component.icon}</div><div>${component.label}</div>`;
      document.body.appendChild(dragPreview);

      // Attach a drag image for better feedback
      event.dataTransfer.setDragImage(dragPreview, 0, 0);
    };

    const handleDragEnd = () => {
      // Remove the drag preview when dragging ends
      const previewElement = document.querySelector('.drag-preview');
      if (previewElement) {
        previewElement.remove();
      }
    };

    return {
      componentStore, // Make the component store available in the template
      handleDragStart,
      handleDragEnd,
    };
  },
};
</script>

<style>
.component-menu h2 {
  text-align: center;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: grab;
  transition: box-shadow 0.2s, transform 0.2s ease-in-out;
}

.menu-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.menu-item:active {
  transform: scale(0.98);
}

.component-icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.component-label {
  font-size: 1rem;
  font-weight: bold;
}

.drag-preview {
  position: absolute;
  pointer-events: none;
  z-index: 1000;
  opacity: 0.5;
  background-color: #e0f7fa;
  padding: 10px;
  border: 1px solid #004d40;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drag-preview-icon {
  font-size: 2rem;
  margin-bottom: 5px;
  color: #004d40;
}

.drag-preview div {
  font-size: 0.9rem;
  color: #004d40;
}
</style>  