<template>
  <div class="flex items-center gap-5 mb-10 px-4">
    <label class="break-all w-[80px]">{{ label }}</label>
    <span>:</span>
    <input
     :type="type"
      class="form-input w-1/4 p-0 py-0 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-sky-500 focus:delay-100"
    />
  </div>
</template>

<script setup>
defineProps(['label', 'type'])

</script>

<style lang="scss" scoped></style>


