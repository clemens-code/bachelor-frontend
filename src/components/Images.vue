<template>
    <div class="images">
        <h1>Images</h1>
        <img :src="image"/>
    </div>
</template>

<script>
    import {getDataWithImage} from '../service/GetDataService'
    export default {
        data(){
            return{
                image: ''
            };
        },
        mounted() {
            getDataWithImage().then((result) => {
                this.image=result;
            });
        }
    }
</script>

<style scoped>

</style>