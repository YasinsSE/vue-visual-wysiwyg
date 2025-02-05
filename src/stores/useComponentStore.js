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
      const defaultValues = {
        button: {
          backgroundColor: '#f0f0f0',
          width: 80,
          height: 50,
          fontSize: 14,
          fontFamily: 'Arial, sans-serif',
          borderRadius: 4,
          textColor: '#000000',
          buttonColor: '#007bff',
          text: 'Button',
          placeholder: '',
          labelText: '',
          checked: false,
        },
        textarea: {
          backgroundColor: '#fff',
          width: 150,
          height: 70,
          fontSize: 14,
          fontFamily: 'Arial, sans-serif',
          borderRadius: 4,
          textColor: '#000000',
          buttonColor: '',
          text: '',
          placeholder: 'Enter text...',
          labelText: '',
          checked: false,
        },
        checkbox: {
          backgroundColor: '#fff',
          width: 20,
          height: 20,
          fontSize: 14,
          fontFamily: 'Arial, sans-serif',
          borderRadius: 4,
          textColor: '#000000',
          buttonColor: '',
          text: '',
          placeholder: '',
          labelText: 'Check',
          checked: false,
        },
      };
    
      const componentDefaults = defaultValues[component.type] || {}; // fallback to empty object if no matching type
    
      this.droppedComponents.push({
        ...component,
        id: Date.now(),
        ...componentDefaults,  // Spread type-specific defaults
      });
    },    

    removeComponentFromWhiteboard(id) {
      const index = this.droppedComponents.findIndex(comp => comp.id === id);
      if (index !== -1) {
        this.droppedComponents.splice(index, 1);
      }
    },

    updateComponent(id, updatedProperties) {
      const component = this.droppedComponents.find(comp => comp.id === id);
      if (component) {
        Object.assign(component, updatedProperties);
      }
    },

    updateComponentSettings(id, updatedSettings) {
      const component = this.droppedComponents.find(comp => comp.id === id);
      if (component) {
        Object.assign(component, updatedSettings);
      }
    },
  },
});
