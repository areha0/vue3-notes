<template>
  <div class="son">
    <h2>我是子组件</h2>
    <Grandson />
  </div>
</template>

<script>
import Grandson from "./20.grandson";

export default {
  name: "20.son",
  components: {
    Grandson,
  },
};
</script>

<style scoped>
.son {
  background-color: pink;
  padding: 10px;
}
</style>