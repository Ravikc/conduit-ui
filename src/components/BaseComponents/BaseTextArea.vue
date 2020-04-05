<template>
  <textarea
    :value="value"
    class="form-control"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    value: { type: String, default: "" },
    rows: { type: Number, default: 3 },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
