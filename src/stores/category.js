import { ref } from "vue";
import { defineStore } from "pinia";

import { getNavCategory } from "@/api/layout";

export const useCategoryStore = defineStore("cateList", () => {
  // 一级导航列表
  const CateList = ref([]);
  // 获取一级导航列表
  const getCateList = async () => {
    const res = await getNavCategory();
    CateList.value = res.result;
  };
  return { CateList, getCateList };
});
