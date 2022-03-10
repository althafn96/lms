<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
            <form @submit.prevent="handleSubmit" ref="form" class="form fv-plugins-bootstrap5 fv-plugins-framework d-flex flex-column flex-lg-row">

                <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                    <div class="d-flex flex-column gap-7 gap-lg-10">
                        <!--begin:::Tabs-->
                        <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                            <!--begin:::Tab item-->
                            <li class="nav-item">
                                <router-link class="nav-link text-active-primary pb-4 active" :to="`/courses/edit/${router.currentRoute.value.params.slug}`">General</router-link>
                            </li>
                            <!--end:::Tab item-->
                            <!--begin:::Tab item-->
                            <li class="nav-item">
                                <router-link class="nav-link text-active-primary pb-4" :to="`/courses/edit/${router.currentRoute.value.params.slug}/modules`">Modules</router-link>
                            </li>
                            <!--end:::Tab item-->
                            <!--begin:::Tab item-->
                            <!-- <li class="nav-item">
                                <router-link class="nav-link text-active-primary pb-4" :to="`/courses/edit/${router.currentRoute.value.params.slug}/payment-plans`">Payment Plans</router-link>
                            </li> -->
                            <!--end:::Tab item-->
                            <!--begin:::Tab item-->
                            <li class="nav-item">
                                <router-link class="nav-link text-active-primary pb-4" :to="`/courses/edit/${router.currentRoute.value.params.slug}/faqs`">FAQs</router-link>
                            </li>
                            <!--end:::Tab item-->
                        </ul>
                        <!--end:::Tabs-->
                        <div class="d-flex">
                            <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                                <div class="card card-flush py-4">
                                    <!--begin::Card header-->
                                    <div class="card-header">
                                        <!--begin::Card title-->
                                        <div class="card-title">
                                            <h2>Thumbnail</h2>
                                        </div>
                                        <!--end::Card title-->
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Card body-->
                                    <div class="card-body text-center pt-0">
                                        <!--begin::Image input-->
                                        <div :class="{'image-input-empty': !loading && !result.course.thumbnail != ''}" class="image-input image-input-outline mb-3" data-kt-image-input="true" style="background-image: url(/media/svg/files/blank-image.svg)">
                                            <!--begin::Preview existing thumbnail-->
                                            <div class="image-input-wrapper w-150px h-150px" :style="!loading ? `background-image: url(${result.course.thumbnail})` : ''"></div>
                                            <!--end::Preview existing thumbnail-->
                                            <!--begin::Label-->
                                            <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change Thumbnail">
                                                <i class="bi bi-pencil-fill fs-7"></i>
                                                <!--begin::Inputs-->
                                                <input ref="thumbnail" @change="handleFileInput($event, 'thumbnail', 'set')" type="file" name="thumbnail" accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" @click="handleFileInput($event, 'thumbnail', 'remove')" name="thumbnail_remove" />
                                                <!--end::Inputs-->
                                            </label>
                                            <!--end::Label-->
                                            <!--begin::Cancel-->
                                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel Icon">
                                                <i class="bi bi-x fs-2"></i>
                                            </span>
                                            <!--end::Cancel-->
                                            <!--begin::Remove-->
                                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove Icon">
                                                <i class="bi bi-x fs-2"></i>
                                            </span>
                                            <!--end::Remove-->
                                        </div>
                                        <!--end::Image input-->
                                        <!--begin::Description-->
                                        <div class="text-muted fs-7">Set the thumbnail. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                                        <!--end::Description-->
                                    </div>
                                    <!--end::Card body-->
                                </div>
                                <div class="card card-flush py-4">
                                    <!--begin::Card header-->
                                    <div class="card-header">
                                        <!--begin::Card title-->
                                        <div class="card-title">
                                            <h2>Cover Image</h2>
                                        </div>
                                        <!--end::Card title-->
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Card body-->
                                    <div class="card-body text-center pt-0">
                                        <!--begin::Image input-->
                                        <div :class="{'image-input-empty': !loading && !result.course.cover_image != ''}" class="image-input image-input-outline mb-3" data-kt-image-input="true" style="background-image: url(/media/svg/files/blank-image.svg)">
                                            <!--begin::Preview existing Icon-->
                                            <div class="image-input-wrapper w-150px h-150px" :style="!loading ? `background-image: url(${result.course.cover_image})` : ''"></div>
                                            <!--end::Preview existing Icon-->
                                            <!--begin::Label-->
                                            <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change Cover Image">
                                                <i class="bi bi-pencil-fill fs-7"></i>
                                                <!--begin::Inputs-->
                                                <input ref="cover_img" @change="handleFileInput($event, 'cover_img', 'set')" type="file" name="cover_img" accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" @click="handleFileInput($event, 'cover_img', 'remove')" name="cover_img_remove" />
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
                                        <div class="text-muted fs-7">Set the cover image. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                                        <!--end::Description-->
                                    </div>
                                    <!--end::Card body-->
                                </div>
                                <div class="card card-flush py-4">
                                    <!--begin::Card header-->
                                    <div class="card-header">
                                        <!--begin::Card title-->
                                        <div class="card-title">
                                            <h2>Categories</h2>
                                        </div>
                                        <!--end::Card title-->
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Card body-->
                                    <div class="card-body text-center pt-0">
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <VueMultiselect
                                                    v-model="formData.selected_categories"
                                                    @search-change="fetchCategories"
                                                    track-by="id"
                                                    label="name"
                                                    :show-labels="false"
                                                    :multiple="true"
                                                    :close-on-select="false"
                                                    noOptionsText="Enter Category Name"
                                                    :options="categories">
                                                </VueMultiselect>
                                            </div>
                                            <!--end::Input group-->
                                    </div>
                                    <!--end::Card body-->
                                </div>
                                <div class="card card-flush py-4">
                                    <!--begin::Card header-->
                                    <div class="card-header">
                                        <!--begin::Card title-->
                                        <div class="card-title">
                                            <h2>Instructors</h2>
                                        </div>
                                        <!--end::Card title-->
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Card body-->
                                    <div class="card-body text-center pt-0">
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <VueMultiselect
                                                    v-model="formData.selected_instructors"
                                                    @search-change="fetchInstructors"
                                                    track-by="id"
                                                    label="name"
                                                    :show-labels="false"
                                                    :multiple="true"
                                                    :close-on-select="false"
                                                    noOptionsText="Enter Instructor"
                                                    placeholder="Search an Instructor"
                                                    :options="instructors">
                                                </VueMultiselect>
                                            </div>
                                            <!--end::Input group-->
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
                                <div class="card card-flush py-4">
                                    <!--begin::Card header-->
                                    <div class="card-header">
                                        <!--begin::Card title-->
                                        <div class="card-title">
                                            <h2>Skills</h2>
                                        </div>
                                        <!--end::Card title-->
                                    </div>
                                    <!--end::Card header-->
                                    <!--begin::Card body-->
                                    <div class="card-body text-center pt-0">
                                            <!--begin::Input group-->
                                            <div class="mb-10 fv-row">
                                                <VueMultiselect
                                                    v-model="formData.selected_skills"
                                                    @search-change="fetchSkills"
                                                    track-by="id"
                                                    label="title"
                                                    :show-labels="false"
                                                    :multiple="true"
                                                    :close-on-select="false"
                                                    noOptionsText="Enter Skill"
                                                    placeholder="Search or add a skill"
                                                    :taggable="true"
                                                    @tag="addSkill"
                                                    :options="skills">
                                                </VueMultiselect>
                                            </div>
                                            <!--end::Input group-->
                                    </div>
                                    <!--end::Card body-->
                                </div>
                            </div>
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
                                            <label class="form-label">Short Description</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <ckeditor :editor="editor" v-model="formData.short_description" :config="editorConfig"></ckeditor>
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <!--begin::Input group-->
                                        <div class="mb-10 fv-row">
                                            <!--begin::Label-->
                                            <label class="form-label">Long Description</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <ckeditor :editor="editor" v-model="formData.long_description" :config="editorConfig"></ckeditor>
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <!--begin::Input group-->
                                        <div class="mb-10 fv-row">
                                            <!--begin::Label-->
                                            <label class="form-label">Prerequisites</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <ckeditor :editor="editor" v-model="formData.prerequisites" :config="editorConfig"></ckeditor>
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <!--begin::Input group-->
                                        <div class="mb-10 fv-row d-flex flex-column">
                                            <!--begin::Label-->
                                            <label class="form-label">Featured</label>
                                            <!--end::Label-->
                                            <!--begin::Radio group-->
                                            <div class="btn-group w-50" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]">
                                                <!--begin::Radio-->
                                                <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success"  :class="{'active': formData.is_featured == 1}" data-kt-button="true">
                                                    <!--begin::Input-->
                                                    <input v-model="formData.is_featured" class="btn-check" type="radio" name="is_featured" :checked="formData.is_featured == 1 ? 'checked' : ''" v-bind:value="1" />
                                                    <!--end::Input-->
                                                    Yes
                                                </label>
                                                <!--end::Radio-->
                                                <!--begin::Radio-->
                                                <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger" :class="{'active': formData.is_featured == 0}" data-kt-button="true">
                                                    <!--begin::Input-->
                                                    <input v-model="formData.is_featured" class="btn-check" type="radio" name="is_featured" :checked="formData.is_featured == 0 ? 'checked' : ''" v-bind:value="0" />
                                                    <!--end::Input-->
                                                    No
                                                </label>
                                                <!--end::Radio-->
                                            </div>
                                            <!--end::Radio group-->
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
                                                <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success" :class="{'active': formData.status == 1}" data-kt-button="true">
                                                    <!--begin::Input-->
                                                    <input v-model="formData.status" class="btn-check" type="radio" name="status" v-bind:value="1" :checked="formData.status == 1 ? 'checked' : ''" />
                                                    <!--end::Input-->
                                                    Enabled
                                                </label>
                                                <!--end::Radio-->
                                                <!--begin::Radio-->
                                                <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-danger" :class="{'active': formData.status == 0}" data-kt-button="true">
                                                    <!--begin::Input-->
                                                    <input v-model="formData.status" class="btn-check" type="radio" name="status" v-bind:value="0" :checked="formData.status == 0 ? 'checked' : ''" />
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
                    </div>
                    <div class="d-flex justify-content-end">
                        <!--begin::Button-->
                        <button @click.prevent="router.go(-1)" id="course_update_cancel" class="btn btn-light me-5">Cancel</button>
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
import updateCourse from '@/graphql/mutations/courses/updateCourse.gql'
import { usePage } from '@/stores/page'
import VueMultiselect from 'vue-multiselect'
import useValidator from '@/composables/useValidator'
import Swal from 'sweetalert2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useRouter } from 'vue-router'
import KTImageInput from '../../../../../core/js/components/image-input'
import KTApp from '../../../../../core/js/layout/app'
import getCourse from '@/graphql/queries/courses/getCourse.gql'
import getCategoriesToSelect from '@/graphql/queries/courses/getCategoriesToSelect.gql'
import getSkillsToSelect from '@/graphql/queries/courses/getSkillsToSelect.gql'
import getInstructorsToSelect from '@/graphql/queries/users/getInstructorsToSelect.gql'
import getLocationsToSelect from '@/graphql/queries/locations/getLocationsToSelect.gql'

const page = usePage()
page.title = "Update Course"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/courses', title: 'Courses'},
    {link: '', title: 'Update Course'}
]

const router = useRouter()

const { result, loading } = useQuery(getCourse, {
    slug: router.currentRoute.value.params.slug
}, {
        fetchPolicy: 'network-only'
})

let form = ref(null)
let submitButton = ref(null)
let validator = ref(null)
let formData = reactive({
    id: 0,
    name: '',
    short_description: '',
    long_description: '',
    prerequisites: '',
    thumbnail: null,
    cover_img: null,
    status: 1,
    is_featured: 0,
    selected_categories: [],
    selected_skills: [],
    selected_instructors: [],
    selected_locations: [],
    categories: {
        sync: []
    },
    instructors: {
        sync: []
    },
    locations: {
        sync: []
    },
    skills: {
        sync: [],
        create: []
    }
})
let editor = ClassicEditor
let editorConfig = {}
let thumbnail = ref(null)
let cover_img = ref(null)
let lesson_files = ref([])
let course = reactive({})
let categories = ref([])
let skills = ref([])
let instructors = ref([])
let locations = ref([])
const { resolveClient } = useApolloClient()

const client = resolveClient()

const { mutate: updateCourseMutation, onDone, onError  } = useMutation(updateCourse)

const handleSubmit = () => {
    formData.categories.sync = []
    formData.instructors.sync = []
    formData.locations.sync = []
    formData.skills.sync = []
    formData.skills.create = []

    if(formData.selected_categories.length) {
        formData.selected_categories.forEach(function(selectedCategory, index) {
            formData.categories.sync.push(selectedCategory.id)
        })
    }

    if(formData.selected_instructors.length) {
        formData.selected_instructors.forEach(function(selectedInstructor, index) {
            formData.instructors.sync.push(selectedInstructor.id)
        })
    }

    if(formData.selected_locations.length) {
        formData.selected_locations.forEach(function(selectedLocation, index) {
            formData.locations.sync.push(selectedLocation.id)
        })
    }

    if(formData.selected_skills.length) {
        formData.selected_skills.forEach(function(selectedSkill, index) {
            if(isNaN(selectedSkill.id)) {
                formData.skills.create.push({
                    title: selectedSkill.title
                })
            } else {
                formData.skills.sync.push(selectedSkill.id)
            }
        })
    }

    validator.validate().then(async function (status) {
        if (status == 'Valid') {
            submitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            submitButton.value.disabled = true;

            try {
                const res = await updateCourseMutation(
                    {...formData},{
                    context: {
                        hasUpload: true
                    }
                })

                // router.push('/categories')
                alert("course updated successfully");
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
    if(type == 'thumbnail') {
        if(action == 'set') {
            // console.log(thumbnail.value.files[0])
            // formData.thumbnail = thumbnail.value.files[0]
            let thumbnailFile = new Blob(thumbnail.value.files, {type: "image/*"})
            thumbnailFile.name = thumbnail.value.files[0].name

            formData.thumbnail = thumbnailFile
        } else {
            formData.thumbnail = null
        }
    }
    if(type == 'cover_img') {
        if(action == 'set') {
            let imageFile = new Blob(cover_img.value.files, {type: "image/*"})
            imageFile.name = cover_img.value.files[0].name

            formData.cover_img = imageFile
        } else {
            formData.cover_img = null
        }
    }
}

watchEffect(() => {
    if(result.value) {
        if(!result.value.course) {
            router.push('/categories')
        } else {

            course = result.value.course
            formData.id = course.id
            formData.name = course.name
            formData.short_description = course.short_description
            formData.long_description = course.long_description
            formData.prerequisites = course.prerequisites
            formData.status = course.status ? 1 : 0
            formData.is_featured = course.is_featured ? 1 : 0

            if(course.categories.length) {
                course.categories.forEach(function(category) {
                    formData.selected_categories = [{
                        id: category.id,
                        name: category.name
                    }]
                })
            }

            if(course.instructors.length) {
                let course_ins = []
                course.instructors.forEach(function(instructor) {
                    course_ins.push({
                        id: instructor.id,
                        name: instructor.full_name
                    })
                })
                formData.selected_instructors = course_ins
            }

            if(course.locations.length) {
                let course_locations = []
                course.locations.forEach(function(location) {
                    course_locations.push({
                        id: location.id,
                        name: location.name
                    })
                })

                formData.selected_locations = course_locations
            }

            if(course.skills.length) {
                let course_skills = []
                course.skills.forEach(function(skill) {
                    course_skills.push({
                        id: skill.id,
                        title: skill.title
                    })
                })
                formData.selected_skills = course_skills
            }
        }
    }
})

const fetchCategories = async () => {

    const { data, loading, fetch } = await client.query({
        query: getCategoriesToSelect,
    })

    categories.value = data.categories.data.map(function (category) {
        return {
            id: category.id,
            name: category.name
        }
    })
}

const fetchInstructors = async () => {

    const { data, loading, fetch } = await client.query({
        query: getInstructorsToSelect,
    }, {
        fetchPolicy: 'network-only'
    })

    instructors.value = data.instructors.data.map(function (instructor) {
        return {
            id: instructor.id,
            name: instructor.full_name
        }
    })
}

const fetchSkills = async () => {

    const { data, loading, fetch } = await client.query({
        query: getSkillsToSelect,
    }, {
        fetchPolicy: 'network-only'
    })

    skills.value = data.skills.data.map(function (skill) {
        return {
            id: skill.id,
            title: skill.title
        }
    })
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

const addSkill = (newSkill) => {
    skills.value.push({
        title: newSkill,
        id: newSkill
    })
    formData.selected_skills.push({
        title: newSkill,
        id: newSkill
    })
}

onMounted(() => {
    validator = useValidator(
        form.value,
        {
            'name': {
                validators: {
                    notEmpty: {
                        message: 'Course Name is required'
                    }
                }
            }
        }
    )

    KTImageInput.init()
    KTApp.initButtons()
})
</script>
