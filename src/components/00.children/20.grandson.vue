<template>
  <div class="grandson">
    <h2>我是后代组件 {{ name }}--{{ age }}</h2>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "20.grandson",
  setup() {
    // 后代组件获取数据, 使用inject()函数接受, 接收到的数值直接就是响应式的
    let shuosuo = inject("shuosuo");
    console.log(shuosuo);

    return { shuosuo, ...toRefs(shuosuo) };
  },
};
</script>

<style scoped>
.grandson {
  background-color: orange;
  padding: 10px;
}
</style>