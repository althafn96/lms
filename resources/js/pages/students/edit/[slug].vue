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
                                <h2>Display Picture</h2>
                            </div>
                            <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body text-center pt-0">
                            <!--begin::Image input-->
                            <div :class="{'image-input-empty': !loading && !result.student.display_picture != ''}" class="image-input image-input-outline mb-3" data-kt-image-input="true" style="background-image: url(/media/svg/files/blank-image.svg)">
                                <!--begin::Preview existing Display Picture-->
                                <div class="image-input-wrapper w-150px h-150px" :style="!loading ? `background-image: url(${result.student.display_picture})` : ''"></div>
                                <!--end::Preview existing Display Picture-->
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
                            <div class="text-muted fs-7">Set the display picture. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                            <!--end::Description-->
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
                                                <label class="form-label">DOB</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="formData.dob" type="date" name="dob" class="form-control mb-2" placeholder="Data of Birth"  />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="form-label">Gender</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <select class="form-control mb-2" v-model="formData.gender">
                                                    <option value="">Choose Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
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
                                                    <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success" :class="{'active': formData.user.update.status == 1}" data-kt-button="true">
                                                        <!--begin::Input-->
                                                        <input v-model="formData.user.update.status" class="btn-check" type="radio" name="status" v-bind:value="1" :checked="formData.user.update.status == 1 ? 'checked' : ''" />
                                                        <!--end::Input-->
                                                        Enabled
                                                    </label>
                                                    <!--end::Radio-->
                                                    <!--begin::Radio-->
                                                    <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger" :class="{'active': formData.user.update.status == 0}" data-kt-button="true">
                                                        <!--begin::Input-->
                                                        <input v-model="formData.user.update.status" class="btn-check" type="radio" name="status" v-bind:value="0" :checked="formData.user.update.status == 0 ? 'checked' : ''" />
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
                                                <input v-model="formData.user.update.email" type="text" name="email" class="form-control mb-2" placeholder="Email"  />
                                                <!--end::Input-->
                                            </div>
                                            <!--end::Input group-->
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <!--begin::Label-->
                                                <label class="form-label">Password</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="formData.user.update.password" type="password" name="password" class="form-control mb-2" placeholder="Password"  />
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
                        <button @click.prevent="router.go(-1)" id="student_edit_cancel" class="btn btn-light me-5">Cancel</button>
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
import updateStudent from '@/graphql/mutations/users/updateStudent.gql'
import { usePage } from '@/stores/page'
import useValidator from '@/composables/useValidator'
import { useRouter } from 'vue-router'
import KTImageInput from '../../../../core/js/components/image-input'
import KTApp from '../../../../core/js/layout/app'
import getStudent from '@/graphql/queries/users/getStudent.gql'

const page = usePage()
page.title = "Update Student"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/students', title: 'Student'},
    {link: '', title: 'Update Student'}
]

const router = useRouter()

const { result, loading } = useQuery(getStudent, {
    slug: router.currentRoute.value.params.slug
})

let form = ref(null)
let submitButton = ref(null)
let validator = ref(null)
let formData = reactive({
    id: '',
    first_name: '',
    last_name: '',
    gender: '',
    dob: '',
    contact_number: '',
    address: '',
    display_picture: null,
    user: {
        update: {
            id: '',
            email: '',
            password: '',
            status: 1,
        }
    }
})

const { resolveClient } = useApolloClient()

const client = resolveClient()
let display_picture = ref(null)
let student = reactive({})

const { mutate: updateStudentMutation, onDone, onError  } = useMutation(updateStudent)

const handleSubmit = () => {
    validator.validate().then(async function (status) {
        if (status == 'Valid') {

            submitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            submitButton.value.disabled = true;

            try {
                const res = await updateStudentMutation(formData,{
                    context: {
                        hasUpload: true
                    }
                })

                alert("student updated successfully");
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
    }
}

watchEffect(() => {
    if(result.value) {
        if(!result.value.student) {
            router.push('/students')
        } else {
            student = result.value.student
            formData.id = student.id
            formData.first_name = student.first_name
            formData.last_name = student.last_name
            formData.gender = student.gender
            formData.dob = student.dob
            formData.user.update.status = student.user.status ? 1 : 0
            formData.user.update.id = student.user.id
            formData.user.update.email = student.user.email
        }
    }
})

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
            }
        }
    )

    KTImageInput.init()
    KTApp.initButtons()
})
</script>
