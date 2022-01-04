<template>
  <div>
    <!-- 上一部分我们介绍了 vue3 的新配置 setup, 用于存放数据和方法 -->
    <!-- 这节我们来介绍 vue3 响应式的实现 -->
    <!-- 1. vue2 中响应式的实现是依靠 Object.defineproperty(是对象的一个方法,可以在对象上直接添加一个属性值, 或者是修改对象的一个现有属性, 然后关于数据的响应式则是考属性内部的getter方法和setter方法) -->
    <!-- 2.vue3中响应式的实现则是考 ES6 中的proxy -->
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <p v-for="(value, attr, index) in feature" :key="attr">
      {{ index }}. {{ attr }}: {{ value }}
    </p>
    <button @click="changeInfo">点击测试响应式</button>
  </div>
</template>

<script>
// 在setup中直接定义的变量在进行修改之后并不能够实现响应式, 需要将变量值转化为 引用对象(RefImpl: reference implement)
// 引入 ref函数
import { ref } from "vue";
export default {
  name: "02.ref函数",
  setup() {
    // 变量
    // 使用ref函数处理过的值, 会变成 ref对象, 不能够对其进行直接修改, 而是对其value值进行修改, 这样的话就可以实现响应式
    let name = ref("shuosuo");
    let age = ref(18);
    //当ref函数对对象进行改变时, 又会出现一些问题
    let feature = ref({
      height: "180cm",
      weigth: "50kg",
    });

    // 函数
    function changeInfo() {
      name.value = "areha";
      age.value = 21;
      // 此时的name是一个refImpl对象
      console.log(name);
      // 修改对象内部的属性值, 并且实现响应式, 和普通数据类型: 字符串, 数字, 布尔值 又有一些不同

      // 此时ref对象的value值是一个 proxy
      feature.value.height = "160cm";
      feature.value.weigth = 50;
      console.log(feature.value);
    }

    // 总之, 最重要的东西就是要把所有的变量和函数进行return
    return { name, age, feature, changeInfo };
  },
};
</script>

<style scoped>
</style>