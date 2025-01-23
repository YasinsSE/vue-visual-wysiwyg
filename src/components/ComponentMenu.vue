<template>
  <div class="component-menu">
    <h2>Component Section</h2>
    <div class="menu-list">
      <div
        v-for="(component, index) in components"
        :key="index"
        class="menu-item"
        draggable="true"
        @dragstart="(event) => handleDragStart(event, component)"
      >
        <div class="component-icon">{{ component.icon }}</div>
        <div class="component-label">{{ component.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentMenu',
  data() {
    return {
      components: [
        { label: 'Button', icon: '🔘', type: 'button' },
        { label: 'Text Area', icon: '📝', type: 'textarea' },
        { label: 'Checkbox', icon: '☑️', type: 'checkbox' },
      ],
    };
  },
  methods: {
    handleDragStart(event, component) {
      event.dataTransfer.setData('component', JSON.stringify(component));
    },
  },
};
</script>

<style>

.component-menu h2{
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
  transition: box-shadow 0.2s;
}

.menu-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.component-icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.component-label {
  font-size: 1rem;
  font-weight: bold;
}
</style>
