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
        <h2 v-if="userIsntLogedIn">Please Login to see the Data!</h2>
        <ul v-for="info in filteredInformations">
            <li>id: {{info._id}}</li>
            <li>{{info.information}}</li>
            <li>{{info.group}}</li>
        </ul>
    </div>
</template>

<script>
    import {allData} from '../service/GetDataService';
    export default {
        data() {
            return{
                userIsntLogedIn: '',
                infos: [],
                search: '',
                search_for:''
            };
        },
        mounted() {
            if(this.$store.getters.isLoggedIn) {
                this.userIsntLogedIn=false;
                allData().then(result => this.infos = result);
            }else{
                this.userIsntLogedIn=true;
                console.log(this.userIsntLogedIn)
            }

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