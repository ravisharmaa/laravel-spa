<template>
    <div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Register</div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" @submit.prevent="submitForm">

                            <div class="form-group" :class="{'has-error':errors.name}">
                                <label for="name" class="col-md-4 control-label">Name</label>
                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" v-model="formData.name" name="name"  autofocus>
                                    <span class="help-block" v-if="errors.name">
                                       <strong>{{errors.name[0]}}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group" :class="{'has-error':errors.email}">
                                <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="formData.email" name="email" >
                                    <span class="help-block" v-if="errors.email">
                                       <strong>{{errors.email[0]}}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group" :class="{'has-error':errors.password}">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" v-model="formData.password" class="form-control" name="password" >
                                    <span class="help-block" v-if="errors.password">
                                       <strong>{{errors.password[0]}}</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
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
                        name:null,
                        email:null,
                        password:null
                    },

                    errors:[]

                }
            },

            methods:{
                ...mapActions({
                    register:'auth/register'
                }),
                submitForm() {
                   this.register({
                       payload:{
                           formData: this.formData
                       },
                       context:this
                   })
                }
            }
    }
</script>