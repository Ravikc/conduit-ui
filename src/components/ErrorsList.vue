<template>
  <ul>
    <li v-for="error in errors" :key="error">{{ error }}</li>
  </ul>
</template>

<script>
export default {
  name: "ErrorsList",
  props: ["errors"]
};
</script>
<style scoped>
li {
  color: red;
}
</style>
