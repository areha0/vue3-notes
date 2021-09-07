<template>
  <div>
    <!-- 1. shallow表示浅的  -->
    <!-- 2. shallowReactive 定义的对象只有第一层是响应式的, 如果明确某一对象的深层属性不会改变, 那么可以使用 shallowReactive来定义对象, 可以提升性能 -->
    <!-- 3. shallowRef对基本数据类型没有什么影响, 当需要使用ref()对某一对象进行定义时, shallowRef 就不会实现对象中属性的响应式 -->
  </div>
</template>

<script>
export default {
  name: "16.shallowRef和shallowReactive",
};
</script>

<style scoped>
</style>