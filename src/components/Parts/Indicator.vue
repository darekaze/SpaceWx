<template>
  <div>
    <status-indicator
      pulse positive
      :intermediary="isMinor"
      :negative="isMajor"/>
    <span class="pl-2">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  props: {
    scale: Number,
    msg: String,
  },
  computed: {
    isMinor() { return this.scale >= 1; },
    isMajor() { return this.scale >= 3; },
  },
};
</script>
