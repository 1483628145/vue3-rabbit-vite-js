import { getHomeBanner } from "@/api/home";

import { ref, onMounted } from "vue";

export function useBanner() {
  /*
获取轮播图数据
*/
  const bannerList = ref([]);

  const getBannerList = async () => {
    const res = await getHomeBanner("2");
    bannerList.value = res.result;
  };

  onMounted(() => {
    getBannerList();
  });

  return { bannerList };
}
