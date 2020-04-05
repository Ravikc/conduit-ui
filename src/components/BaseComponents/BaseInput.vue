<template>
  <input
    :value="value"
    class="form-control"
    :class="{
      'form-control-lg': size === 'lg',
      'form-control-sm': size === 'sm',
    }"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
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
    size: { type: String, default: "md" },
    type: { type: String, default: "text" },
  },
  data() {
    return {};
  },
  methods: {
    handleInput() {},
  },
};
</script>

<style scoped></style>
