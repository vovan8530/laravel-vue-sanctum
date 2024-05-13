<script setup>

</script>

<template>
    <div class="w-25">
        <input v-model="name" type="text" class="form-control m-4" placeholder="name">
        <input v-model="email" type="email" class="form-control m-4" placeholder="email">
        <input v-model="password" type="password" class="form-control m-4" placeholder="password">
        <input v-model="password_confirmation" type="password" class="form-control m-4"
               placeholder="confirmation password">
        <div v-if="this.error" class="text-danger">{{ error }}</div>
        <input @click.prevent="register" type="submit" class="btn btn-primary m-4" value="Register">
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: "Registration",

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            error: ''
        }
    },

    methods: {
        register() {
            return axios.get('/sanctum/csrf-cookie').then(
                () => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
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
