<template>
  <div>
    <!-- toRef 的作用是创建一个ref对象, 其value值指向某个对象的某个属性 -->
    <!-- 其实作用就是在模板中声明属性时会更方便一点, 直接使用对象中的属性值就可以 -->

    <!-- <p>{{ shuosuo }}</p>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ shuosuo.age }}</h2>
    <h2>薪资: {{ salary }}</h2>

    <button @click="name += '~'">修改姓名</button>
    <button @click="shuosuo.age++">修改年龄</button>
    <button @click="salary++">上调薪资</button> -->

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
// 1. 导入toRef
import { reactive, toRef, toRefs } from "vue";

export default {
  name: "15.ToRef,ToRefs",
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
    // 2. 可以写在setup中, 或是直接在return中声明
    // 2.1 toRef(对象, "属性"); 属性名要加引号
    // let name = toRef(shuosuo, "name");
    // // 当有多级嵌套时
    // let salary = toRef(shuosuo.job.web, "salary");

    // return { shuosuo, name, salary };

    // 2.2 直接在return时声明
    // return {
    //   shuosuo,
    //   name: toRef(shuosuo, "name"),
    //   salary: toRef(shuosuo.job.web, "salary"),
    // };

    // 3. 使用toRefs(对象), 直接是将对象中的所有第一层属性转换为 ref对象
    // 同样是可以在两个位置声明, 我们直接在return中声明
    // 要注意, toRefs() 返回的是一个 ref对象 , 如果要在模板中单独使用属性就可以获取数据, 需要将得到的ref对象进行解构
    // 解构语法: 对象解构 ...object, 获得的是一个一个的键值对
    return { shuosuo, ...toRefs(shuosuo) };
  },
};
</script>

<style scoped>
</style>