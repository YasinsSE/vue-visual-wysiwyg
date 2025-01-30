import { defineStore } from 'pinia';

export const useComponentStore = defineStore('componentStore', {
  state: () => ({
    availableComponents: [
      { label: 'Button', icon: '🔘', type: 'button' },
      { label: 'Text Area', icon: '📝', type: 'textarea' },
      { label: 'Checkbox', icon: '☑️', type: 'checkbox' },
    ],
    droppedComponents: [],
    generatedCode: '',
  }),

  actions: {
    addComponentToWhiteboard(component) {
      this.droppedComponents.push(component);
    },

    removeComponentFromWhiteboard(index) {
      this.droppedComponents.splice(index, 1);
    },

    updateComponent(id, updatedComponent) {
      const component = this.droppedComponents.find(comp => comp.id === id);  // Find component by id
      if (component) {
        Object.assign(component, updatedComponent); // Update the component properties
      }
    }    
  },
});
