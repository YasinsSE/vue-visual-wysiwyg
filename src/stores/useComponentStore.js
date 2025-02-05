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
          backgroundColor: '#fff',
          width: 80,
          height: 50,
          fontSize: 14,
          fontFamily: 'Arial, sans-serif',
          borderRadius: 4,
          textColor: '#000000',
          text: 'Button',
          placeholder: '',
          labelText: '',
          padding: 10,
          onclickAction: '',
        },
        
        textarea: {
          width: 150,
          height: 70,
          placeholderText: 'Enter text here...',
          defaultValue: '',
          fontSize: 14,
          fontFamily: 'Arial, sans-serif',
          textColor: '#000000',
          backgroundColor: '#ffffff',
          borderRadius: 4,
          padding: 10,
          maxLength: 100,
        },
        
        checkbox: {
          width: 80,
          height: 30,
          checked: true,
          value: '',
          label: 'Label',
          labelPosition: 'left',
          color: '#008cba',
          size: 'medium',
          required: false,
        }      
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
  },
});
