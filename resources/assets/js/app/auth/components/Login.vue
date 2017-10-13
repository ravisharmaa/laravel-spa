<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>

                <div class="panel-body">
                    <div class="alert alert-danger" v-if="errors.root">
                        {{errors.root}}
                    </div>
                    <form class="form-horizontal" @submit.prevent="submitForm">
                        <div class="form-group" :class="{'has-error':errors.email}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" v-model="formData.email" class="form-control" name="email" >
                                <span class="help-block" v-if="errors.email">
                                       <strong>{{errors.email[0]}}</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group" :class="{'has-error':errors.password}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password"  v-model="formData.password" class="form-control" name="password" >
                                <span class="help-block" v-if="errors.password">
                                       <strong>{{errors.password[0]}}</strong>
                                    </span>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { mapActions } from 'vuex'
    export default {
        data () {
            return {
                formData: {
                    email:null,
                    password:null
                },

                errors:[]

            }
        },

        methods:{
            ...mapActions({
                login:'auth/login'
            }),
            submitForm() {
                this.login({
                    payload:{
                        formData: this.formData
                    },
                    context:this
                }).then(() =>{
                    this.$router.replace({name:'home'})
                })
            }
        }
    }
</script>