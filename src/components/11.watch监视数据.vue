<template>
  <div>
    <!-- 一. 先演示一下在vue2中watch是怎么用的 -->
    <h2>{{ count }}</h2>
    <button @click="count++">点我加一</button>
    <h2>{{ message }}</h2>
    <!-- 这个地方没有加 = 号, 运行不了, 真的憨 -->
    <button @click="message += '!'">点我表示震惊</button>
    <hr />
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>薪资: {{ person.job.web.salary }}K</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增加年龄</button>
    <button @click="person.job.web.salary++">增加薪资</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";

export default {
  name: "11.watch监视ref自定义数据",
  // 一. 先使用vue2的代码进行演示
  //#region
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  // // 在vue2中 watch是一个配置项
  // watch: {
  //   // 直接写出需要监测的变量, 内部有两个参数
  //   // 当然了, 这个是简便写法, 还有更加复杂的写法
  //   // count(newValue, oldValue) {
  //   //   console.log("sum被修改了", newValue, oldValue);
  //   // },

  //   // 复杂写法: 可以添加更多的配置
  //   count: {
  //     immediate: true, // 默认是变量改变时触发监测, 如果immediate配置为true时, 在数据显示的一开始就会被watch监测
  //     deep: true, // 可以进行深层监听
  //     // 此时的函数修改为了handler
  //     handler(newValue, oldValue) {
  //       console.log("count发生了改变", newValue, oldValue);
  //     },
  //   },
  // },
  //#endregion

  // 二.演示vue3中的watch是如何使用的, 首先要引入watch函数对象
  setup() {
    let count = ref(0);
    let message = ref("nihaoshuia");

    // 1. 下面对ref()定义的单个数据进行监测, 也可以设置immediate以及deep配置
    watch(
      count,
      (newValue, oldValue) => {
        console.log("count发生了改变", newValue, oldValue);
      }
      // { immediate: true, deep: true }
    );
    // 如果要监测message的改变, 可以再次调用watch()函数, 但是这里就不这样了

    // 2. 对ref()定义的多个变量进行监测, 多个变量使用数组的形式放在一块, 监测到的新旧数据也是按照数组的形式呈现,
    // 只要其中一个变量发生改变, 就会被监测到
    watch(
      [count, message],
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
      // { immediate: true, deep: true }
    );

    // 使用reactive()定义person对象
    let person = reactive({
      name: "shuosuo",
      age: 18,
      job: {
        web: {
          salary: 20,
        },
      },
    });
    // 3. 对reactive定义的变量记性监测
    // 缺陷: 当对象内部的属性值发生改变时, 能够监测到reactive对象的改变, 但是无法显示正确的oldValue, 如果需要oldValue, 请将对应的属性值单独由ref进行定义
    // 监测时, reactive内部默认是进行深层监测 即 deep配置为true, 但是修改deep:false并不能够取消深层监测
    // watch(person, (newValue, oldValue) => {
    //   console.log("person发生了改变", newValue, oldValue);
    // });

    // 4. 对reactive对象的属性值进行监测, 可以正确的返回oldValue
    // ** 注意: watch的第一个参数值: ref对象, reactive对象, 或者是组成的数据
    // 所以监测其中一个属性时, 需要传入一个函数, 返回值为相应的属性 ()=>{return person.name}
    watch(
      () => person.name,
      (newValue, oldValue) => {
        console.log("name发生了改变", newValue, oldValue);
      }
    );

    // 5. 对多个属性同时进行监测, 其实还就是多个变量放入数组的方式
    watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log("name或age属性发生了变化", newValue, oldValue);
    });

    // 6. 对具有深层属性(salary)的对象属性(属性job也是一个对象)进行监测, 发现监测job, 并不能够监测到salary的变化
    // ** 也就是说, 在reactive对象的属性中, 如果该属性是一个对象, 具有深层属性, 那么并不能够进行深层监测
    // 需要配置 deep: true; 但是依旧拿不到正确的oldValue值
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("salary发生了改变", newValue, oldValue);
      },
      { deep: true }
    );

    return { count, message, person };
  },
};
</script>

<style scoped>
</style>