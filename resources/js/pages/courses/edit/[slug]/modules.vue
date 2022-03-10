<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
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
                            <router-link class="nav-link text-active-primary pb-4 active" :to="`/courses/edit/${router.currentRoute.value.params.slug}/modules`">Modules</router-link>
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
                    <div class="d-flex flex-column gap-7 gap-lg-10">
                        <div class="card card-flush py-4">
                            <!--begin::Card header-->
                            <div class="card-header">
                                <div class="card-title">
                                    <h2>Modules</h2>
                                </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-0">
                                <div class="fv-row">
                                    <div class="accordion" id="kt_accordion_1">
                                        <div class="accordion-item" v-for="(moduleItem, moduleIndex) in modules" :key="moduleIndex">
                                            <h2 class="accordion-header" :id="`kt_accordion_${moduleIndex}_header_${moduleIndex}`">
                                                <button class="accordion-button fs-4 fw-bold collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#kt_accordion_${moduleIndex}_body_${moduleIndex}`" aria-expanded="true" :aria-controls="`kt_accordion_${moduleIndex}_body_${moduleIndex}`">
                                                    {{ moduleItem.name }}
                                                </button>
                                            </h2>
                                            <div :id="`kt_accordion_${moduleIndex}_body_${moduleIndex}`" class="accordion-collapse collapse" :aria-labelledby="`kt_accordion_${moduleIndex}_header_${moduleIndex}`" data-bs-parent="#kt_accordion_1">
                                                <div class="accordion-body">
                                                    <form @submit.prevent="handleUpdateModule(moduleIndex, moduleItem.id)" ref="editModuleForm" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                                                        <div class="fv-row mb-10">
                                                            <!--begin::Label-->
                                                            <label class="form-label">Name</label>
                                                            <!--end::Label-->
                                                            <!--begin::Input-->
                                                            <input v-model="moduleItem.name" type="text" name="name" class="form-control mb-2" placeholder="Name"  />
                                                            <!--end::Input-->
                                                        </div>
                                                        <div class="fv-row mb-10">
                                                            <!--begin::Label-->
                                                            <label class="form-label">Description</label>
                                                            <!--end::Label-->
                                                            <!--begin::Input-->
                                                            <textarea v-model="moduleItem.description" name="description" class="form-control mb-2" placeholder="Description"></textarea>
                                                            <!--end::Input-->
                                                        </div>
                                                        <div class="fv-row mb-10 row mb-5" >
                                                            <div class="col-md-2 mt-5">
                                                                <h5>Lessons</h5>
                                                            </div>
                                                            <div class="col-md-10">
                                                                <div class="row mt-5">
                                                                    <div v-if="moduleItem.lessons.length" class="col-md-12 mb-3">
                                                                        <ul v-for="(lessonItem, lessonIndex) in moduleItem.lessons" :key="lessonIndex" class="list-group">
                                                                            <li href="javascript:;" class="list-group-item list-group-item-action mb-1 py-3 d-flex justify-content-between align-items-center">
                                                                                <a href="javascript:;" @click="handleShowUpdateLessonForm(lessonIndex, moduleIndex, lessonItem.id)" class="m-0 p-0">{{ lessonItem.title }}</a>
                                                                                <button @click.prevent="handleLessonRemove(moduleIndex, lessonIndex, lessonItem.id)" class="btn btn-danger btn-sm py-1 px-2">Remove</button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="col-md-12">
                                                                        <a @click="addModuleLesson($e, moduleIndex)" href="javascript:;" class="btn btn-light-success">
                                                                            <i class="la la-plus"></i>Add Lesson
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex justify-content-end">
                                                            <button :ref="el => { moduleRemoveButtons[moduleIndex] = el }" type="button" @click.prevent="handleRemoveModule($e, moduleIndex, moduleItem.id)" class="btn btn-danger me-5">
                                                                <span class="indicator-label">Remove Module</span>
                                                                <span class="indicator-progress">Please wait...
                                                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                            </button>

                                                            <button :ref="el => { moduleUpdateButtons[moduleIndex] = el }" type="submit" :id="`moduleUpdateButton-${moduleIndex}`" class="btn btn-primary">
                                                                <span class="indicator-label">Update Module</span>
                                                                <span class="indicator-progress">Please wait...
                                                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="showAddModuleForm" class="row mt-10">
                                    <form @submit.prevent="handleSubmitNewModule" ref="newModuleForm" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                                        <div class="fv-row mb-3">
                                            <h4 class="">New Module</h4>
                                        </div>
                                        <div class="fv-row mb-10">
                                            <!--begin::Label-->
                                            <label class="form-label">Name</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <input v-model="newModule.name" type="text" name="name" class="form-control mb-2" placeholder="Name"  />
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <!--begin::Input group-->
                                        <div class="fv-row mb-10">
                                            <!--begin::Label-->
                                            <label class="form-label">Description</label>
                                            <!--end::Label-->
                                            <!--begin::Input-->
                                            <textarea v-model="newModule.description" name="description" class="form-control mb-2" placeholder="Description"></textarea>
                                            <!--end::Input-->
                                        </div>
                                        <!--end::Input group-->
                                        <div class="fv-row mb-10 row mb-5" >
                                            <div class="col-md-2 mt-5">
                                                <h5>Lessons</h5>
                                            </div>
                                            <div class="col-md-10">
                                                <div class="row mt-5">
                                                    <div v-if="newModule.lessons.create.length" class="col-md-12 mb-3">
                                                        <ul v-for="(lessonItem, lessonIndex) in newModule.lessons.create" :key="lessonIndex" class="list-group">
                                                            <li href="javascript:;" class="list-group-item list-group-item-action mb-1 py-3 d-flex justify-content-between align-items-center">
                                                                <a href="javascript:;" @click="handleShowUpdateLessonForm(lessonIndex, '', '')" class="m-0 p-0">{{ lessonItem.title }}</a>
                                                                <button @click.prevent="handleLessonRemove('', lessonIndex, lessonItem.id)" class="btn btn-danger btn-sm py-1 px-2">Remove</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <a @click="addModuleLesson()" href="javascript:;" class="btn btn-light-success">
                                                            <i class="la la-plus"></i>Add Lesson
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex justify-content-end">
                                            <button @click.prevent="showAddModuleForm = false" class="btn btn-light me-5">Cancel</button>

                                            <button ref="newModuleSubmitButton" type="submit" id="newModuleSubmitButton" class="btn btn-primary">
                                                <span class="indicator-label">Save Module</span>
                                                <span class="indicator-progress">Please wait...
                                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <!--begin::Input group-->
                                <div v-else class="fv-row mt-10 mb-10">
                                    <a role="button" @click="showAddModuleForm = true" class="btn btn-light-primary">
                                        <i class="la la-plus"></i>Add Module
                                    </a>
                                </div>
                            </div>
                            <div class="modal fade" id="newLessonModal" tabindex="-1" aria-labelledby="newLessonModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="newLessonModalLabel">Add Lesson</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <form @submit.prevent="handleSubmitNewLesson" ref="newLessonForm" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                                            <div class="modal-body">
                                                <div class="fv-row mb-10 col-md-12">
                                                    <!--begin::Label-->
                                                    <label class="form-label">Title</label>
                                                    <!--end::Label-->
                                                    <!--begin::Input-->
                                                    <input type="text" v-model="newLesson.title" class="form-control mb-2" placeholder="Lesson Title"  />
                                                    <!--end::Input-->
                                                </div>
                                                <div class="fv-row mb-10 col-md-12">
                                                    <!--begin::Label-->
                                                    <label class="form-label">Description</label>
                                                    <!--end::Label-->
                                                    <!--begin::Input-->
                                                    <textarea class="form-control mb-2" v-model="newLesson.description" placeholder="Lesson Description"></textarea>
                                                    <!--end::Input-->
                                                </div>
                                                <div class="fv-row mb-10 col-md-12">
                                                    <!--begin::Label-->
                                                    <label class="form-label">Period</label>
                                                    <!--end::Label-->
                                                    <!--begin::Input-->
                                                    <input type="text" class="form-control mb-2" v-model="newLesson.period" placeholder="No. of minutes"  />
                                                    <!--end::Input-->
                                                </div>
                                                <div class="fv-row mb-10 col-md-12">
                                                    <!--begin::Label-->
                                                    <label class="form-label">Add Files</label>
                                                    <!--end::Label-->
                                                    <!--begin::Input-->
                                                    <input @change="handleNewModuleLessonFilesInput($event)" type="file" name="new_module_add_lesson_files" multiple class="form-control mb-2"  />
                                                    <!--end::Input-->
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button ref="newLessonSubmitButton" type="submit" id="newLessonSubmitButton" class="btn btn-primary">
                                                    <span class="indicator-label">Save Lesson</span>
                                                    <span class="indicator-progress">Please wait...
                                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="updateLessonModal" tabindex="-1" aria-labelledby="updateLessonModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="updateLessonModalLabel">Update Lesson</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <form @submit.prevent="handleUpdateModuleLesson" ref="editNewModuleLessonForm" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                                        <div class="modal-body">
                                            <div class="fv-row mb-10 col-md-12">
                                                <!--begin::Label-->
                                                <label class="form-label">Title</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input type="text" v-model="updateLesson.title" class="form-control mb-2" placeholder="Lesson Title"  />
                                                <!--end::Input-->
                                            </div>
                                            <div class="fv-row mb-10 col-md-12">
                                                <!--begin::Label-->
                                                <label class="form-label">Description</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <textarea class="form-control mb-2" v-model="updateLesson.description" placeholder="Lesson Description"></textarea>
                                                <!--end::Input-->
                                            </div>
                                            <div class="fv-row mb-10 col-md-12">
                                                <!--begin::Label-->
                                                <label class="form-label">Period</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input type="text" class="form-control mb-2" v-model="updateLesson.period" placeholder="No. of minutes"  />
                                                <!--end::Input-->
                                            </div>
                                            <div class="fv-row mb-10 col-md-12">
                                                <!--begin::Label-->
                                                <label class="form-label">Add Files</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input @change="handleModuleUpdateLessonFilesInput($event)" type="file" name="new_module_update_lesson_files" multiple class="form-control mb-2"  />
                                                <!--end::Input-->
                                                <template v-if="updateLesson.files.existing_files">
                                                    <ul v-for="(file, fileIndex) in updateLesson.files.existing_files">
                                                        <li>
                                                            <a target="_blank" :href="file.getPathUrl">{{ file.name }}</a>
                                                            &nbsp;
                                                            <button @click.prevent="handleRemoveFile(fileIndex, updateLesson.index, updateLesson.moduleIndex, file.id)" class="btn btn-danger btn-sm py-1 px-2">remove</button>
                                                        </li>

                                                    </ul>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button ref="newLessonSubmitButton" type="submit" id="newLessonSubmitButton" class="btn btn-primary">
                                                <span class="indicator-label">Save Lesson</span>
                                                <span class="indicator-progress">Please wait...
                                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                            </button>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMutation, useQuery, useApolloClient } from '@vue/apollo-composable'
import createModule from '@/graphql/mutations/courses/addModule.gql'
import updateModule from '@/graphql/mutations/courses/updateModule.gql'
import removeModule from '@/graphql/mutations/courses/removeModule.gql'
import { usePage } from '@/stores/page'
import { useRouter } from 'vue-router'
import KTApp from '../../../../../core/js/layout/app'
import getCourseModules from '@/graphql/queries/courses/getCourseModules.gql'
import useValidator from '@/composables/useValidator'

const page = usePage()
page.title = "Update Course Modules"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/courses', title: 'Courses'},
    {link: '', title: 'Update Course'}
]
const { resolveClient } = useApolloClient()

const client = resolveClient()

const { mutate: createModuleMutation, onDone, onError  } = useMutation(createModule)
const { mutate: updateModuleMutation, onDone: updateDone, onError: updateError  } = useMutation(updateModule)
const { mutate: removeModuleMutation, onDone: removeDone, onError: removeError  } = useMutation(removeModule)

const router = useRouter()
let course = reactive({})
let modules = ref([])
let newModuleForm = ref(null)
let newLessonForm = ref(null)
let newLessonModal = ref(null)
let updateLessonModal = ref(null)
let showAddModuleForm = ref(false)
let newModuleSubmitButton = ref(null)
let moduleUpdateButtons = ref([])
let moduleRemoveButtons = ref([])
let newLessonSubmitButton = ref(null)
let validator = ref(null)
let moduleEditForms = ref([])
let formData = reactive({
    id: 0,
    modules: {
        update: [],
        delete: [],
        create: []
    }
})
let newModule = reactive({
    name: '',
    description: '',
    lessons: {
        create: []
    }
})

let newLesson = reactive({
    moduleIndex: '',
    lessonRef: '',
    title: '',
    description: '',
    period: '',
    files: {
        create: []
    }
})

let updateLesson = reactive({
    index: 0,
    moduleIndex: '',
    id: '',
    title: '',
    description: '',
    period: '',
    files: {
        create: [],
        existing_files: []
    }
})

const { result, loading } = useQuery(getCourseModules, {
    slug: router.currentRoute.value.params.slug
}, {
        fetchPolicy: 'network-only'
})

const handleSubmitNewModule = () => {
    let validator = useValidator(
        newModuleForm.value,
        {
            'name': {
                validators: {
                    notEmpty: {
                        message: 'module name is required'
                    }
                }
            }
        }
    )
    validator.validate().then(async function (status) {

        if (status == 'Valid') {
            newModuleSubmitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            newModuleSubmitButton.value.disabled = true;

            try {
                const res = await createModuleMutation(
                    {course_id: course.id , ...newModule},{
                    context: {
                        hasUpload: true
                    }
                })

                // router.push('/categories')
                alert("module added successfully");
                newModuleSubmitButton.value.removeAttribute('data-kt-indicator')
                newModuleSubmitButton.value.disabled = false
                modules.value.push(res.data.createModule)

                newModule.name = ''
                newModule.description = ''
                newModule.lessons.create = []

                showAddModuleForm.value = false
            } catch (e) {
                console.log(e);
                alert("error occurred. please try again later.");
                newModuleSubmitButton.value.removeAttribute('data-kt-indicator')
                newModuleSubmitButton.value.disabled = false
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

const handleSubmitNewLesson = () => {
    if(newLesson.title != '') {
        if(newLesson.moduleIndex === '') {
            newModule.lessons.create.push({
                title: newLesson.title,
                description: newLesson.description,
                period: newLesson.period,
                files: {
                    create: newLesson.files.create
                }
            })
        } else {
            const lessonRef = Math.floor((Math.random()*100) + 1) * Math.floor((Math.random()*100) + 1) * Math.floor((Math.random()*100) + 1)

            modules.value[newLesson.moduleIndex].lessons.push({
                title: newLesson.title,
                description: newLesson.description,
                period: newLesson.period,
                files: newLesson.files.create,
                lessonRef: lessonRef
            })

            if(modules.value[newLesson.moduleIndex].lessons.create === undefined) {
                modules.value[newLesson.moduleIndex].lessons.create = []
            }
            modules.value[newLesson.moduleIndex].lessons.create.push({
                title: newLesson.title,
                description: newLesson.description,
                period: newLesson.period,
                files: {
                    create: newLesson.files.create
                },
                lessonRef: lessonRef
            })
        }
    }

    newLesson.moduleIndex = ''
    newLesson.title = ''
    newLesson.description = ''
    newLesson.period = ''
    newLesson.files.create = []

    let lf = document.querySelector('[name=new_module_add_lesson_files]')
    lf.value = ''

    newLessonModal.toggle()
}

const handleUpdateModuleLesson = () => {
    if(updateLesson.title != '') {
        if(updateLesson.moduleIndex === '') {
            let lessonIndex = updateLesson.index

            newModule.lessons.create[lessonIndex].title = updateLesson.title
            newModule.lessons.create[lessonIndex].description = updateLesson.description
            newModule.lessons.create[lessonIndex].period = updateLesson.period
            newModule.lessons.create[lessonIndex].files.create = updateLesson.files.existing_files.concat(updateLesson.files.create)
        } else {
            let moduleIndex = updateLesson.moduleIndex
            let lessonIndex = updateLesson.index

            modules.value[moduleIndex].lessons[lessonIndex].title = updateLesson.title
            modules.value[moduleIndex].lessons[lessonIndex].description = updateLesson.description
            modules.value[moduleIndex].lessons[lessonIndex].period = updateLesson.period
            modules.value[moduleIndex].lessons[lessonIndex].files = updateLesson.files.existing_files.concat(updateLesson.files.create)

            if(modules.value[moduleIndex].lessons.update === undefined) {
                modules.value[moduleIndex].lessons.update = []
            }

            if(updateLesson.id === '') {
                let existingLesson = ''

                for(let i=0; i<modules.value[moduleIndex].lessons.create.length; i++) {
                    if(modules.value[moduleIndex].lessons.create[i].lessonRef == updateLesson.lessonRef) {
                        if(modules.value[moduleIndex].lessons.create[i].files.create === undefined) {
                            modules.value[moduleIndex].lessons.create[i].files.create = []
                        }
                        modules.value[moduleIndex].lessons.create[i].title = updateLesson.title
                        modules.value[moduleIndex].lessons.create[i].description = updateLesson.description
                        modules.value[moduleIndex].lessons.create[i].period = updateLesson.period
                        modules.value[moduleIndex].lessons.create[i].files.create = updateLesson.files.existing_files.concat(updateLesson.files.create)
                    }
                }

            } else {
                let existingIndex = ''
                for(let i=0; i<modules.value[moduleIndex].lessons.update.length; i++) {
                    if(modules.value[moduleIndex].lessons.update[i].id == updateLesson.id) {
                        existingIndex = i
                        break
                    }
                }

                if(existingIndex === '') {
                    modules.value[moduleIndex].lessons.update.push({
                        id: updateLesson.id,
                        title: updateLesson.title,
                        description: updateLesson.description,
                        period: updateLesson.period,
                        files: {
                            create: updateLesson.files.create,
                            delete: updateLesson.files.delete
                        }
                    })
                } else {
                    if(modules.value[moduleIndex].lessons.update[existingIndex].files.create === undefined) {
                        modules.value[moduleIndex].lessons.update[existingIndex].files.create = []
                    }

                    modules.value[moduleIndex].lessons.update[existingIndex].id = updateLesson.id
                    modules.value[moduleIndex].lessons.update[existingIndex].title = updateLesson.title
                    modules.value[moduleIndex].lessons.update[existingIndex].description = updateLesson.description
                    modules.value[moduleIndex].lessons.update[existingIndex].period = updateLesson.period
                    modules.value[moduleIndex].lessons.update[existingIndex].files.create = updateLesson.files.create
                    modules.value[moduleIndex].lessons.update[existingIndex].files.delete = updateLesson.files.delete
                }
            }
        }

    }

    updateLesson.index = 0
    updateLesson.moduleIndex = ''
    updateLesson.title = ''
    updateLesson.oindex = ''
    updateLesson.description = ''
    updateLesson.period = ''
    updateLesson.files.create = []

    let lf = document.querySelector('[name=new_module_update_lesson_files]')
    lf.value = ''

    updateLessonModal.toggle()
}

const addModuleLesson = (e, moduleIndex) => {
    if(moduleIndex != undefined) {
        newLesson.moduleIndex = moduleIndex
    }
    newLessonModal.show()
}

const handleShowUpdateLessonForm = (lessonIndex, moduleIndex, lessonId) => {
    let currentLesson = ''
    if(moduleIndex === '') {
        currentLesson = newModule.lessons.create[lessonIndex]
    } else {
        currentLesson = modules.value[moduleIndex].lessons[lessonIndex]
    }
    if(currentLesson !== '') {
        updateLesson.index = lessonIndex
        updateLesson.title = currentLesson.title
        updateLesson.description = currentLesson.description
        updateLesson.period = currentLesson.period
        if(moduleIndex !== '') {
            if(lessonId === '' || lessonId === undefined) {
                updateLesson.id = ''
                updateLesson.lessonRef = currentLesson.lessonRef
            } else {
                updateLesson.id = lessonId
                updateLesson.oindx = ''
            }

            updateLesson.moduleIndex = moduleIndex
            updateLesson.files.existing_files = currentLesson.files
        } else {
            updateLesson.moduleIndex = ''
            updateLesson.id = ''
            updateLesson.files.existing_files = currentLesson.files.create
        }

        updateLessonModal.show()
    }
}

const handleNewModuleLessonFilesInput = (e) => {
    let selectedLessonFiles = e.target.files

    newLesson.files.create = []

    for(let i=0; i<selectedLessonFiles.length; i++) {
        newLesson.files.create.push({
            name: selectedLessonFiles[i].name,
            path: selectedLessonFiles[i]
        })
    }
}

const handleModuleUpdateLessonFilesInput = (e) => {
    let selectedLessonFiles = e.target.files

    updateLesson.files.create = []

    for(let i=0; i<selectedLessonFiles.length; i++) {
        updateLesson.files.create.push({
            name: selectedLessonFiles[i].name,
            path: selectedLessonFiles[i]
        })
    }
}

const handleRemoveFile = (fileIndex, lessonIndex, moduleIndex, fileId) => {
    if (confirm("Confirm to remove this file. You cannot undo this action.") == true) {
        if(moduleIndex !== '') {
            if(fileId !== undefined) {
                if(updateLesson.files.delete === undefined) {
                    updateLesson.files.delete = []
                }
                updateLesson.files.delete.push(fileId)
            }
        }

        updateLesson.files.existing_files = updateLesson.files.existing_files.filter((file, index) => {
            return index != fileIndex
        })
    }
}

const handleUpdateModule = async (index, id) => {
    let moduleItem = modules.value[index]

    moduleUpdateButtons.value[index].setAttribute('data-kt-indicator', 'on')

    // Disable submit button whilst loading
    moduleUpdateButtons.value[index].disabled = true;

    if(moduleItem.lessons.create !== undefined) {
        for(let i=0; i<moduleItem.lessons.create.length; i++) {
            delete moduleItem.lessons.create[i].lessonRef
        }
    }

    try {

        const res = await updateModuleMutation(
            {
                id: id,
                course_id: course.id ,
                name: moduleItem.name,
                description: moduleItem.description,
                lessons: {
                    create: moduleItem.lessons.create,
                    update: moduleItem.lessons.update,
                    delete: moduleItem.deleted_lessons
                }
            },
            {
                context: {
                    hasUpload: true
                }
            }
        )

        // router.push('/categories')
        alert("module update successfully");
        moduleUpdateButtons.value[index].removeAttribute('data-kt-indicator')
        moduleUpdateButtons.value[index].disabled = false

        modules.value[index] = res.data.updateModule
    } catch (e) {
        console.log(e);
        alert("error occurred. please try again later.");
        moduleUpdateButtons.value[index].removeAttribute('data-kt-indicator')
        moduleUpdateButtons.value[index].disabled = false
    }
}

const handleLessonRemove = (moduleIndex, lessonIndex, lessonId) => {
    if (confirm("Confirm to remove this lesson. You cannot undo this action.") == true) {
        if(moduleIndex !== '') {
            if(lessonId !== undefined) {
                if(modules.value[moduleIndex].deleted_lessons === undefined) {
                    modules.value[moduleIndex].deleted_lessons = []
                }
                modules.value[moduleIndex].deleted_lessons.push(lessonId)
            }

            modules.value[moduleIndex].lessons = modules.value[moduleIndex].lessons.filter((lesson, index) => {
                return index != lessonIndex
            })
        } else {
            newModule.lessons.create = newModule.lessons.create.filter((lesson, index) => {
                return index != lessonIndex
            })
        }
    }
}

const handleRemoveModule = async ($event, moduleIndex, moduleId) => {
    if (confirm("Confirm to remove this module. You cannot undo this action.") == true) {
        if(moduleId !== undefined) {

            moduleRemoveButtons.value[moduleIndex].setAttribute('data-kt-indicator', 'on')

            // Disable submit button whilst loading
            moduleRemoveButtons.value[moduleIndex].disabled = true;

            try {

                const res = await removeModuleMutation(
                    {
                        id: moduleId
                    }
                )

                // router.push('/categories')
                alert("module removed successfully");
                moduleRemoveButtons.value[moduleIndex].removeAttribute('data-kt-indicator')
                moduleRemoveButtons.value[moduleIndex].disabled = false

                modules.value.splice(moduleIndex, 1)
            } catch (e) {
                console.log(e);
                alert("error occurred. please try again later.");
                moduleRemoveButtons.value[moduleIndex].removeAttribute('data-kt-indicator')
                moduleRemoveButtons.value[moduleIndex].disabled = false
            }
        }
    }
}

onMounted(() => {
    // validator = useValidator(
    //     newModuleForm.value,
    //     {
    //         'name': {
    //             validators: {
    //                 notEmpty: {
    //                     message: 'Module Name is required'
    //                 }
    //             }
    //         }
    //     }
    // )

    KTApp.initButtons()

    newLessonModal = new bootstrap.Modal(document.querySelector('#newLessonModal'))
    updateLessonModal = new bootstrap.Modal(document.querySelector('#updateLessonModal'))
})



watchEffect(() => {
    if(result.value) {
        if(!result.value.course) {
            router.push('/courses')
        } else {

            course = result.value.course

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
</script>
