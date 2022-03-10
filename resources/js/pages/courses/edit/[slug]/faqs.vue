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
                                <router-link class="nav-link text-active-primary pb-4" :to="`/courses/edit/${router.currentRoute.value.params.slug}`">General</router-link>
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
                                <router-link class="nav-link text-active-primary active pb-4" :to="`/courses/edit/${router.currentRoute.value.params.slug}/faqs`">FAQs</router-link>
                            </li>
                            <!--end:::Tab item-->
                        </ul>
                        <!--end:::Tabs-->
                        <div class="d-flex flex-column gap-7 gap-lg-10">
                            <!--begin::General options-->
                            <div class="card card-flush py-4">
                                <!--begin::Card header-->
                                <div class="card-header">
                                    <div class="card-title">
                                        <h2>FAQs</h2>
                                    </div>
                                </div>
                                <!--end::Card header-->
                                <!--begin::Card body-->
                                <div class="card-body pt-0">
                                    <template v-for="(faq, index) in faqs" :key="index">
                                        <!--begin::Input group-->
                                        <div class="fv-row">
                                            <!--begin::Label-->
                                            <label class="form-label">Question</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <input v-model="faq.question" type="text" name="question" class="form-control mb-2" placeholder="Question"  />
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <!--begin::Input group-->
                                        <div class="fv-row">
                                            <!--begin::Label-->
                                            <label class="form-label">Answer</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <textarea v-model="faq.answer" name="answer" class="form-control mb-2" placeholder="Answer"></textarea>
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <div class="mb-10 fv-row">
                                            <a @click="removeFaq(index)" href="javascript:;" class="btn btn-sm btn-light-danger mt-0">
                                                <i class="la la-trash-o fs-3"></i>Delete
                                            </a>
                                        </div>
                                    </template>
                                    <!--begin::Input group-->
                                    <div class="fv-row">
                                        <a @click="addFaq" href="javascript:;" class="btn btn-light-primary">
                                            <i class="la la-plus"></i>Add
                                        </a>
                                    </div>
                                    <!--end::Input group-->
                                </div>
                                <!--end::Card body-->
                            </div>
                            <!--end::General options-->

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
page.title = "Update Course FAQs"
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
    },
    faqs: {
        sync: [],
        create: [],
        update: []
    },
    modules: {
        update: [],
        delete: [],
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
let faqs = ref([])
let modules = ref([])
let removed_lessons = ref([])
let removed_files = ref([])
const { resolveClient } = useApolloClient()

const client = resolveClient()

const { mutate: updateCourseMutation, onDone, onError  } = useMutation(updateCourse)

const handleSubmit = () => {
    formData.categories.sync = []
    formData.instructors.sync = []
    formData.locations.sync = []
    formData.skills.sync = []
    formData.skills.create = []
    formData.faqs.sync = []
    formData.faqs.create = []
    formData.faqs.update = []
    formData.modules.update = []
    formData.modules.create = []

    if(faqs.value.length) {
        faqs.value.forEach(function(faq, index) {
            if(faq.id == '') {
                formData.faqs.create.push({
                    question: faq.question,
                    answer: faq.answer
                })
            } else {
                formData.faqs.sync.push(faq.id)

                formData.faqs.update.push({
                    id: faq.id,
                    question: faq.question,
                    answer: faq.answer
                })
            }
        })
    }

    if(modules.value.length) {
        modules.value.forEach(function(moduleItem, index) {
            if(moduleItem.id == '') {
                formData.modules.create.push({
                    name: moduleItem.name,
                    description: moduleItem.description,
                    lessons: {
                        create: moduleItem.lessons
                    }
                })
            } else {
                let moduleLessons = {
                    create: [],
                    update: [],
                    delete: []
                }

                moduleItem.lessons.forEach(function(lessonItem, lessonIndex) {
                    if(lessonItem.id == '') {
                        moduleLessons.create.push({
                            title: lessonItem.title,
                            description: lessonItem.description,
                            period: lessonItem.period,
                            files: { create: lessonItem.files.create }
                        })
                    } else {

                        let removedFilesFromLesson = []

                        if(removed_files.value.length) {
                            removed_files.value.forEach(function(rf) {
                                if(rf.lesson == lessonItem.id) {
                                    removedFilesFromLesson.push(rf.file)
                                }
                            })
                        }

                        moduleLessons.update.push({
                            id: lessonItem.id,
                            title: lessonItem.title,
                            description: lessonItem.description,
                            period: lessonItem.period,
                            files: {
                                delete: removedFilesFromLesson,
                                create: lessonItem.newFiles
                            }
                        })
                    }
                })

                if(removed_lessons.value.length) {
                    removed_lessons.value.forEach(function(rl) {
                        if(rl.module == moduleItem.id) {
                            moduleLessons.delete.push(rl.lesson)
                        }
                    })
                }

                formData.modules.update.push({
                    id: moduleItem.id,
                    name: moduleItem.name,
                    description: moduleItem.description,
                    lessons: moduleLessons
                })
            }
        })
    }

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

const handleLessonFilesInput = (e, moduleIndex, lessonIndex, lessonId) => {
    let selectedLessonFiles = e.target.files
    if(lessonId == '') {
        modules.value[moduleIndex].lessons[lessonIndex].files.create = []
    } else {
        modules.value[moduleIndex].lessons[lessonIndex].newFiles = []
    }

    for(let i=0; i<selectedLessonFiles.length; i++) {
        if(lessonId == '') {
            modules.value[moduleIndex].lessons[lessonIndex].files.create.push({
                name: selectedLessonFiles[i].name,
                path: selectedLessonFiles[i]
            })
        } else {
            modules.value[moduleIndex].lessons[lessonIndex].newFiles.push({
                name: selectedLessonFiles[i].name,
                path: selectedLessonFiles[i]
            })
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

            if(course.faqs.length) {
                course.faqs.forEach(function(faq) {
                    faqs.value.push({
                        question: faq.question,
                        answer: faq.answer,
                        id: faq.id
                    })
                })
            }

            if(course.modules.length) {
                course.modules.forEach(function(moduleItem) {
                    modules.value.push({
                        name: moduleItem.name,
                        description: moduleItem.description,
                        id: moduleItem.id,
                        lessons: moduleItem.lessons.map((lesson) => ({
                            ...lesson
                        }))
                    })
                })
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

const addFaq = () => {
    faqs.value.push({
        id: '',
        question: '',
        answer: ''
    })
}

const removeFaq = (index) => {
    if (confirm("Confirm to remove this FAQ. You cannot undo this action.") == true) {
        faqs.value.splice(index, 1)
    }
}

const addModule = () => {
    modules.value.push({
        id: '',
        name: '',
        description: '',
        lessons: []
    })
}

const removeModule = (index, id) => {
    if (confirm("Confirm to remove this module. You cannot undo this action.") == true) {
        modules.value.splice(index, 1)

        if(id) {
            formData.modules.delete.push(id)
        }
    }
}

const removeFile = (moduleIndex, lessonIndex, fileIndex, lessonId, fileId) => {
    if (confirm("Confirm to remove this file. You cannot undo this action.") == true) {
        modules.value[moduleIndex].lessons[lessonIndex].files = modules.value[moduleIndex].lessons[lessonIndex].files.filter((file, index) => {
            return index != fileIndex
        })

        if(fileId) {
            removed_files.value.push({
                lesson: lessonId,
                file: fileId
            })
        }
    }
}

const addLesson = (moduleIndex) => {
    modules.value[moduleIndex].lessons.push({
        id: '',
        title: '',
        description: '',
        period: '',
        files: {
            create: []
        }
    })
}

const removeLesson = (moduleIndex, lessonIndex, moduleId, lessonId) => {
    if (confirm("Confirm to remove this lesson. You cannot undo this action.") == true) {
        modules.value[moduleIndex].lessons.splice(lessonIndex, 1)

        if(lessonId) {
            removed_lessons.value.push({
                module: moduleId,
                lesson: lessonId,
                lessonIndex: lessonIndex
            })
        }
    }
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
