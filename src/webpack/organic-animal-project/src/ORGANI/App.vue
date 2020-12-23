<!--
/**
 * =================================================================
 * @FileName : App.vue
 * @Description : 유기동물 조회 및 정보제공 SPA 컴포넌트
 * =================================================================
 * 수정일          수정자    수정내용
 * -----------------------------------------------------------------
 * 2020.11.27.    홍승표    최초생성
 * =================================================================
 * @author 홍승표
 * @since 2020.11.27
 * @version 1.0
 * @see
 * <pre>
 *  Copyright (C) 2020 by alex.Hong, All right reserved 
 * </pre>
 */
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App' 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}
</style>
