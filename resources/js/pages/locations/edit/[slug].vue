<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
            <form @submit.prevent="handleSubmit" ref="form" class="form fv-plugins-bootstrap5 fv-plugins-framework d-flex flex-column flex-lg-row">
                <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                    <div class="d-flex flex-column gap-7 gap-lg-10">
                        <!--begin::General options-->
                        <div class="card card-flush py-4">
                            <!--begin::Card header-->
                            <div class="card-header">
                                <div class="card-title">
                                    <h2>General</h2>
                                </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-0">
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Name</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.name" type="text" name="name" class="form-control mb-2" placeholder="Name"  />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Address</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.address" type="text" name="address" class="form-control mb-2" placeholder="Address"  />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Phone Numbers</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.phone_numbers" type="text" name="phone_numbers" class="form-control mb-2" placeholder="Phone Numbers"  />
                                    <div class="text-muted fs-7">If there are multiple numbers, seperate by comma (,)</div>
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Emails</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.emails" type="text" name="emails" class="form-control mb-2" placeholder="Emails"  />
                                    <div class="text-muted fs-7">If there are multiple emails, seperate by comma (,)</div>
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row d-flex flex-column">
                                    <!--begin::Label-->
                                    <label class="form-label">Status</label>
                                    <!--end::Label-->
                                    <!--begin::Radio group-->
                                    <div class="btn-group w-50" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]">
                                        <!--begin::Radio-->
                                        <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success active" data-kt-button="true">
                                            <!--begin::Input-->
                                            <input v-model="formData.status" class="btn-check" type="radio" name="status" checked="checked" v-bind:value="1" />
                                            <!--end::Input-->
                                            Enabled
                                        </label>
                                        <!--end::Radio-->
                                        <!--begin::Radio-->
                                        <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger" data-kt-button="true">
                                            <!--begin::Input-->
                                            <input v-model="formData.status" class="btn-check" type="radio" name="status" v-bind:value="0" />
                                            <!--end::Input-->
                                            Disabled
                                        </label>
                                        <!--end::Radio-->
                                    </div>
                                    <!--end::Radio group-->
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Card header-->
                        </div>
                        <!--end::General options-->
                    </div>
                    <div class="d-flex justify-content-end">
                        <!--begin::Button-->
                        <button @click.prevent="router.go(-1)" id="category_create_cancel" class="btn btn-light me-5">Cancel</button>
                        <!--end::Button-->
                        <!--begin::Button-->
                        <button ref="submitButton" type="submit" id="submitButton" class="btn btn-primary">
                            <span class="indicator-label">Save Changes</span>
                            <span class="indicator-progress">Please wait...
                            <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                        <!--end::Button-->
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useMutation, useQuery, useApolloClient } from '@vue/apollo-composable'
import updateLocation from '@/graphql/mutations/locations/updateLocation.gql'
import { usePage } from '@/stores/page'
import useValidator from '@/composables/useValidator'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import KTApp from '../../../../core/js/layout/app'
import getLocation from '@/graphql/queries/locations/getLocation.gql'

const page = usePage()
page.title = "Update Location"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/locations', title: 'Locations'},
    {link: '', title: 'Update Location'}
]

const router = useRouter()

const { result, loading } = useQuery(getLocation, {
    slug: router.currentRoute.value.params.slug
})

let form = ref(null)
let submitButton = ref(null)
let validator = ref(null)
let formData = reactive({
    name: '',
    address: '',
    phone_numbers: '',
    emails: '',
    status: 1
})

let location = reactive({})

const { resolveClient } = useApolloClient()

const { mutate: updateLocationMutation, onDone, onError  } = useMutation(updateLocation)

const handleSubmit = () => {
    validator.validate().then(async function (status) {
        if (status == 'Valid') {
            submitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            submitButton.value.disabled = true;

            try {
                const res = await updateLocationMutation(formData)

                alert("location updated successfully");
                // router.push('/categories')
                submitButton.value.removeAttribute('data-kt-indicator')
                submitButton.value.disabled = false
            } catch (e) {
                alert("error occurred. please try again later.");
                submitButton.value.removeAttribute('data-kt-indicator')
                submitButton.value.disabled = false
            }
        } else {
            alert("Sorry, looks like there are some errors detected, please try again.");
            // Swal.fire({
            //     text: "Sorry, looks like there are some errors detected, please try again.",
            //     icon: "error",
            //     buttonsStyling: false,
            //     confirmButtonText: "Ok, got it!",
            //     customClass: {
            //         confirmButton: "btn btn-primary"
            //     }
            // });
        }
    })
}

watchEffect(() => {
    if(result.value) {
        if(!result.value.location) {
            router.push('/categories')
        } else {

            location = result.value.location
            formData.id = location.id
            formData.name = location.name
            formData.address = location.address
            formData.phone_numbers = location.phone_numbers
            formData.emails = location.emails
            formData.status = location.status ? 1 : 0
        }
    }
})

onMounted(() => {
    validator = useValidator(
        form.value,
        {
            'name': {
                validators: {
                    notEmpty: {
                        message: 'Name is required'
                    }
                }
            }
        }
    )

    KTApp.initButtons()
})
</script>
