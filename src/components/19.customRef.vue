<template>
  <div>
    <!-- customRef: 自定义一个ref -->
    <!-- 需求, 在输入框中输入字符时, 显示区域会经过 0.5s 后进行显示 -->
    <label for="input"></label>
    <input type="text" id="input" v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import { ref, customRef } from "vue";

export default {
  name: "19.customRef",
  setup() {
    // 一. 使用系统自带的 ref 实现数据的响应式(不考虑延迟)
    // let message = ref("nihaoa");

    // 二. 自定义ref -- myRef
    // 1. 自定义ref的实现
    function myRef(value) {
      let timer;
      // ** 要注意下面的两个return, 第一个 return 是调用我们的myRef()时需要返回一个数值给 message
      // 第二个 return 是返回一个对象, 就不知道有啥用了
      // value对应于下面的 'nihaoa'
      return customRef((target, trigger) => {
        // customRef 参数是一个回调函数
        return {
          // 回调函数返回一个对象, 读取变量时, 调用get(); 设置数据时调用set()
          get() {
            console.log(`有人读取了${value}数据`);
            target();
            return value;
          },
          set(newValue) {
            console.log(`有人将value数据设置为了${newValue}`);

            // 直接设置变量没有作用, 因为直接设置如下代码, 只有setup在重新编译时, 才能够读取到新的value值
            // 这时候就要借助到 customRef 内部回调函数的连个参数, target, trigger, 其实是两个函数
            // 两个函数的目的是(自己认为的): 触发vue再执行一遍

            // value = newValue;
            // trigger();
            // 下面解决0.5s修改的需求
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, 500);
          },
        };
      });
    }

    // 2. 使用自定义的ref创建响应式数据
    let message = myRef("nihaoa");

    return { message };
  },
};
</script>

<style scoped>
</style>