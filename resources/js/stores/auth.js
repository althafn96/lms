import { defineStore } from 'pinia'
import apolloClient from '../apollo.config'
import Me from '../graphql/queries/auth/Me.gql'

export const useAuth = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false
    }),

    actions: {
        async login(mutation, data, onDone, onError, btn) {
            try {
                const res = await mutation({
                    email: data.email,
                    password: data.password
                })
                this.user = res.data.login
                this.isAuthenticated = true

                return {
                    type: 'success'
                }
            } catch(error) {
                this.isAuthenticated = false
                this.user = null

                return {
                    type: 'error',
                    error: error.message
                }

            }
        },

        async logout(mutation) {
            try {
                const res = await mutation()
                this.user = null
                this.isAuthenticated = false

                return {
                    type: 'success'
                }
            } catch(error) {

                return {
                    type: 'error',
                    error: error.message
                }

            }
        },

        async me() {
            try {
                const result = await apolloClient.query({
                    query: Me,
                    fetchPolicy: "no-cache"
                })

                if(result.data.me) {
                    this.user = result.data.me
                    this.isAuthenticated = true
                } else {
                    this.user = null
                    this.isAuthenticated = false
                }

            } catch(e) {
                this.user = null
                this.isAuthenticated = false
            }
        },

        updateUser(user) {
            this.user.loggable.full_name = user.full_name
            this.user.email = user.user.email
            this.user.loggable.display_picture = user.display_picture
        }
    }
})
