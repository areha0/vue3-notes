import { reactive, onMounted, onBeforeUnmount } from "vue"
export default function () {
  // 1. 首先是定义坐标变量
  let point = reactive({
    x: 0,
    y: 0,
  });

  // 2. 定义获取坐标的函数
  function getPoint(event) {
    // console.log("nihaoa");
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  }

  // 3. 在组件挂载时, 开始获取坐标值
  onMounted(() => {
    window.addEventListener("click", getPoint);
  })

  // 4. 组件卸载时, 停止获取坐标值
  onBeforeUnmount(() => {
    window.removeEventListener("click", getPoint);
  })

  // 5. 将获取到的点 返回出去
  return point
}