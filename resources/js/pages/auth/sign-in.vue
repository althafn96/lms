<template>
    <form ref="form" @submit.prevent="handleSubmit" class="form w-100" id="kt_sign_in_form">
        <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">Sign In to LMS</h1>
            <!--end::Title-->
            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">New Here?
            <a href="/auth/sign-up" class="link-primary fw-bolder">Create an Account</a></div>
            <!--end::Link-->
        </div>
        <div v-if="serverError != ''" class="fv-row mb-10">
            <!--begin::Alert-->
            <div class="alert alert-dismissible bg-danger d-flex flex-column flex-sm-row p-5 mb-10">
                <!--begin::Wrapper-->
                <div class="d-flex flex-column text-light pe-0 pe-sm-10">
                    <!--begin::Title-->
                    <h4 class="mb-2 light">Error</h4>
                    <!--end::Title-->

                    <!--begin::Content-->
                    <span>{{ serverError }}</span>
                    <!--end::Content-->
                </div>
                <!--end::Wrapper-->

                <!--begin::Close-->
                <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                    <span class="svg-icon svg-icon-2x svg-icon-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
                        </svg>
                    </span>
                </button>
                <!--end::Close-->
            </div>
            <!--end::Alert-->
        </div>
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="form-label fs-6 fw-bolder text-dark">Email</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input v-model="formData.email" class="form-control form-control-lg form-control-solid" type="text" name="email" autocomplete="off" />
            <!--end::Input-->
        </div>
        <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
            <!--end::Label-->
            <!--begin::Input-->
            <input v-model="formData.password" class="form-control form-control-lg form-control-solid" type="password" name="password" autocomplete="off" />
            <!--end::Input-->
        </div>
        <div class="text-center">
            <!--begin::Submit button-->
            <button ref="submitButton" type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5">
                <span class="indicator-label">Continue</span>
                <span class="indicator-progress">Please wait...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
            </button>
            <!--end::Submit button-->
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack mb-2">
                <!--begin::Link-->
                <a href="/auth/forgot-password" class="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                <!--end::Link-->
            </div>
            <!--end::Wrapper-->
            <!--begin::Separator-->
            <div class="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
            <!--end::Separator-->
            <!--begin::Google link-->
            <a href="javascript:" class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
            <img alt="Logo" src="/media/svg/brand-logos/google-icon.svg" class="h-20px me-3" />Continue with Google</a>
            <!--end::Google link-->
        </div>
    </form>
</template>

<script setup>
    import { useMutation, useQuery } from '@vue/apollo-composable'
    import Login from '@/graphql/auth/Login.gql'
    import formValidation from '@/plugins/formvalidation/dist/es6/core/Core'
    import Trigger from '@/plugins/formvalidation/dist/es6/plugins/Trigger'
    import Bootstrap5 from '@/plugins/formvalidation/dist/es6/plugins/Bootstrap5'
    import { useAuth } from '@/stores/auth'
    import { useRouter } from 'vue-router'

    let form = ref(null)
    let formData = reactive({
        email: '',
        password: ''
    })
    let submitButton = ref(null)
    let validator = ref(null)
    let serverError = ref('')

    const { mutate: loginMutation, onDone, onError  } = useMutation(Login)
    const auth = useAuth()

    const router = useRouter()

    const handleSubmit = (e) => {
        validator.validate().then(async function (status) {
            if (status == 'Valid') {
                // Show loading indication
                submitButton.value.setAttribute('data-kt-indicator', 'on')

                // Disable button to avoid multiple click
                submitButton.value.disabled = true
                serverError.value = ''

                const res = await auth.login(loginMutation, formData, onDone, onError, submitButton.value)

                if(res.type == 'success') {
                    router.push('/dashboard')
                } else {
                    submitButton.value.removeAttribute('data-kt-indicator')
                    submitButton.value.disabled = false
                    serverError.value = res.error
                }

            } else {
                submitButton.value.removeAttribute('data-kt-indicator')
                submitButton.value.disabled = false
            }
        })
    }

    onMounted(() => {
        validator = formValidation(
            form.value,
            {
                fields: {
                    'email' : {
                        validators: {
                            notEmpty: {
                                message: 'email address is required'
                            },
                            emailAddress: {
                                message: 'The value is not a valid email address'
                            }
                        }
                    },
                    'password' : {
                        validators: {
                            notEmpty: {
                                message: 'password is required'
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new Trigger(),
                    bootstrap: new Bootstrap5({
                        rowSelector: '.fv-row'
                    })
                }
            }
        )
    })
</script>

<route lang="yaml">
meta:
    layout: auth
</route>
