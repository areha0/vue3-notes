<template>
  <div class="grandson">
    <h2>我是后代组件</h2>
    <button @click="isShow = !isShow">点击弹出对话框</button>
    <!-- dialog的父元素是grandson, 我么希望dialog能够在页面中居中显示, 那么就需要它的父元素是body -->
    <!-- 我们演示的目的就是将dialog部分传送到 body 下面 -->

    <!-- 注意: teleport中的to属性, 可以是一个HTML标签, 也可以是一个css选择器 -->
    <!-- 这样就把对话框给传送到了 app 下面 -->
    <teleport to="#app">
      <div class="wrapper" v-if="isShow">
        <div class="dialog">
          <h2>你好, 我是对话框的标题</h2>
          <p>你好, 我是对话框的内容</p>
          <p>你好, 我也是对话框的内容</p>
          <button @click="isShow = false">关闭对话框</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "22.grandson",
  setup() {
    let isShow = ref(false);

    return { isShow };
  },
};
</script>

<style scoped>
.grandson {
  background-color: orange;
  padding: 10px;
}
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(100, 100, 100, 0.5);
}
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 300px;
  height: 300px;
  background-color: yellowgreen;
}
</style>