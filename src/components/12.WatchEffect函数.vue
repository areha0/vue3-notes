<template>
  <div>
    <!-- 介绍一下watchEffect()函数的使用 -->
    <h2>计数: {{ count }}</h2>
    <button @click="count++">计数+1</button>
    <hr />
    <h2>姓名: {{ name }}</h2>
    <button @click="name += '~'">改变姓名</button>
    <hr />
    <h2>年龄: {{ shuosuo.age }}</h2>
    <button @click="shuosuo.age++">年龄加一</button>
    <h2>薪水: {{ shuosuo.job.web.salary }}K</h2>
    <button @click="shuosuo.job.web.salary++">薪水+1</button>
  </div>
</template>

<script>
// 1. 首先对watchEffect进行导入
import { ref, reactive, watchEffect } from "vue";

export default {
  name: "12.WatchEffect函数",
  setup() {
    let count = ref(0);
    let name = ref("shuosuo");
    let shuosuo = reactive({
      age: 18,
      job: {
        web: {
          salary: 20,
        },
      },
    });

    // 2. watchEffect()函数的演示
    // watchEffect中直接传入的回调函数, 不需要传入监视的对象
    // 会在页面生成(或是数据初次展示)时立即执行回调函数, 相当于默认配置immediate
    //  监视的对象是回调函数中的依赖, 当依赖发生改变时, 会调用回调函数, 如果没有依赖那就只会初始时触发一次
    watchEffect(() => {
      // 所谓依赖, 就是在回调函数中使用之前声明的变量
      // 依赖于count, 和 salary
      let x1 = count.value; // 这里就要注意了, 赋值的时候应该是将ref对象的value值赋给变量
      let x2 = shuosuo.job.web.salary; // 当然了, reactive对象的属性值赋值时不需要 .value
      console.log("监测到变化");
    });

    // ** 注意: watchEffect()函数和计算属性有点类似: 计算属性是在最开始时进行一次输出, 并且在依赖发生改变时再进行输出

    return { count, name, shuosuo };
  },
};
</script>

<style scoped>
</style> 