<template>
  <div>
    <!-- 介绍四个常用的API -->
  </div>
</template>

<script>
// 注意: 使用之前都需要先引入
import { isRef, isReactive, isReadonly, isProxy } from "vue";
export default {
  name: "21.isRef,isReactive",
  // 1. 四个都是函数哦, 参数为需要判别的变量
  // 2. ref的底层实现是 object.defineProperty;
  // 3. 经过reactive实现响应式的对象是 proxy, 对proxy实现的readonly也是proxy
};
</script>

<style scoped>
</style>