<template>
  <div class="flex flex-co p-10">
    <div class="w-full">
      <FormInput label="Name" type="text" @value="getValue" />
    </div>
  </div>
</template>

<script setup>
import FormInput from "../utils/FormInput.vue";
</script>

<style lang="scss" scoped></style>
