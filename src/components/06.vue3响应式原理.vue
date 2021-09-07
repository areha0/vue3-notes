<template>
  <div>
    <!-- 相比于vue2中不能够使用正常的方法添加和删除属性, vue3都可以做到 -->
    <h2 v-for="(value, attr, index) in person" :key="index">
      {{ index }}. {{ attr }}: {{ value }}
    </h2>
    <button @click="deleteInfo">删除属性</button>
    <button @click="addInfo">增加属性</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "06.vue3响应式原理",
  setup() {
    let person = reactive({
      name: "shuosuo",
      age: 18,
    });
    function deleteInfo() {
      delete person.name;
    }
    function addInfo() {
      person.sex = "male";
    }

    return { person, deleteInfo, addInfo };
  },
};
</script>

<style scoped>
</style>