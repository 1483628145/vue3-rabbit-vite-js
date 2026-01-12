import http from "@/utils/request";

// 获取分类
export function getTopCategory(id) {
  return http({
    url: "/category",
    params: {
      id,
    },
  });
}
