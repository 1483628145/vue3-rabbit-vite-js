import http from "@/utils/request";

// 获取顶部导航条分类列表
export function getNavCategory() {
  return http({
    url: "/home/category/head",
  });
}
