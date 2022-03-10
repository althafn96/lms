<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
            <form @submit.prevent="handleSubmit" ref="form" class="form fv-plugins-bootstrap5 fv-plugins-framework d-flex flex-column flex-lg-row">
                <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                    <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                            <!--begin::Card title-->
                            <div class="card-title">
                                <h2>DIsplay Picture</h2>
                            </div>
                            <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body text-center pt-0">
                            <!--begin::Image input-->
                            <div class="image-input image-input-empty image-input-outline mb-3" data-kt-image-input="true" style="background-image: url(/media/svg/files/blank-image.svg)">
                                <!--begin::Preview existing Icon-->
                                <div class="image-input-wrapper w-150px h-150px"></div>
                                <!--end::Preview existing Icon-->
                                <!--begin::Label-->
                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change Image">
                                    <i class="bi bi-pencil-fill fs-7"></i>
                                    <!--begin::Inputs-->
                                    <input ref="display_picture" @change="handleFileInput($event, 'display_picture', 'set')" type="file" name="display_picture" accept=".png, .jpg, .jpeg" />
                                    <input type="hidden" @click="handleFileInput($event, 'display_picture', 'remove')" name="display_picture_remove" />
                                    <!--end::Inputs-->
                                </label>
                                <!--end::Label-->
                                <!--begin::Cancel-->
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel Image">
                                    <i class="bi bi-x fs-2"></i>
                                </span>
                                <!--end::Cancel-->
                                <!--begin::Remove-->
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove Image">
                                    <i class="bi bi-x fs-2"></i>
                                </span>
                                <!--end::Remove-->
                            </div>
                            <!--end::Image input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">Set the instructor image. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                            <!--end::Description-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                            <!--begin::Card title-->
                            <div class="card-title">
                                <h2>Institutions</h2>
                            </div>
                            <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body text-center pt-0">
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <VueMultiselect
                                        v-model="formData.selected_locations"
                                        @search-change="fetchLocations"
                                        track-by="id"
                                        label="name"
                                        :show-labels="false"
                                        :multiple="true"
                                        :close-on-select="false"
                                        noOptionsText="Enter Location"
                                        placeholder="Search a Location"
                                        :options="locations">
                                    </VueMultiselect>
                                </div>
                                <!--end::Input group-->
                        </div>
                        <!--end::Card body-->
                    </div>
                </div>
                <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                    <div class="d-flex flex-column gap-7 gap-lg-10">
                        <!--begin:::Tabs-->
                        <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                            <!--begin:::Tab item-->
                            <li class="nav-item">
                                <a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#general">General</a>
                            </li>
                            <!--end:::Tab item-->
                            <!--begin:::Tab item-->
                            <li class="nav-item">
                                <a class="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#credentials">Credentials</a>
                            </li>
                            <!--end:::Tab item-->
                        </ul>
                        <!--end:::Tabs-->
                        <!--begin::Tab content-->
                        <div class="tab-content">
                            <!--begin::Tab pane-->
                            <div class="tab-pane fade show active" id="general" role="tab-panel">
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
                                                <label class="required form-label">First Name</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="formData.first_name" type="text" name="first_name" class="form-control mb-2" placeholder="First Name"  />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="required form-label">Last Name</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="formData.last_name" type="text" name="last_name" class="form-control mb-2" placeholder="Last Name"  />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="form-label">Bio</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <ckeditor :editor="editor" v-model="formData.bio" :config="editorConfig"></ckeditor>
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="form-label">Contact Number</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="formData.contact_number" type="text" name="contact_number" class="form-control mb-2" placeholder="Contact Number"  />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="form-label">Address</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <textarea v-model="formData.address" type="text" name="address" class="form-control mb-2" placeholder="Address" ></textarea>
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
                                                        <input v-model="formData.user.create.status" class="btn-check" type="radio" name="status" checked="checked" v-bind:value="1" />
                                                        <!--end::Input-->
                                                        Enabled
                                                    </label>
                                                    <!--end::Radio-->
                                                    <!--begin::Radio-->
                                                    <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger" data-kt-button="true">
                                                        <!--begin::Input-->
                                                        <input v-model="formData.user.create.status" class="btn-check" type="radio" name="status" v-bind:value="0" />
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
                            </div>
                            <!--end::Tab pane-->
                            <!--begin::Tab pane-->
                            <div class="tab-pane fade" id="credentials" role="tab-panel">
                                <div class="d-flex flex-column gap-7 gap-lg-10">
                                    <!--begin::General options-->
                                    <div class="card card-flush py-4">
                                        <!--begin::Card header-->
                                        <div class="card-header">
                                            <div class="card-title">
                                                <h2>Credentials</h2>
                                            </div>
                                        </div>
                                        <!--end::Card header-->
                                        <!--begin::Card body-->
                                        <div class="card-body pt-0">
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="required form-label">Email</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="formData.user.create.email" type="text" name="email" class="form-control mb-2" placeholder="Email"  />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="required form-label">Password</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="formData.user.create.password" type="password" name="password" class="form-control mb-2" placeholder="Password"  />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                        </div>
                                        <!--end::Card body-->
                                    </div>
                                    <!--end::General options-->

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <!--begin::Button-->
                        <button @click.prevent="router.go(-1)" id="instructor_create_cancel" class="btn btn-light me-5">Cancel</button>
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
import { useMutation, useApolloClient } from '@vue/apollo-composable'
import addInstructor from '@/graphql/mutations/users/addInstructor.gql'
import getInstructor from '@/graphql/queries/users/getInstructor.gql'
import getLocationsToSelect from '@/graphql/queries/locations/getLocationsToSelect.gql'
import { usePage } from '@/stores/page'
import Swal from 'sweetalert2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useRouter } from 'vue-router'
import KTImageInput from '../../../core/js/components/image-input'
import KTApp from '../../../core/js/layout/app'
import useValidator from '@/composables/useValidator'
import VueMultiselect from 'vue-multiselect'
import { useQuery } from '@vue/apollo-composable'

const page = usePage()
page.title = "Add Instructor"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/instructors', title: 'instructors'},
    {link: '', title: 'Add Instructor'}
]

const router = useRouter()

let form = ref(null)
let submitButton = ref(null)
let validator = ref(null)
let formData = reactive({
    first_name: '',
    last_name: '',
    bio: '',
    contact_number: '',
    address: '',
    display_picture: null,
    selected_locations: [],
    locations: {
        sync: []
    },
    user: {
        create: {
            email: '',
            password: '',
            status: 1
        }
    }
})
let editor = ClassicEditor
let editorConfig = {}
const { resolveClient } = useApolloClient()

const client = resolveClient()

let display_picture = ref(null)
let locations = ref([])

const { mutate: addInstructorMutation, onDone, onError  } = useMutation(addInstructor)

const handleSubmit = () => {
    validator.validate().then(async function (status) {
        if (status == 'Valid') {
            formData.locations.sync = []

            if(formData.selected_locations.length) {
                formData.selected_locations.forEach(function(selectedLocation, index) {
                    formData.locations.sync.push(selectedLocation.id)
                })
            }

            submitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            submitButton.value.disabled = true;

            try {
                const res = await addInstructorMutation(
                    {...formData},
                    {
                        context: {
                            hasUpload: true
                        }
                    }
                )

                // console.log(client.cache.readQuery({query: getInstructor}))

                alert("instructor added successfully");
                router.push('/instructors')
                submitButton.value.removeAttribute('data-kt-indicator')
                submitButton.value.disabled = false
            } catch (e) {
                alert("error occurred. please try again later.");
                console.log(e);
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

const handleFileInput = (e, type, action) => {
    if(type == 'display_picture') {
        if(action == 'set') {
            // console.log(icon.value.files[0])
            // formData.display_picture = icon.value.files[0]
            let dpFile = new Blob(display_picture.value.files, {type: "image/*"})
            dpFile.name = display_picture.value.files[0].name

            formData.display_picture = dpFile
        } else {
            formData.display_picture = null
        }
        // console.log(formData.display_picture)
    }
}

const handleParentSelectOpen = async (page) => {
}

const fetchLocations = async () => {

    const { data, loading, fetch } = await client.query({
        query: getLocationsToSelect,
    }, {
        fetchPolicy: 'network-only'
    })

    locations.value = data.locations.data.map(function (location) {
        return {
            id: location.id,
            name: location.name
        }
    })
}

onMounted(() => {
    validator = useValidator(
        form.value,
        {
            'first_name': {
                validators: {
                    notEmpty: {
                        message: 'first name is required'
                    }
                }
            },
            'last_name': {
                validators: {
                    notEmpty: {
                        message: 'last name is required'
                    }
                }
            },
            'email': {
                validators: {
                    notEmpty: {
                        message: 'email is required'
                    }
                }
            },
            'password': {
                validators: {
                    notEmpty: {
                        message: 'password is required'
                    }
                }
            },
        }
    )

    KTImageInput.init()
    KTApp.initButtons()
})
</script>
