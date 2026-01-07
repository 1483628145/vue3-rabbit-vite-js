import { ref } from "vue";
import { defineStore } from "pinia";

import { getNavCategory } from "@/api/layout";

export const useCategoryStore = defineStore("cateList", () => {
  // 一级导航列表
  const CateList = ref([]);

  // 获取一级导航数据并保存
  const getCateList = async () => {
    CateList.value = await getNavCategory();
  };

  return { CateList, getCateList };
});
