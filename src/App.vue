<template>
  <div>
    <!-- <Setup /> -->
    <!-- <Reference /> -->
    <!-- <Reactive /> -->
    <!-- <Vue2Reactive /> -->
    <!-- <Vue3Reactive /> -->
    <!-- <Computed /> -->
    <!-- <Watch /> -->
    <!-- <WatchEffect /> -->

    <!-- <button @click="isShow = !isShow">销毁/创建</button>
    <Hooks v-if="isShow" /> -->

    <!-- <ToRef /> -->
    <!-- <ReadOnly /> -->
    <!-- <ToRaw /> -->
    <!-- <CustomRef /> -->
    <!-- <Provide /> -->
    <TeleportShow />
  </div>
</template>

<script>
// import Setup from "./components/01.setup.vue";
// import Reference from "./components/02.ref函数";
// import Reactive from "./components/03.reactive.vue";
// import Vue2Reactive from "./components/04.vue2的响应式原理.vue";
// import Vue3Reactive from "./components/06.vue3响应式原理.vue";
// import Setup from "./components/09.setup的参数.vue";
// import Computed from "./components/10.vue3的计算属性.vue";
// import Watch from "./components/11.watch监视数据.vue";
// import WatchEffect from "./components/12.WatchEffect函数.vue";
// import Hooks from "./components/13.生命周期钩子.vue";
// import Hooks from "./components/14.自定义钩子.vue";
// import { ref } from "vue";

// import ToRef from "./components/15.ToRef,ToRefs.vue";
// import ReadOnly from "./components/17.readonly和shallowReadonly.vue";
// import ToRaw from "./components/18.toRaw和markRaw.vue";
// import CustomRef from "./components/19.customRef.vue";
// import Provide from "./components/20.祖孙通信provide和inject.vue";
import TeleportShow from "./components/22.Teleport组件.vue";

export default {
  name: "App",
  components: {
    // Setup,
    // Reference,
    // Reactive,
    // Vue2Reactive,
    // Vue3Reactive,
    // Setup,
    // Computed,
    // Watch,
    // WatchEffect,
    // Hooks,
    // ToRef,
    // ReadOnly,
    // ToRaw,
    // CustomRef,
    // Provide,
    TeleportShow,
  },
  // setup() {
  //   let isShow = ref(true);

  //   return { isShow };
  // },
};
</script>

<style>
</style>
