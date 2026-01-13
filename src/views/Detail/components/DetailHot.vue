<script setup>
import { getGoodsHot } from '@/api/goods'

import { ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  type: {
    type: Number,
    default: 1
  },
  title: {
    type: String,
    default: '24小时热榜'
  }
})

const goodsHot = ref([])

const route = useRoute()

// 获取周榜日榜榜单
const getGoodsHotList = async () => {
  const res = await getGoodsHot({
    id: route.params.id,
    type: props.type,
    limit: 3
  })
  goodsHot.value = res.result
}

getGoodsHotList()
</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in goodsHot" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>
