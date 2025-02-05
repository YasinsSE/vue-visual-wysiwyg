<template>
  <div class="component-settings">
    <h2>Modify Component</h2>
    <div class="settings-panel">
      <!-- Global features that exist for every component -->
      <div>
        <label>Position Adjustment</label>
        <input
          v-model="editComponent.x"
          type="number"
          placeholder="X Position"
          @input="emitChanges('x', editComponent.x)"
        />
        <input
          v-model="editComponent.y"
          type="number"
          placeholder="Y Position"
          @input="emitChanges('y', editComponent.y)"
        />
      </div>
  
      <label>Width</label>
      <input
        v-model="editComponent.width"
        type="number"
        :placeholder="`${editComponent.type.charAt(0).toUpperCase() + editComponent.type.slice(1)} Width`"
        @input="emitChanges('width', editComponent.width)"
      />
  
      <label>Height</label>
      <input
        v-model="editComponent.height"
        type="number"
        :placeholder="`${editComponent.type.charAt(0).toUpperCase() + editComponent.type.slice(1)} Height`"
        @input="emitChanges('height', editComponent.height)"
      />
  
      <!-- Button-Specific Features -->
      <div v-if="editComponent.type === 'button'">
        <label>Button Text</label>
        <input
          v-model="editComponent.text"
          type="text"
          placeholder="Button Text"
          @input="emitChanges('text', editComponent.text)"
        />
  
        <label>Button Color</label>
        <input
          v-model="editComponent.buttonColor"
          type="color"
          @input="emitChanges('buttonColor', editComponent.buttonColor)"
        />
  
        <label>Font Size</label>
        <input
          v-model="editComponent.fontSize"
          type="number"
          placeholder="Font Size"
          @input="emitChanges('fontSize', editComponent.fontSize)"
        />
  
        <label>Font Family</label>
        <select v-model="editComponent.fontFamily" @change="emitChanges('fontFamily', editComponent.fontFamily)">
          <option value="Arial, sans-serif">Arial</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Tahoma, sans-serif">Tahoma</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Courier New, monospace">Courier New</option>
          <option value="Times New Roman, serif">Times New Roman</option>
        </select>
  
        <label>Text Color</label>
        <input
          v-model="editComponent.textColor"
          type="color"
          @input="emitChanges('textColor', editComponent.textColor)"
        />
  
        <label>Border Radius</label>
        <input
          v-model="editComponent.borderRadius"
          type="number"
          placeholder="Border Radius"
          @input="emitChanges('borderRadius', editComponent.borderRadius)"
        />
      </div>
  
      <!-- Textarea-Specific Features -->
      <div v-else-if="editComponent.type === 'textarea'">
        <label>Placeholder</label>
        <input
          v-model="editComponent.placeholder"
          type="text"
          placeholder="Textarea Placeholder"
          @input="emitChanges('placeholder', editComponent.placeholder)"
        />
  
        <label>Font Size</label>
        <input
          v-model="editComponent.fontSize"
          type="number"
          placeholder="Font Size"
          @input="emitChanges('fontSize', editComponent.fontSize)"
        />
  
        <label>Font Family</label>
        <select v-model="editComponent.fontFamily" @change="emitChanges('fontFamily', editComponent.fontFamily)">
          <option value="Arial, sans-serif">Arial</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Tahoma, sans-serif">Tahoma</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Courier New, monospace">Courier New</option>
          <option value="Times New Roman, serif">Times New Roman</option>
        </select>
  
        <label>Border Radius</label>
        <input
          v-model="editComponent.borderRadius"
          type="number"
          placeholder="Border Radius"
          @input="emitChanges('borderRadius', editComponent.borderRadius)"
        />
  
        <label>Max Length</label>
        <input
          v-model="editComponent.maxLength"
          type="number"
          placeholder="Max Length"
          @input="emitChanges('maxLength', editComponent.maxLength)"
        />
      </div>
  
      <!-- Checkbox-Specific Features -->
      <div v-else-if="editComponent.type === 'checkbox'">
        <label>Label Text</label>
        <input
          v-model="editComponent.labelText"
          type="text"
          placeholder="Label Text"
          @input="emitChanges('labelText', editComponent.labelText)"
        />
  
        <label>Checked</label>
        <input
          v-model="editComponent.checked"
          type="checkbox"
          @input="emitChanges('checked', editComponent.checked)"
        />
  
        <label>Disabled</label>
        <input
          v-model="editComponent.disabled"
          type="checkbox"
          @input="emitChanges('disabled', editComponent.disabled)"
        />
  
        <label>Size</label>
        <input
          v-model="editComponent.size"
          type="number"
          placeholder="Size"
          @input="emitChanges('size', editComponent.size)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useComponentStore } from '../stores/useComponentStore';

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
      // Create a local copy of the component to modify
      editComponent: { ...this.component },
    };
  },

  methods: {
    emitChanges(property, value) {
      const componentStore = useComponentStore();
      const id = this.component.id;

      this.editComponent[property] = value;

      componentStore.updateComponent(id, this.editComponent);
    },
  },

  watch: {
    component: {
      handler(newComponent) {
        this.editComponent = { ...newComponent };
      },
      deep: true, // Ensure deep watch for nested properties
    },
  },
};
</script>

<style>
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

.settings-panel input,
.settings-panel select {
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