<template>
  <div>
    <!-- 初始setup: vue3相对于vue2改变了一些配置, 在vue3中配置 数据, 方法 需要使用setup, setup其实就是一个函数 -->
    <!-- 注意:  -->
    <h1>{{ name }}</h1>
    <h2>{{ age }}</h2>
    <p>{{ sex }}</p>
    <button @click="sayHello">点击</button>
    <button @click="saySex">测试vue2</button>
  </div>
</template>

<script>
import { h } from "vue";
export default {
  name: "01.setup",
  // 一. vue3配置 setup
  setup() {
    // 1.数据
    let name = "shuosuo";
    let age = 18;
    // 2. 方法
    function sayHello() {
      console.log(`你好啊, 我是${name}, 今年${age}岁`);
    }

    // 3. 注意: 一定要将setup中定义的数据和方法进行返回

    return { name, age, sayHello };
    //   关于return, 除了可以返回数据和方法, 其实还可以返回一个渲染函数(注意: 是一个函数哦), 没错就是render, 不过不建议使用(提前需要对h进行引入)
    // return () => {
    //   return h("p", "nihaoa");
    // };
    //    对渲染函数进行化简
    // return () => h("p", "nihaoa");
  },

  // 二. vue2的配置 data, methods; 在vue3项目中还可以继续使用vue2的配置: data, methods
  data() {
    return {
      sex: "male",
    };
  },
  methods: {
    saySex() {
      console.log(`我是${this.sex}`);
      // 1. 在vue2方法中, 仍然可以使用setup中定义的变量以及函数
      // 2. 但是在setup中不能够使用 data, 或methods中定义的数据和方法
      // 3. 并且, 当setup和data中定义同一个变量时, 使用mustache中会优先显示setup中定义的变量
      console.log(this.name + "|" + this.age + "|" + this.sayHello);
    },
  },
};
</script>

<style scoped>
</style>