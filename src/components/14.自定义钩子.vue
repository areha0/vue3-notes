<template>
  <div>
    <!-- 自定义Hook有点像vue2中的Mixin -->
    <!-- 需求: 我们希望能够构造一个可以在其他文件中也能够直接使用的一个函数: 点击页面时打印相应的坐标值 -->
    <!-- 自定义钩子: 其实就是一个自定义的函数, 在其他组件中进行导入时, 就可以直接使用, 特殊在于在编辑这个函数时可以使用 composition API -- 就是可以写在setup函数中的一些东西, 包括 生命周期函数在 composition API中的使用 -->
    <h2>坐标值: x: {{ point.x }}, y: {{ point.y }}</h2>
  </div>
</template>

<script>
import usePoint from "./01.hooks/usePoint";

export default {
  name: "14.自定义钩子",
  setup() {
    // ** 注意: 这里栽坑里了, 要使用一个变量接收一下 自定义钩子的返回值
    const point = usePoint();

    return { point };
  },
};
</script>

<style scoped>
</style>