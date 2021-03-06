/**
 * =================================================================
 * @FileName : router.js
 * @Description : 경로명으로 요청을 보냈을 때 그에 따른 컴포넌트를 보여줄 수 있도록 설정한다.
 * @Reference : https://router.vuejs.org/kr/
 * @Modification-Information
 * <pre>
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
import Vue from 'vue'
import Router from 'vue-router'
import ORGANI from '@/ORGANI/vues/MAN/MAN-01-001'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/ORGANI',   component: ORGANI }
    ]
  })