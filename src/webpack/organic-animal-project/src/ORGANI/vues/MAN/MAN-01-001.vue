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
        <img src="@/ORGANI/images/banner.jpg" style="width:100%; height=200px;"/>
        <div class="contents" style="width:100%; height:100%">
            <div clase="infoClass" v-for="(rec, index) in animalKindval" :key="index" style="width: 100%; height: 110px;">
                <img src="@/ORGANI/images/testImg.jpg" style="width: 100px;height: 100px; position: absolute; left: 10px" />
                <div style="position: absolute; padding-left: 114px; text-align: left;"> 
                    <span style="width: 100%; display: block;">종류 : {{rec.KNm}}</span>
                    <span style="width: 100%; display: block;">코드 : {{rec.kindCd}} </span>
                </div>
            </div>
        </div>
        <div :class="menuClass">
            <div style="width : 100%; margin-bottom: 12px; cursor: pointer;">
                <button style=" width: 100%; background-color: #a862a9; font-size: 18px; color: #ffffff;"><a class="link_sub_item" @click="movePage(1)">종류</a></button>
            </div>
            <div style="width : 100%; margin-bottom: 12px; cursor: pointer;">
                <button style=" width: 100%; background-color: #a862a9; font-size: 18px; color: #ffffff;"><a class="link_sub_item" @click="movePage(2)">동물조회</a></button>
            </div>
            <div style="width : 100%; margin-bottom: 12px; cursor: pointer;">
                <button style=" width: 100%; background-color: #a862a9; font-size: 18px; color: #ffffff;"><a class="link_sub_item" @click="movePage(3)">지역</a></button>
            </div>
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
            menuClass: "menu_wrap",
            animalKindval : []
        }
	},
	computed: {
		animalKind(data) {
            // let startArr = data
            return this.animalKindval
        }
    },
    watch: {
		
	},
    created () {
        // fetch('http://127.0.0.1:5000/kind/?up_kind_cd=417000').then((res)=>{
        //     console.log('res ',res)
        // })
        //axios('http://127.0.0.1:5000/kind/?up_kind_cd=417000')
        //jQuery.get('http://127.0.0.1:5000/kind/?up_kind_cd=417000')
        
        
        axios({
            method:'GET',
            url : 'http://127.0.0.1:5000/shelter/?upr_cd=6110000&org_cd=3220000',
            timeout : 3000
        }).then((res)=>{
            // console.log('res', res)
        }).catch(err =>{
            console.log('err', err)
        })
        // 종류

        axios({
            method:'GET',
            url : 'http://127.0.0.1:5000/kind/?up_kind_cd=417000',
            timeout : 3000
        }).then((res)=>{
            // this.animalKindval = res.data.content.rslt
            let testArr = []
            for(let i=0;i<10;i++){
                this.animalKindval.push(res.data.content.rslt[i])
            }
            console.log('this.animalKindval : ',this.animalKindval[0])
        }).catch(err =>{
            console.log('err', err)
        })
    },
    methods: {
        // 햄버거 버튼 클릭(메뉴)
		testClose() {
            if(this.menuClass == "menu_wrap"){
                this.menuClass = "menu_wrap on"
            }else {
                this.menuClass = "menu_wrap"
            }
        },
        movePage(val) {
            if(val == 1){
                this.$router.push("/ORGANI/MAN-01-001")
            } else if(val == 2){
                this.$router.push("/ORGANI/MAN-01-002")
            } else if(val == 3){
                this.$router.push("/ORGANI/MAN-01-003")
            }
        }
    }
}
</script>