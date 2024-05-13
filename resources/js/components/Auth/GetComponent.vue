<script setup>

</script>

<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: "Get",

    data() {
        return {
            users: null
        }
    },

    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            return axios.get('/api/users')
                .then(
                    response => {
                        this.users = response.data.data
                    }
                )
        }
    }
}
</script>
