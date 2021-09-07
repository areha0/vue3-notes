<template>
  <div>
    <h2>计数: {{ count }}</h2>
    <button @click="count++">计数+1</button>
  </div>
</template>

<script>
import { ref } from "vue";

// 生命周期钩子有两种使用方式, 一种是作为配置项使用(和vue2的使用方法相同), 一种是作为composition API的使用方式
// 主要介绍配置项的使用
export default {
  name: "13.生命周期钩子",
  setup() {
    let count = ref(0);
    // 当我们使用 composition API的方式时,
    // 1. 首先是在vue中进行引入, 引入的生命周期都是函数, 直接传入一个回调函数
    // 2. beforeCreate 和 created 对应的都是 setup, 所以不需要引入, 也不需要调用
    // 3. 其他的钩子都是在 名字前面加上 on
    // 4. composition API写法的钩子和配置项的钩子可以一起使用(没有什么意义), 但composition API的钩子执行更靠前
    return { count };
  },
  beforeCreate() {
    console.log("---beforeCreate---");
  },
  created() {
    console.log("---cereated---");
  },
  beforeMount() {
    console.log("---beforeMount---");
  },
  mounted() {
    console.log("---mounted---");
  },
  beforeUpdate() {
    console.log("---beforeUpdate---");
  },
  updated() {
    console.log("---updated---");
  },
  // 注意: vue3中的卸载钩子是: beforeUnmount, unmounted
  beforeUnmount() {
    console.log("---beforeUnmount---");
  },
  unmounted() {
    console.log("---unmounted---");
  },
};
</script>

<style scoped>
</style>