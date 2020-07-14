import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL='http://localhost:8090/search/';

let configHeader = localStorage.getItem('token');
class GetDataService{
    getAllData() {
        console.log(configHeader);
        axios.get(BASE_URL + 'all', {headers: {Authorization: 'Bearer '+ configHeader}}).then(
            resp => {
                return resp;
            }).catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
        })
    }
}

export default new GetDataService();


