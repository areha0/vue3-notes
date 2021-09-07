<template>
  <div>
    <!-- vue2实现对象类型的响应式是通过 Object.defineProperty 对属性的读取, 修改进行拦截(数据劫持) -->
    <!-- vue2实现数组类型的响应式是 对数据的变更方法进行了包装 即实现了数据的更新, 又可以将更新的数据实现响应式 -->
    <h1>你好啊</h1>
  </div>
</template>

<script>
export default {
  name: "04.vue2的响应式原理",
  // })
  //  1. 对象属性的添加和删除
  // 通过正常手段实现属性的添加和删除, 虽然能够修改对象属性, 但是不能够实现响应式
  // 正确的修改手段是, 添加属性: this.$set(对象, 属性名, 属性值); 或是引入Vue: Vue.set(对象, 属性名, 属性值)
  // 删除属性: this.$delete(对象, 属性名); 或是调用Vue: Vue.delete(对象, 属性名)
  // 2. 数组的操作
  // 不要直接按照索引值进行修改就可以, 建议使用splice()
};
</script>

<style scoped>
</style>