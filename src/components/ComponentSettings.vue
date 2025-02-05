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
          :min="0"
          placeholder="X Position"
          @input="emitChanges('x', editComponent.x)"
        />
        <input
          v-model="editComponent.y"
          type="number"
          :min="0"
          placeholder="Y Position"
          @input="emitChanges('y', editComponent.y)"
        />
      </div>
  
      <label>Width</label>
      <input
        v-model="editComponent.width"
        type="number"
        :min="0"
        :placeholder="`${editComponent.type.charAt(0).toUpperCase() + editComponent.type.slice(1)} Width`"
        @input="emitChanges('width', editComponent.width)"
      />
  
      <label>Height</label>
      <input
        v-model="editComponent.height"
        type="number"
        :min="0"
        :placeholder="`${editComponent.type.charAt(0).toUpperCase() + editComponent.type.slice(1)} Height`"
        @input="emitChanges('height', editComponent.height)"
      />
  
      <!-- Button-Specific Features -->
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

        <label>Text Color</label>
        <input
          v-model="editComponent.textColor"
          type="color"
          @input="emitChanges('textColor', editComponent.textColor)"
        />

        <label>Font Size</label>
        <input
          v-model="editComponent.fontSize"
          type="number"
          :min="4"
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
          :min="0"
          placeholder="Border Radius"
          @input="emitChanges('borderRadius', editComponent.borderRadius)"
        />

        <label>Padding</label>
        <input
          v-model="editComponent.padding"
          type="number"
          placeholder="Padding"
          :min="0"
          @input="emitChanges('padding', editComponent.padding)"
        />

        <label>OnClick Action</label>
        <input
          v-model="editComponent.onclickAction"
          type="text"
          placeholder="OnClick Action"
          @input="emitChanges('onclickAction', editComponent.onclickAction)"
        />
      </div>
  
      <!-- Textarea-Specific Features -->
      <div v-else-if="editComponent.type === 'textarea'">
        <label>Placeholder Text</label>
        <input
          v-model="editComponent.placeholderText"
          type="text"
          placeholder="Placeholder Text"
          @input="emitChanges('placeholderText', editComponent.placeholderText)"
        />

        <label>Default Value</label>
        <input
          v-model="editComponent.defaultValue"
          type="text"
          placeholder="Default Value"
          @input="emitChanges('defaultValue', editComponent.defaultValue)"
        />

        <label>Text Color</label>
        <input
          v-model="editComponent.textColor"
          type="color"
          @input="emitChanges('textColor', editComponent.textColor)"
        />

        <label>Background Color</label>
        <input
          v-model="editComponent.backgroundColor"
          type="color"
          @input="emitChanges('backgroundColor', editComponent.backgroundColor)"
        />

        <label>Font Size</label>
        <input
          v-model="editComponent.fontSize"
          type="number"
          :min="4"
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
          :min="0"
          placeholder="Border Radius"
          @input="emitChanges('borderRadius', editComponent.borderRadius)"
        />

        <label>Max Length</label>
        <input
          v-model.number="editComponent.maxLength"
          type="number"
          :min="0"
          placeholder="Max Length"
          @input="checkMaxLength(editComponent.maxLength)"
        />
      </div>
  
      <!-- Checkbox-Specific Features -->
      <div v-else-if="editComponent.type === 'checkbox'">
        <label>Checked</label>
        <input
          v-model="editComponent.checked"
          type="checkbox"
          @input="emitChanges('checked', editComponent.checked)"
        />

        <label>Value</label>
        <input
          v-model="editComponent.value"
          type="text"
          placeholder="Checkbox Value"
          @input="emitChanges('value', editComponent.value)"
        />

        <label>Label</label>
        <input
          v-model="editComponent.label"
          type="text"
          placeholder="Checkbox Label"
          @input="emitChanges('label', editComponent.label)"
        />

        <label>Label Position</label>
        <select v-model="editComponent.labelPosition" @change="emitChanges('labelPosition', editComponent.labelPosition)">
          <option value="left">Left</option>
          <option value="right">Right</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>

        <label>Color</label>
        <input
          v-model="editComponent.color"
          type="color"
          @input="emitChanges('color', editComponent.color)"
        />

        <label>Size</label>
        <select v-model="editComponent.size" @change="emitChanges('size', editComponent.size)">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label>Required</label>
        <input
          v-model="editComponent.required"
          type="checkbox"
          @input="emitChanges('required', editComponent.required)"
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

      componentStore.updateComponent(id, { ...this.editComponent });
    },
  },

  watch: {
    'editComponent': {
      handler(newValue, oldValue) {
        // Iterate over all keys in the new editComponent to emit changes for each property
        for (let key in newValue) {
          // Only emit changes if the value has changed
          if (newValue[key] !== oldValue[key]) {
            this.emitChanges(key, newValue[key]);
          }
        }
      },
      deep: true,
    },
    component: {
      handler(newComponent) {
        this.editComponent = { ...newComponent }; // Reset local copy when prop changes
      },
      deep: true,
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
  max-height: 90%;  /* Set a max height */
  overflow-y: auto;   /* Enable vertical scrolling */
  height: 100%; 
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