import http from "@/utils/request";

// 获取轮播图数据
export function getGoodsTetail(id) {
  return http({
    url: "/goods",
    params: {
      id,
    },
  });
}
