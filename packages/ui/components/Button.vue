<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

async function handleClick() {
  alert("Hello there");
}

export default defineComponent({
  name: "Button",
  props: {
    label: String,
  },
  setup() {
    return {
      handleClick,
    };
  },
});
</script>
