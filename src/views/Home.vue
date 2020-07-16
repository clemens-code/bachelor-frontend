<template>
    <div class="home">
        <img src="../assets/logo.png">
        <AllInformations msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import AllInformations from '../components/AllInformation.vue'
    export default {
        name: 'home',
        components: {
            AllInformations
        }
    }
</script>