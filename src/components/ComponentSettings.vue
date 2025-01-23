<template >
    <div class="component-settings">
        <h2>Modify Component</h2>
        <div class="settings-panel">
            <div>

                <label>Position Adjustment</label>
                <input
                    v-model="editComponent.x"
                    type="number"
                    placeholder="X Position"
                />
                <input
                    v-model="editComponent.y"
                    type="number"
                    placeholder="Y Position"
                />
            </div>
            <div>
                <label>Background Color</label>
                <input
                    v-model="editComponent"
                    type="color"
                />
            </div>
            <button @click="saveChanges">Save</button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'ComponentSettings',

    props: {
        component:{
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            editComponent: { ...this.component},
        };
    },

    methods: {
        saveChanges(){
            this.$emit("update",this.defineComponent)
        }
    }
    
};
</script>

<style >
.component-settings h2{
    text-align: center;
}
.settings-panel {
    display: 1;
    gap: 10px;
    padding: 10px;
}

.settings-panel label {
    display: block;
    margin-bottom: 5px;
}

.settings-panel input {
    clear:left;
    margin-bottom: 10px;
    padding: 5px;
    margin: 10px;
    font-size: 10px;
}

</style>