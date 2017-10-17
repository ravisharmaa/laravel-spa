<template>
    <div>
        Time Line index file
    </div>
</template>

<script>
    export default {
        data () {
            return {
                index: null
            }
        },

        mounted () {
            return axios.get('/api/timeline').then((response) => {
                console.log(response)
            })
        }
    }
</script>