<template>
    <div>
        <div v-if="user.authenticated">
            <navigation></navigation>
        </div>

        <div class="container">
           <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
                user: 'auth/user'
            })

    }
</script>
