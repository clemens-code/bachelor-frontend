import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL='http://localhost:8090/search/';

let configHeader = localStorage.getItem('token');
/*class GetDataService{
    getAllData() {
        console.log(configHeader);
        axios.get(BASE_URL + 'all', {headers: {Authorization: 'Bearer '+ configHeader}}).
        then((getResponse) => {
                console.log(getResponse.data);
                data=getResponse.data;
                response.send(data);
            })
            .catch(function (error) {
                console.log("Error during fetching");
            })
    }
}

export default new GetDataService();*/

export async function allData () {
    try{
        //console.log(configHeader);
        const req = await axios.get(BASE_URL + 'all', {headers: {Authorization: 'Bearer '+ configHeader}});
        return req.data;
    }catch (e) {
        console.log(e);
    }
}



