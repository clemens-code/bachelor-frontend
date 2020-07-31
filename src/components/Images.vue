<template>
    <div class="images">
        <h1>Images</h1>
        <div v-for="data in dataWithImages">
            <p>id: {{data.info._id}} {{data.info.group}}</p>
            <img :src=data.imageInBytes height="300" width="300">
        </div>
    </div>
</template>

<script>
    import {allData, getDataWithImages} from '../service/GetDataService'

    export default {
        data(){
            return{
                dataWithImages: ''
            };
        },
        mounted() {
            getDataWithImages().then((res) =>{
                console.log(res)
                this.dataWithImages = res;
            })
        }
        //     getDataWithImage().then((result) => {
        //         this.images=result;
        //         console.log(this.images);
        //     });
        // allData().then((result) => {
        //         this.datas = result;
        //     })
        // }
    }
</script>

<style scoped>

</style>