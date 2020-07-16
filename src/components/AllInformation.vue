<template>
    <div class="hello">
        <h1>Hallo</h1>
        <input type="text" v-model="search" placeholder="Search infos">
        <form>
            <input id="search_id" type="radio" value="id" v-model="search_for" checked="checked"/>
            <label for="search_id">ID</label>
            <input id="search_group" type="radio" value="group" v-model="search_for"/>
            <label for="search_group">Group</label>
        </form>
        <ul v-for="info in filteredInformations">
            <li>id: {{info._id}}</li>
            <li>{{info.information}}</li>
            <li>{{info.group}}</li>
        </ul>
    </div>
</template>

<script>
    //import getDataService from '../service/GetDataService';
    import {allData} from '../service/GetDataService';
    export default {
        data() {
            return{
                infos: [],
                search: '',
                search_for:''
            };
        },
        mounted() {
            allData().then(result => this.infos = result)
        },
        computed:{
            filteredInformations: function () {
                if(this.search_for==='id'){
                    return this.infos.filter((info) =>{
                        return String(info._id).match(this.search);
                    });
                }else {
                    return this.infos.filter((info) => {
                        return info.group.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
                    })
                }

            }
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