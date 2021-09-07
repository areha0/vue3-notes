<template>
  <div>
    <!-- 在vue3中可以使用vue2的计算属性, 但是这样不是太low了吗 -->
    <label for="firstName">姓: </label>
    <input type="text" id="firstName" v-model="name.firstName" />
    <br />
    <label for="lastName">名: </label>
    <input type="text" id="lastName" v-model="name.lastName" />
    <br />
    <span>姓名: {{ name.fullName }}</span>
    <br />
    <label for="fullName">姓名: </label>
    <input type="text" id="fullName" v-model="name.fullName" />
  </div>
</template>

<script>
// 使用计算属性时需要引入 computed
import { reactive, computed } from "vue";

export default {
  name: "10.vue3的计算属性",
  // 在setup中不会使用this, 因为setup会在beforeCreate之前调用一次, this指向是undefined
  setup() {
    let name = reactive({
      firstName: "wang",
      lastName: "shuo",
    });

    // 1. 计算属性普通写法, computed内部的参数是一个函数
    // let fullName = computed(() => {
    //   return name.firstName + " " + name.lastName;
    // });

    // 2. 可以将计算属性也添加至name对象中  -- 简化写法(只使用计算属性进行读取, 不对计算属性进行重写)
    // name.fullName = computed(() => {
    //   return name.firstName + " " + name.lastName;
    // });

    // 3. 计算属性的复杂写法: 可以通过重写计算属性, 修改其他数据
    // 因为计算属性其实就是由 get() 和 set() 实现的, 所以复杂写法就是使用get(), set()对计算属性进行实现
    name.fullName = computed({
      get() {
        // get()是查询计算属性, 所以用于计算的函数应该是写在这里
        return name.firstName + " " + name.lastName;
      },
      // 修改属性时会传入一个数值
      set(value) {
        let nameArr = value.split(" ");
        name.firstName = nameArr[0];
        name.lastName = nameArr[1];
      },
    });

    return { name };
  },
};
</script>

<style scoped>
</style>