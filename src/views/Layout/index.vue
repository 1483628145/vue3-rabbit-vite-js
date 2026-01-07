<template>
  <LayoutFix></LayoutFix>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>

import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFix from './components/LayoutFix.vue';

import { useCategoryStore } from '@/stores/category';

import { onMounted } from 'vue'

const CateGoryStore = useCategoryStore()

onMounted(() => {
  CateGoryStore.getCateList()
})


</script>

<style scoped></style>
