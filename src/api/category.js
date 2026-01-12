import http from "@/utils/request";

// 获取一级分类
export function getTopCategory(id) {
  return http({
    url: "/category",
    params: {
      id,
    },
  });
}

// 获取二级分类  --根据二级分类id筛选
export function getFilterCategory(id) {
  return http({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
}
