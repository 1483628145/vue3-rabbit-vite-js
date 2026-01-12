import { getTopCategory } from "@/api/category";

import { useRoute } from "vue-router";

import { onMounted } from "vue";

import { ref } from "vue";

import { onBeforeRouteUpdate } from "vue-router";

export function useCategory() {
  /*
获取面包屑数据
*/
  // 使用useroute拿router信息
  const route = useRoute();

  const categoryData = ref({});

  const getTopList = async (id = route.params.id) => {
    const res = await getTopCategory(id);

    categoryData.value = res.result;
  };

  onMounted(() => {
    getTopList();
  });

  // 监听路由参数变化：第一次进来也会执行，之后点击切换 id 也会执行
  // 通过监视实现
  // watch(
  //   () => route.params.id,
  //   (id) => {
  //     if (!id) return
  //     getTopList(id)
  //   },
  //   { immediate: true }
  // )

  // 使用onBeforeRouteUpdate 函数钩子实现
  // 这个函数会在路由变化的时候被调用
  /*
由于在路由切换的时候会直接复用组件所以页面的组件不更新
*/
  onBeforeRouteUpdate((to) => {
    getTopList(to.params.id);
  });

  return { categoryData };
}
