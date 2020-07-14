<template>
    <div class="hello">
        <h1>Hallo</h1>
        <ul>
            <li v-for="info in infos">
                {{info}}
            </li>
        </ul>
    </div>
</template>

<script>
    //import getDataService from '../service/GetDataService';
    import axios from 'axios';
    export default {
        data() {
            return{
                infos: ''
            };
        },
        mounted() {
            axios.get('http://localhost:8090/search/all', { headers: { Authorization: 'Bearer '+localStorage.getItem('token')}})
            .then(response => this.infos = response.data)
            /*console.log(getDataService.getAllData());
            getDataService.getAllData();*/
        }
    }
</script>

<style>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>