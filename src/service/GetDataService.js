import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL='http://localhost:8090/search/';

let configHeader = localStorage.getItem('token');

export async function allData () {
    try{
        console.log(configHeader);
        const req = await axios.get(BASE_URL + 'all', {headers: {Authorization: 'Bearer '+ configHeader}});
        return req.data;
    }catch (e) {
        console.log(e);
        window.location.href = '/login';
    }
}

export async function getDataWithImages() {
    const infos = await allData();
    console.log(infos)
    const dataWithImages = [];
    const images = [];
    infos.forEach(async function (info, _id) {
        try {
            const imageBytes = await axios.get(BASE_URL+'image/'+info._id, {headers: {Authorization: 'Bearer '+ configHeader}, responseType: 'arraybuffer'})
                .then(response => Buffer.from(response.data, 'binary').toString('base64'));
            images.push("data:image/jpg;base64,"+imageBytes);
            dataWithImages.push(new DataWithImages(info, "data:image/jpg;base64,"+imageBytes));
        }catch (e) {
            console.log(e);
        }
    });
    console.log(dataWithImages);
    return dataWithImages;
}

function DataWithImages(info, imageInBytes) {
    this.info = info;
    this.imageInBytes = imageInBytes;
}


