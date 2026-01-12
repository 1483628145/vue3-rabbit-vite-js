<script setup>
import { ref, onMounted } from 'vue'
import { getFilterCategory, getSubCategory } from '@/api/category'

import { useRoute } from 'vue-router'

import GoodItems from '../Home/components/GoodItems.vue'

/*
获取面包屑导航数据
*/
const categoryData = ref({})

const route = useRoute()

const getFilterCategoryList = async (id = route.params.id) => {
  const res = await getFilterCategory(id)
  categoryData.value = res.result
}

onMounted(() => {
  getFilterCategoryList()
})

/*
获取二级分类商品列表
*/
const goods = ref([])

// 请求数据
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

// 获取商品列表
const getCategoryGoods = async () => {
  const res = await getSubCategory(reqData.value)

  // 将结果的items值给goods数组
  goods.value = res.result.items
}

onMounted(() => {
  getCategoryGoods()
})

/*
点击tab切换不同的筛选分类
*/
// 当tab切换的时候触发这个函数
const tabChange = () => {
  reqData.value.page = 1
  getCategoryGoods(reqData.value)
}


/*
滚动条到底部的时候自动加载
*/
const disabled = ref(false)
const handleScroll = async () => {
  // console.log('load');

  // 页数加1 然后请求接口拿到新的数据
  reqData.value.page++

  // console.log(reqData.value);

  const res = await getSubCategory(reqData.value)

  goods.value = [...goods.value, ...res.result.items]

  // 加载完毕 停止监听
  if (res.result.items.length === 0) {
    disabled.value = true
  }
}



</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>

      <div class="body" v-infinite-scroll="handleScroll">
        <!-- 商品列表-->
        <GoodItems v-for="item in goods" :key="item.id" :good="item" />
      </div>

    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>
