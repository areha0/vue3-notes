<template>
  <div>
    <!-- toRaw() 是将reactive()生成的响应式对象转化为普通对象 -->
    <!-- MarkRaw() 是标记一个对象, 使其永远不能响应式 -->
    <!-- 至少目前没有感觉到有啥用 -->

    <p>{{ shuosuo }}</p>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>薪资: {{ job.web.salary }}</h2>
    <h2 v-show="shuosuo.car">车: {{ shuosuo.car }}</h2>

    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.web.salary++">上调薪资</button>
    <hr />
    <button @click="showShuo">展示shuosuo的普通对象形式</button>
    <hr />
    <button @click="addCar">为我添加一辆车</button>
    <button @click="shuosuo.car.price++">修改车的价格</button>
  </div>
</template>

<script>
import { reactive, toRaw, toRefs, markRaw } from "vue";
export default {
  name: "18.toRaw和markRaw",
  setup() {
    let shuosuo = reactive({
      name: "shuosuo",
      age: 18,
      job: {
        web: {
          salary: 20,
        },
      },
    });
    function showShuo() {
      // 1. toRaw(), 只对reactive生成的响应式对象有效
      const shuoRaw = toRaw(shuosuo);
      console.log(shuoRaw); // 输出的是一个原始的普通对象
    }

    function addCar() {
      // 要求: 这辆车的配置信息不是响应式的
      // 因为如果正常将 属性car插入到对象shuosuo中时, car会默认变为响应式
      // 如果使用markRaw对属性进行标记, 就会是响应式
      let car = markRaw({
        type: "bnze",
        price: 45,
      });
      shuosuo.car = car;
    }

    return { shuosuo, ...toRefs(shuosuo), showShuo, addCar };
  },
};
</script>

<style scoped>
</style>