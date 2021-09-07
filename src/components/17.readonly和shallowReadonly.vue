<template>
  <div>
    <!-- readonly是深层次的只读, shallowReadonly是浅层次的只读 -->
    <!-- 对ref定义的基本数据类型来说, 两个API并没有区别 -->
    <!-- 对reactive定义的对象(尤其是具有深层次属性)来说, 两个API才有区别 -->

    <p>{{ shuosuo }}</p>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>薪资: {{ job.web.salary }}</h2>

    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.web.salary++">上调薪资</button>
  </div>
</template>

<script>
import { reactive, toRefs, readonly, shallowReadonly } from "vue";

export default {
  name: "17.readonly和shallowReadonly",
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

    // readOnly()使用方法
    // 深层次只读, 包括salary也不能修改
    // shuosuo = readonly(shuosuo);

    // shallowReadonly  浅层次只读, salary可以进行修改
    shuosuo = shallowReadonly(shuosuo);

    return { shuosuo, ...toRefs(shuosuo) };
  },
};
</script>

<style scoped>
</style>