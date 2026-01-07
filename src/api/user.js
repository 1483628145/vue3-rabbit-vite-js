import http from "@/utils/request";

// 获取分类
export function getCategoryAPI() {
  return http({
    url: "home/category/head",
  });
}
