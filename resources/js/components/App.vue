<script setup>

</script>

<template>
    <RouterLink :to="{name: 'get.app'}">Get</RouterLink>
    <RouterLink v-if="!token" :to="{name: 'users.login'}">Login</RouterLink>
    <RouterLink v-if="!token" :to="{name: 'users.registration'}">Registration</RouterLink>
    <RouterLink v-if="token" :to="{name: 'users.personal'}">Personal</RouterLink>
    <a href="#" v-if="token" @click.prevent="logout">Logout</a>
    <RouterView :key="$route.fullPath"></RouterView>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'App',

    data() {
        return {
            token: ''
        }
    },

    mounted() {
        this.getToken()
    },

    updated() {
        this.getToken()
    },

    methods: {
        logout() {
            axios.post('/logout').then(
                () => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'users.login'})
                }
            )
        },
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },
    }


}
</script>
