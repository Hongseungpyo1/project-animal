<!--
/**
 * =================================================================
 * @FileName : MAN-01-001.vue
 * @Description : 유기동물 조회 메인페이지
 * =================================================================
 * 수정일          수정자    수정내용
 * -----------------------------------------------------------------
 * 2020.11.30.    홍승표    최초생성
 * =================================================================
 * @author 홍승표
 * @since 2020.11.30
 * @version 1.0
 * @see
 * <pre>
 *  Copyright (C) 2020 by alex.Hong, All right reserved 
 * </pre>
 */
 -->
<template>
    <div class="outer_package">  
        <div class="header_wrap">
            <h1>OAP</h1>
            <button type="button" class="header_btn" @click="testClose()"><span>닫기</span></button>
        </div>
        <div :class="menuClass">
            <ul class="list">
                <li class=""><a class="link_sub_item">메뉴1</a></li>
                <li class=""><a class="link_sub_item">메뉴2</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
/* vuex 사용 */
import { mapGetters } from 'vuex';
export default {
    name: 'MAN-01-001',
    components: {
		
    },
    data () {
        return {
            menuClass: "menu_wrap"
        }
	},
	computed: {
		
    },
    watch: {
		
	},
    created () {
	 
    },
    methods: {
        // 햄버거 버튼 클릭
		testClose() {
            if(this.menuClass == "menu_wrap"){
                this.menuClass = "menu_wrap on"
            }else {
                this.menuClass = "menu_wrap"
            }
        }
    }
}
</script>