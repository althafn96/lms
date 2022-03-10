<template>
    <select ref="elSelect" :name="props.name" class="form-select" data-control="select2" data-placeholder="Select an option">
        <slot></slot>
    </select>
</template>

<script setup>
import jquery from 'jquery'
import * as select2 from '@/plugins/select2/select2.min.js'
import '@/plugins/select2/select2.min.css'

jquery.fn.select2.defaults.set("theme", "bootstrap5");
jquery.fn.select2.defaults.set("width", "100%");
jquery.fn.select2.defaults.set("selectionCssClass", ":all:");

const props = defineProps({
    "options": Array,
    "value": String,
    "name": String,
    "data": Array
})

let elSelect = ref(null)
let currentPage = ref(1)

const emit = defineEmits(['input', 'open'])

onMounted(() => {
    jquery(elSelect.value)
        // init select2
        .select2({ data: props.data})
        .val(props.value)
        .trigger("change")
        // emit event on change.
        .on("change", function() {
            emit("input", props.value);
        })
        .on('select2:open', async function (e) {
            await emit("open", currentPage.value)
        });
}),

watch([() => props.value, () => props.options, () => props.data], ([newValue, newOptions, newData]) => {
    if(newValue) {
        jquery(elSelect.value)
            .val(props.value)
            .trigger("change")
    }
    if(newData) {

        newData.forEach((data) => {
            let newOption = new Option(data.text, data.id, false, false)

            jquery(elSelect.value).append(newOption).trigger('change');
        })
    }
}),

onUnmounted(() => {
    jquery(elSelect.value)
        .off()
        .select2("destroy")
})
</script>
