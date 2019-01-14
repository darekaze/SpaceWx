<template>
  <div>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </div>
</template>

<script>
export default {
  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },
};
</script>
