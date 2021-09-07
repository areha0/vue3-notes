<template>
  <div class="father">
    <!-- 组孙之间的通信, 在vue2中实心后代组件的通信, 我们使用的方法是 1. 一级一级传递, 2. 使用vuex -->
    <!-- vue3比较好的一点就是可以直接实现 父组件 与后代组件的通信, 虽然也可以对子组件进行通信, 但是建议不用 -->
    <h2>我是父组件 {{ name }}--{{ age }}</h2>
    <Son />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Son from "./00.children/20.son";

export default {
  name: "20.祖孙通信provide和inject",
  components: {
    Son,
  },
  setup() {
    let shuosuo = reactive({
      name: "shuosuo",
      age: 18,
    });
    // provide是一个函数, 有两个参数, 第一个参数是通信时的名字, 第二个参数是传递时的数据
    provide("shuosuo", shuosuo);

    return { shuosuo, ...toRefs(shuosuo) };
  },
};
</script>

<style scoped>
.father {
  background-color: skyblue;
  padding: 10px;
}
</style>