<!--
/**
 * =================================================================
 * @FileName : MAN-01-002.vue
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
        <img src="@/ORGANI/images/banner.jpg" style="width:100%; height=200px;" @click="test()" />
        <div class="base_combobox">
            <label class="combobox_label">시/도 선택</label>
            <select v-model="sidoSelect" :change="test()">
                <option disabled value="">please check one</option>
                <option v-for="(rec, index) in sido" :key="index" :value="rec.orgCd" >{{rec.orgdownNm}}</option>
            </select>
        </div>
        <div class="base_combobox">
            <label class="combobox_label">시/군/구 선택</label>
            <select  v-model="sigunguSelect" :change="sigunguChange()">
                <option disabled value="">please check one</option>
                <option v-for="(rec, index) in sigunguList" :key="index" :value="rec.orgCd">{{rec.orgdownNm}}</option>
            </select>
        </div>
        <div class="base_combobox">
            <label class="combobox_label">쉘터 선택</label>
            <select  v-model="shelterSelect" >
                <option disabled value="">please check one</option>
                <option v-for="(rec, index) in shelterList" :key="index" :value="rec.careRegNo">{{rec.careNm}}</option>
            </select>
        </div>
        <div :class="menuClass">
            <div style="width : 100%; margin-bottom: 12px; cursor: pointer;">
                <button style=" width: 100%; background-color: #a862a9; font-size: 18px; color: #ffffff;"><a class="link_sub_item" @click="movePage(1)">종류</a></button>
            </div>
            <div style="width : 100%; margin-bottom: 12px; cursor: pointer;">
                <button style=" width: 100%; background-color: #a862a9; font-size: 18px; color: #ffffff;"><a class="link_sub_item" @click="movePage(2)">지역</a></button>
            </div>
        </div>
    </div>
</template>
<script>
/* vuex 사용 */
import { mapGetters } from 'vuex';
import axios from 'axios'
export default {
    name: 'MAN-01-002',
    components: {
		
    },
    data () {
        return {
            menuClass: "menu_wrap",
            animalKindval : [],
            sido : [],
            sigungu : [],
            shelter : [],
            sidoSelect : '',
            sigunguSelect : '',
            sigunguList : [],
            shelterSelect : '',
            shelterList : []
        }
	},
	computed: {
		sigunguVal() {
            //시군구
            this.$communicate.comAjax('get','http://127.0.0.1:5000/sigungu/',{
                'upr_cd': this.sidoSelect
            })
            .then((res)=>{
                if(res){
                    this.sigungu = res.data.content.rslt
                    return this.sigunguList = res.data.content.rslt
                } else {
                    return
                }
            }).catch(err =>{
                console.log('sigungu err', err)
                return 
            })
        },
        shelterVal() {
            console.log('this.sidoSelect : ',this.sidoSelect)
            console.log('this.sigunguSelect : ',this.sigunguSelect)
            this.$communicate.comAjax('get','http://127.0.0.1:5000/shelter/',{
                'upr_cd': this.sidoSelect,
                'org_cd': this.sigunguSelect
            })
            .then((res)=>{
                return this.shelterList = res.data.content.rslt
                console.log('this.shelter : ',this.shelter[0])
            }).catch(err =>{
                console.log('err', err)
            })
        }
    },
    watch: {
		
	},
    created () {
        // 시도
        this.$communicate.comAjax('get','http://127.0.0.1:5000/sido/')
        .then(
            (res)=>{
            this.sido = res.data.content.rslt
            console.log('this.sido : ',this.sido[0])
        }).catch(err =>{
            console.log('err', err)
        })

        //시군구
        // this.$communicate.comAjax('get','http://127.0.0.1:5000/sigungu/',{
        //    'upr_cd': 6110000
        // })
        // .then((res)=>{
        //     this.sigungu = res.data.content.rslt
        //     console.log('this.sigungu : ',this.sigungu[0])
        // }).catch(err =>{
        //     console.log('err', err)
        // })

        // 쉘터
        // this.$communicate.comAjax('get','http://127.0.0.1:5000/shelter/?upr_cd=6110000&org_cd=3220000')
        // .then((res)=>{
        //     this.shelter = res.data.content.rslt
        //     console.log('this.shelter : ',this.shelter[0])
        // }).catch(err =>{
        //     console.log('err', err)
        // })  
    },
    methods: {
        sigunguChange() {
            console.log("this.sigunguSelect : ", this.sigunguSelect)
            this.shelterVal
        },
        test() {
            console.log("this.sidoSelect : ", this.sidoSelect)
            this.sigunguVal
        },
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
            }else if(val == 2){
                this.$router.push("/ORGANI/MAN-01-002")
            }
        }
    }
}
</script>