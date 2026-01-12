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

// 获取二级分类商品
/**
 * @description: 获取导航数据
 * @data {
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export function getSubCategory(data) {
  return http({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
}
