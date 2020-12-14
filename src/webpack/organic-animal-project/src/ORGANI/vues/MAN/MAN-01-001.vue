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
        <div class="contents" style="width:100%; height:100%">
            <div clase="infoClass" style="width: 100%; height: 110px;">
                <img style="width: 100px;height: 100px; position: absolute; left: 10px" />
                <div style="position: absolute; padding-left: 114px;"> 
                    <span style="width: 100%; display: block;">이름 : </span>
                    <span style="width: 100%; display: block;">나이 : </span>
                    <span style="width: 100%; display: block;">성별 : </span>
                    <span style="width: 100%; display: block;">주소 : </span>
                </div>
            </div>
            <div clase="infoClass" style="width: 100%; height: 110px;">
                <img style="width: 100px;height: 100px; position: absolute; left: 10px" />
                <div style="position: absolute; padding-left: 114px;"> 
                    <span style="width: 100%; display: block;">이름 : </span>
                    <span style="width: 100%; display: block;">나이 : </span>
                    <span style="width: 100%; display: block;">성별 : </span>
                    <span style="width: 100%; display: block;">주소 : </span>
                </div>
            </div>
            <div clase="infoClass" style="width: 100%; height: 110px;">
                <img style="width: 100px;height: 100px; position: absolute; left: 10px" />
                <div style="position: absolute; padding-left: 114px;"> 
                    <span style="width: 100%; display: block;">이름 : </span>
                    <span style="width: 100%; display: block;">나이 : </span>
                    <span style="width: 100%; display: block;">성별 : </span>
                    <span style="width: 100%; display: block;">주소 : </span>
                </div>
            </div>
            <div clase="infoClass" style="width: 100%; height: 110px;">
                <img style="width: 100px;height: 100px; position: absolute; left: 10px" />
                <div style="position: absolute; padding-left: 114px;"> 
                    <span style="width: 100%; display: block;">이름 : </span>
                    <span style="width: 100%; display: block;">나이 : </span>
                    <span style="width: 100%; display: block;">성별 : </span>
                    <span style="width: 100%; display: block;">주소 : </span>
                </div>
            </div>
            <div clase="infoClass" style="width: 100%; height: 110px;">
                <img style="width: 100px;height: 100px; position: absolute; left: 10px" />
                <div style="position: absolute; padding-left: 114px;"> 
                    <span style="width: 100%; display: block;">이름 : </span>
                    <span style="width: 100%; display: block;">나이 : </span>
                    <span style="width: 100%; display: block;">성별 : </span>
                    <span style="width: 100%; display: block;">주소 : </span>
                </div>
            </div>
        </div>
        <div :class="menuClass">
            <div>
            </div>
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
import axios from 'axios'
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
        // fetch('http://127.0.0.1:5000/kind/?up_kind_cd=417000').then((res)=>{
        //     console.log('res ',res)
        // })
        //axios('http://127.0.0.1:5000/kind/?up_kind_cd=417000')
        //jQuery.get('http://127.0.0.1:5000/kind/?up_kind_cd=417000')
        // axios({
        //     method:'GET',
        //     url : 'http://127.0.0.1:5000/kind/?up_kind_cd=417000'
        // }).then((res)=>{
        //     console.log('res', res)
        // }).catch(err =>{
        //     console.log('err', err)
        // })
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