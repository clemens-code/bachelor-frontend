import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL='http://localhost:8090/search/';

let configHeader = localStorage.getItem('token');

export async function allData () {
    try{
        //console.log(configHeader);
        const req = await axios.get(BASE_URL + 'all', {headers: {Authorization: 'Bearer '+ configHeader}});
        return req.data;
    }catch (e) {
        console.log(e);
    }
}

export async function getDataWithImage() {
    // var imageURL = '';
    // await axios.get(BASE_URL+'image/11', {headers: {Authorization: 'Bearer '+ configHeader}, responseType: 'arraybuffer'})
    //     .then(resp =>{
    //         var arrayBufferView = new Uint8Array(resp);
    //         var blob = new Blob([arrayBufferView], {type: "image/jpeg"});
    //         var urlCreator = window.URL || window.webkitURL;
    //         this.imageURL = urlCreator.createObjectURL(blob);
    //     });
    // return this.imageURL;
    try {
        return axios.get(BASE_URL+'image/11', {headers: {Authorization: 'Bearer '+ configHeader}, responseType: 'arraybuffer'})
            .then(response => `data:${response.headers['content-type']};base64,${btoa(String.fromCharCode(...new Uint8Array(response.data)))}`);
        
        // return axios.get(BASE_URL+'image/11', {headers: {Authorization: 'Bearer '+ configHeader}, responseType: 'arraybuffer'})
        //     .then(response => Buffer.from(response.data, 'binary').toString('base64'));
        
        
        // const req = await axios.get(BASE_URL+'image/11', {headers: {Authorization: 'Bearer '+ configHeader}, responseType: 'arraybuffer'});
        // console.log(req.data);
        // return req.data;
    }catch (e) {
        console.log(e);
    }
}



