/** 
 * =================================================================
 * @FileName : communicate.js
 * @Description : 모바일웹에서 내/외부 통신을 위한 라이브러리
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

 /* AJAX 통신 라이브러리 */
import axios from 'axios'
import store from '@/COMMON/store/store'

/**
 * Ajax 통신하는 함수
 * @param {String} method HTTP 전송메소드
 * @param {Object} headers HTTP 요청헤더
 * @param {String} url HTTP 전송 URL
 * @param {Object} data HTTP 전송 파라미터
 * @param {Boolean} noLoading 전송 중 화면 진행 출력 여부 (true:출력안함)
 */

 const hubAjax = (method, headers, url, data, noLoading) => {
    return new Promise((resolve, reject) => {
        if(!noLoading) util.eventBus('loadingShow')
        axios({
            method,
            url,
            // 서버 죽어서 TIMEOUT 1로 설정
            // timeout: 100,
            headers,
            data
        }).then((result) => {
            if(!noLoading) util.eventBus('loadingHide')
            resolve(result)
        }).catch((err) => {
            if(!noLoading) util.eventBus('loadingHide')
            //  서버죽어서 TIMEOUT 1로 설정
            // 네트워크 에러 발생시 처리
            reject(err)
        })
    })
 }

 /**
 *  통신 헤더 생성
 * @param {String} lang 언어 코드
 * @param {Number} offset 현지 UTC 타임존
 */
function getHeadersForHub (lang, offset) {
    return {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Accept-Language': lang ? lang : 'ko',
        'TIMEZONE_OFFSET': offset
    }
}