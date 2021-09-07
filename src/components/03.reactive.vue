<template>
  <div>
    <!-- reactive函数呢是为了实现 对象以及数组的响应式 -->
    <!-- 由ref()函数可知, 我们通过函数ref可以将对象转化为一个响应式的, 并且其value值是一个proxy对象 -->
    <!-- reactive()函数可以将对象转化为一个proxy对象, 实现对象的响应式, 就等价于 ref().value -->
    <p v-for="(value, attr, index) in shuosuo" :key="index">
      {{ index }}. {{ attr }}:{{ value }}
    </p>
    <button @click="changeInfo">改变信息, 验证响应式</button>
  </div>
</template>

<script>
// 一. 按需引入reactive()函数
import { reactive } from "vue";

export default {
  name: "03.reactive",
  setup() {
    // 1. 普通数据类型不能够使用reactive实现响应式
    // 2. 对象可以使用ref()实现响应式, 但是会显得比较麻烦,
    // 3. 对象经过reactive()函数之后就会直接变成proxy对象, 直接调用属性即可, 不需要再调用value值
    // 4. reactive()的响应式时深层次的, 不管经过几个层级的属性值都能够实现响应式
    // 注意: 所以在以后的数据定义时, 我们可以将所有数据整合到同一个对象中, 倒是有点类似于vue2中的data了
    //
    const shuosuo = reactive({
      name: "shuosuo",
      age: 18,
      height: "160cm",
      weight: "50kg",
      hobbies: ["羽毛球", "乒乓球", "网球"],
    });

    function changeInfo() {
      shuosuo.name = "areha";
      shuosuo.age = 12;
      shuosuo.height = 180;
      shuosuo.weight = 80;
      // console.log(shuosuo);

      // 注意: 我们在vue2中讨论过, 在修改数组时, 如果是使用arr[index] = value 的方式时, 并不能够做到数组数据的响应式
      // 这是由于Object.defineProperty的原因, 而在vue3中修改数组数据时可以直接按照索引值进行修改
      shuosuo.hobbies[0] = "movies";
    }

    return { shuosuo, changeInfo };
  },
};
</script>

<style scoped>
</style>