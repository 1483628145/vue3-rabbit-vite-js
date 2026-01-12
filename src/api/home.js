import http from "@/utils/request";

// 获取轮播图数据
export function getHomeBanner(distributionSite) {
  return http({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

// 获取新鲜好物数据
export function getNewList() {
  return http({
    url: "/home/new",
  });
}

// 获取热门推荐数据
export function getHotList() {
  return http({
    url: "/home/hot",
  });
}

// 获取热门品牌数据
export function getProductList() {
  return http({
    url: "/home/goods",
  });
}
