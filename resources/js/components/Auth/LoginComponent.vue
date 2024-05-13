<script setup>

</script>

<template>
    <div class="w-25">
        <input v-model="email" type="email" class="form-control m-4" placeholder="email">
        <input v-model="password" type="password" class="form-control m-4" placeholder="password">
        <div v-if="this.error" class="text-danger">{{ error }}</div>
        <input @click.prevent="login" type="submit" class="btn btn-primary m-4" value="Login">
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },

    methods: {
        login() {
            return axios.get('/sanctum/csrf-cookie').then(
                () => {
                    axios.post('/login', {
                        email: this.email,
                        password: this.password,
                    }).then(
                        response => {
                            localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({name: 'users.personal'})
                        }
                    ).catch(
                        error => {
                            this.error = error.response.data.message
                        }
                    )
                });

        }
    }
}
</script>
