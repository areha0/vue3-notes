<template>
  <div>
    <p>你好啊</p>
    <button @click="helloEmit">你好啊</button>
  </div>
</template>

<script>
export default {
  name: "09.Demo",
  props: ["message", "name"], // 这个是使用数组形式对传入子组件的数据进行声明
  setup(props, context) {
    // 1. props: 其实就是父组件向子组件传输的数据, 但是在使用之前需要在props中进行声明
    // console.log(props);
    // console.log(context);
    // 2. context: context中包含三个属性: attrs, emit, slots
    // console.log(context.attrs);
    // 2.1 attrs中的参数就是在props中未声明的数据
    // 2.2 emit 就是子组件向父组件进行通信, 发送自定义事件

    function helloEmit() {
      context.emit("helloEmit", "nihoa");
    }
    // 2.3 slots 就是父组件中使用的插槽
    console.log(context.slots);

    return { helloEmit };
  },
};
</script>

<style scoped>
</style>