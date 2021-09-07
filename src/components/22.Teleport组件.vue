<template>
  <div class="father">
    <!-- vue3中新添了几个标签, Fragment--当vue文件template中没有根标签时会自动在外部包裹一个根标签 -- Fragment(但咱么还是加一个根标签使用吧) -->
    <!-- Teleport的意思是传送, 可以将Teleport标签包裹的所有代码, 传送到任意的一个层级, 任意的一个地方, 主要解决的是样式的显示问题 -->
    <h2>我是父组件</h2>
    <Son />
  </div>
</template>

<script>
import Son from "./00.children/22.son";
export default {
  name: "22.Teleport组件",
  components: {
    Son,
  },
};
</script>

<style scoped>
.father {
  background-color: skyblue;
  padding: 10px;
}
</style>
