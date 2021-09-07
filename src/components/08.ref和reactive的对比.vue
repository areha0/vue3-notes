<template>
  <div>
    <!-- Ref和Reactive的对比 -->
    <!-- 1. ref只用来定义基本数据类型， reactive用来定义对象，数组类型； 当然ref可以用来定义对象和数组 -->
    <!-- 2. ref内部其实还是使用的 Object.defineProperty的get()和set()对属性的读取和修改进行进行监测, 数据劫持-->
    <!-- reactive内部则是通过Proxy()实现响应式, 通过Reflect对源数据进行修改 -->
    <!-- 3. ref操作数据时需要调用.value, 在页面中读取时不需要调用.value  -->
    <!-- reactive操作数据和模板中读取时均不需要.value -->
  </div>
</template>

<script>
export default {
  name: "08.ref和reactive的对比",
};
</script>

<style scoped>
</style>