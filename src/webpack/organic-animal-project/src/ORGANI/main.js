/** 
 * =================================================================
 * @FileName : main.js
 * @Description : 유기동물 조회 및 정보제공 기동 JavaScript 파일
 * @Modification-Information
 * <pre>
 * =================================================================
 * 수정일			수정자		수정 내용
 * -----------------------------------------------------------------------
 * 2020.11.27.    홍승표    최초생성
 * =================================================================
 * <pre>
 * @author HanaTI : GLN Platform Team 오범석
 * @since 2018.10.22.
 * @version 1.0
 * @see
 * <pre>
 *  Copyright (C) 2018 by HanaTI, All right reserved
 * </pre>
 */
import Vue from 'vue'
import ORGANI from './App'
import router from './js/router'
/* 서버 통신을 위한 library */
import communicate from '@/COMMON/js/communicate'

Vue.config.productionTip = false
// 서버 통신 API 함수 VueModel 정의
Vue.prototype.$communicate = communicate

require('@/ORGANI/css/layout.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { ORGANI },
  template: '<ORGANI/>'
})
