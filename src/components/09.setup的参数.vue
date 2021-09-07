<template>
  <div>
    <!-- 1. setup 会在beforeCreated之前执行一次, 并且此时的this值是undefined -->
    <Demo message="nihaoa" name="shuosuo" @helloEmit="helloEmit">
      <!-- 1. 默认插槽: default -->
      <!-- <span>你好a</span> -->

      <!-- 2. 具名插槽: 需要使用 v-slot: "name" -->
      <!-- 2.1 这种具名插槽使用错误 -->
      <!-- <span name="nihaoa">11</span> -->
      <!-- 2.2 v-slot 只能够用于 template标签中 -->
      <template v-slot:nihao>
        <span></span>
      </template>
      <template v-slot:nihaom>
        <span></span>
      </template>
    </Demo>
  </div>
</template>

<script>
import Demo from "./00.children/09.Demo";
export default {
  name: "09.setup的参数",
  components: {
    Demo,
  },

  // 1. setup会在beforeCreated之前执行
  //#region
  // beforeCreate() {
  //   console.log("---beforeCreate---");
  // },
  // setup() {
  //   console.log("---setup---" + "|" + this);
  // },
  //#endregion

  // 2. setup的参数
  // 首先是对vue2中 父子组件通信 进行说明
  // vue2: 当父组件向子组件传递参数时: 如果子组件中将传递的参数在props中进行声明, 那么传入的参数就会作为属性保存在组件中(通过this进行调用);
  // 如果子组件中并没有将传递的参数在props中进行接收, 那么参数会自动存放在组件的$attrs中, 通过 this.$attrs进行调用
  // 并且, 当父组件中使用插槽时, 插槽的信息(即span等节点)会存放在 $sorts中, 使用this.$sorts调用

  setup() {
    function helloEmit(value) {
      console.log("接收到了子组件传来的数据" + value);
    }

    return { helloEmit };
  },
};
</script>

<style scoped>
</style>