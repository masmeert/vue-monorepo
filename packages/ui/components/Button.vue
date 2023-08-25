<template>
  <button @click="handleClick">Click Me</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

async function handleClick() {
  alert("Hello there");
}

export default defineComponent({
  name: "Button",
  setup() {
    return {
      handleClick,
    };
  },
});
</script>
