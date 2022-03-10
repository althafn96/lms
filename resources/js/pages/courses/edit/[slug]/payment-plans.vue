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
                            <router-link class="nav-link text-active-primary pb-4" :to="`/courses/edit/${router.currentRoute.value.params.slug}/modules`">Modules</router-link>
                        </li>
                        <!--end:::Tab item-->
                        <!--begin:::Tab item-->
                        <li class="nav-item">
                            <router-link class="nav-link text-active-primary pb-4 active" :to="`/courses/edit/${router.currentRoute.value.params.slug}/payment-plans`">Payment Plans</router-link>
                        </li>
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
                                    <h2>Payment Plans</h2>
                                </div>
                            </div>
                            <!--end::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body pt-0">
                                <div class="fv-row mt-10 mb-10">
                                    <div v-if="showAddPaymentPlanForm" class="row mt-10">
                                        <form @submit.prevent="handleSubmitNewPlan" ref="newPlanForm" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                                            <div class="fv-row mb-3">
                                                <h4 class="">New Plan</h4>
                                            </div>
                                            <div class="fv-row mb-10">
                                                <!--begin::Label-->
                                                <label class="form-label required">Title</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input v-model="newPlan.title" type="text" name="title" class="form-control mb-2" placeholder="Title"  />
                                                <!--end::Input-->
                                            </div>

                                            <div class="fv-row mb-10">
                                                <!--begin::Label-->
                                                <label class="form-label">Description</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <textarea v-model="newPlan.description" name="description" class="form-control mb-2" placeholder="Description"></textarea>
                                                <!--end::Input-->
                                            </div>

                                            <div class="fv-row mb-10 row mb-5" >
                                                <div class="col-md-2 mt-5">
                                                    <h5>Structures</h5>
                                                </div>
                                                <div class="col-md-10">
                                                    <div class="row mt-5">
                                                        <div v-if="newPlan.details.create.length" class="col-md-12 mb-3">
                                                            <ul v-for="(detailItem, detailIndex) in newPlan.details.create" :key="detailIndex" class="list-group">
                                                                <li href="javascript:;" class="list-group-item list-group-item-action mb-1 py-3 d-flex justify-content-between align-items-center">
                                                                    <a href="javascript:;" @click="handleShowUpdateDetailForm(detailIndex, '', '')" class="m-0 p-0">{{ detailItem.title }}</a>
                                                                    <button @click.prevent="handleDetailRemove('', detailIndex, detailItem.id)" class="btn btn-danger btn-sm py-1 px-2">Remove</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <a @click="addPaymentPlanDetail()" href="javascript:;" class="btn btn-light-success">
                                                                <i class="la la-plus"></i>Add Structure
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-end">
                                                <button @click.prevent="showAddPaymentPlanForm = false" class="btn btn-light me-5">Cancel</button>

                                                <button ref="newPlanSubmitButton" type="submit" id="newPlanSubmitButton" class="btn btn-primary">
                                                    <span class="indicator-label">Save Plan</span>
                                                    <span class="indicator-progress">Please wait...
                                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <a v-else role="button" @click="showAddPaymentPlanForm = true" class="btn btn-light-primary">
                                        <i class="la la-plus"></i>Add Plan
                                    </a>
                                </div>
                            </div>
                            <div class="modal fade" id="newDetailModal" tabindex="-1" aria-labelledby="newDetailModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="newDetailModalLabel">Add Structure Item</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <form @submit.prevent="handleSubmitNewPlanDetail" ref="newPlanDetailForm" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                                            <div class="modal-body">
                                                <div class="fv-row mb-10 col-md-12">
                                                    <!--begin::Label-->
                                                    <label class="form-label required">Title</label>
                                                    <!--end::Label-->
                                                    <!--begin::Input-->
                                                    <input type="text" v-model="newPlanDetail.title" class="form-control mb-2" placeholder="Title"  />
                                                    <!--end::Input-->
                                                </div>
                                                <div class="fv-row mb-10 col-md-12">
                                                    <!--begin::Label-->
                                                    <label class="form-label required">Amount</label>
                                                    <!--end::Label-->
                                                    <!--begin::Input-->
                                                    <input type="text" v-model="newPlanDetail.amount" class="form-control mb-2" placeholder="Amount"  />
                                                    <!--end::Input-->
                                                </div>
                                                <div class="fv-row mb-10 col-md-12">
                                                    <!--begin::Label-->
                                                    <label class="form-label">Description</label>
                                                    <!--end::Label-->
                                                    <!--begin::Input-->
                                                    <textarea class="form-control mb-2" v-model="newPlanDetail.description" placeholder="Description"></textarea>
                                                    <!--end::Input-->
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button ref="newPlanDetailSubmitButton" type="submit" id="newPlanDetailSubmitButton" class="btn btn-primary">
                                                    <span class="indicator-label">Save Structure Item</span>
                                                    <span class="indicator-progress">Please wait...
                                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="updateDetailModal" tabindex="-1" aria-labelledby="updateDetailModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="updateDetailModalLabel">Update Lesson</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <form @submit.prevent="handleUpdateDetailLesson" ref="editnewPlanLessonForm" class="form fv-plugins-bootstrap5 fv-plugins-framework">
                                        <div class="modal-body">
                                            <div class="fv-row mb-10 col-md-12">
                                                <!--begin::Label-->
                                                <label class="form-label required">Title</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input type="text" v-model="updateDetail.title" class="form-control mb-2" placeholder="Lesson Title"  />
                                                <!--end::Input-->
                                            </div>
                                            <div class="fv-row mb-10 col-md-12">
                                                <!--begin::Label-->
                                                <label class="form-label required">Amount</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <input type="text" v-model="updateDetail.amount" class="form-control mb-2" placeholder="Lesson Amount"  />
                                                <!--end::Input-->
                                            </div>
                                            <div class="fv-row mb-10 col-md-12">
                                                <!--begin::Label-->
                                                <label class="form-label">Description</label>
                                                <!--end::Label-->
                                                <!--begin::Input-->
                                                <textarea class="form-control mb-2" v-model="updateDetail.description" placeholder="Lesson Description"></textarea>
                                                <!--end::Input-->
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button ref="newLessonSubmitButton" type="submit" id="newLessonSubmitButton" class="btn btn-primary">
                                                <span class="indicator-label">Save Structure Item</span>
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
import { usePage } from '@/stores/page'
import { useRouter } from 'vue-router'
import KTApp from '../../../../../core/js/layout/app'
import getCoursePaymentPlans from '@/graphql/queries/courses/getCoursePaymentPlans.gql'
import useValidator from '@/composables/useValidator'
import createPaymentPlan from '@/graphql/mutations/courses/addPaymentPlan.gql'
import updatePaymentPlan from '@/graphql/mutations/courses/updatePaymentPlan.gql'

const page = usePage()
page.title = "Update Course Payment Plans"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/courses', title: 'Courses'},
    {link: '', title: 'Update Course'}
]
const { resolveClient } = useApolloClient()

const client = resolveClient()

const { mutate: createPaymentPlanMutation, onDone, onError  } = useMutation(createPaymentPlan)
const { mutate: updatePaymentPlanMutation, onDone: updateDone, onError: updateError  } = useMutation(updatePaymentPlan)

const router = useRouter()
let course = reactive({})
let paymentPlans = ref([])
let validator = ref(null)
let detailValidator = ref(null)
let newPlanForm = ref(null)
let newPlanSubmitButton = ref(null)
let newPlanDetailForm = ref(null)
let showAddPaymentPlanForm = ref(false)
let newDetailModal = ref(null)
let updateDetailModal = ref(null)
let newPlan = reactive({
    title: '',
    description: '',
    details: {
        create: []
    }
})

let newPlanDetail = reactive({
    detailRef: '',
    planIndex: '',
    title: '',
    description: '',
    amount: ''
})

let updateDetail = reactive({
    index: 0,
    planIndex: '',
    id: '',
    title: '',
    description: '',
    amount: ''
})

const { result, loading } = useQuery(getCoursePaymentPlans, {
    slug: router.currentRoute.value.params.slug
}, {
        fetchPolicy: 'network-only'
})

const handleSubmitNewPlan = () => {
    console.log(newPlan);
    validator = useValidator(
        newPlanForm.value,
        {
            'title': {
                validators: {
                    notEmpty: {
                        message: 'title is required'
                    }
                }
            }
        }
    )

    validator.validate().then(async function (status) {

        if (status == 'Valid') {
            newPlanSubmitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            newPlanSubmitButton.value.disabled = true;

            try {
                const res = await createPaymentPlanMutation(
                    {course_id: course.id , ...newPlan},{
                    context: {
                        hasUpload: true
                    }
                })

                // router.push('/categories')
                alert("payment plan added successfully");
                newPlanSubmitButton.value.removeAttribute('data-kt-indicator')
                newPlanSubmitButton.value.disabled = false
                paymentPlans.value.push(res.data.createPaymentPlan)

                newPlan.name = ''
                newPlan.description = ''
                newPlan.details.create = []

                showAddPaymentPlanForm.value = false
            } catch (e) {
                console.log(e);
                alert("error occurred. please try again later.");
                newPlanSubmitButton.value.removeAttribute('data-kt-indicator')
                newPlanSubmitButton.value.disabled = false
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

const addPaymentPlanDetail = (e, planIndex) => {
    if(planIndex != undefined) {
        newDetailModal.planIndex = planIndex
    }
    newDetailModal.show()
}

const handleSubmitNewPlanDetail = () => {
    if(newPlanDetail.title != '' && newPlanDetail.amount != '') {
        if(newPlanDetail.planIndex === '') {
            newPlan.details.create.push({
                title: newPlanDetail.title,
                description: newPlanDetail.description,
                amount: newPlanDetail.amount
            })
        } else {
            const planRef = Math.floor((Math.random()*100) + 1) * Math.floor((Math.random()*100) + 1) * Math.floor((Math.random()*100) + 1)

            modules.value[newPlanDetail.planIndex].lessons.push({
                title: newPlanDetail.title,
                description: newPlanDetail.description,
                period: newPlanDetail.period,
                files: newPlanDetail.files.create,
                planRef: planRef
            })

            if(modules.value[newPlanDetail.planIndex].lessons.create === undefined) {
                modules.value[newPlanDetail.planIndex].lessons.create = []
            }
            modules.value[newPlanDetail.planIndex].lessons.create.push({
                title: newPlanDetail.title,
                description: newPlanDetail.description,
                period: newPlanDetail.period,
                files: {
                    create: newPlanDetail.files.create
                },
                planRef: planRef
            })
        }
    }

    newPlanDetail.planIndex = ''
    newPlanDetail.title = ''
    newPlanDetail.description = ''
    newPlanDetail.amount = ''

    newDetailModal.toggle()
}

const handleDetailRemove = (planIndex, detailIndex, detailId) => {
    if (confirm("Confirm to remove this structure item. You cannot undo this action.") == true) {
        if(planIndex !== '') {
            if(detailId !== undefined) {
                // if(modules.value[planIndex].deleted_lessons === undefined) {
                //     modules.value[planIndex].deleted_lessons = []
                // }
                // modules.value[planIndex].deleted_lessons.push(detailId)
            }

            // modules.value[planIndex].lessons = modules.value[planIndex].lessons.filter((lesson, index) => {
            //     return index != planIndex
            // })
        } else {
            newPlan.details.create = newPlan.details.create.filter((detail, index) => {
                return index != detailIndex
            })
        }
    }
}

const handleShowUpdateDetailForm = (planIndex, detailIndex, detailId) => {
    let currentDetail = ''
    if(detailIndex === '') {
        currentDetail = newPlan.details.create[planIndex]
    } else {
        currentDetail = paymentPlans.value[detailIndex].details[planIndex]
    }
    if(currentDetail !== '') {
        updateDetail.index = planIndex
        updateDetail.title = currentDetail.title
        updateDetail.description = currentDetail.description
        updateDetail.period = currentDetail.period
        if(detailIndex !== '') {
            if(detailId === '' || detailId === undefined) {
                updateDetail.id = ''
                updateDetail.planRef = currentDetail.planRef
            } else {
                updateDetail.id = detailId
            }

            updateDetail.detailIndex = detailIndex
            updateDetail.amount = currentDetail.amount
        } else {
            updateDetail.detailIndex = ''
            updateDetail.id = ''
            updateDetail.amount = currentDetail.amount
        }

        updateDetailModal.show()
    }
}

const handleUpdateDetailLesson = () => {
    if(updateDetail.title != '') {
        if(updateDetail.planIndex === '') {
            let detailIndex = updateDetail.index

            newPlan.details.create[detailIndex].title = updateDetail.title
            newPlan.details.create[detailIndex].description = updateDetail.description
            newPlan.details.create[detailIndex].amount = updateDetail.amount
        } else {
            let planIndex = updateDetail.planIndex
            let lessonIndex = updateDetail.index

            paymentPlans.value[planIndex].details[lessonIndex].title = updateDetail.title
            paymentPlans.value[planIndex].details[lessonIndex].description = updateDetail.description
            paymentPlans.value[planIndex].details[lessonIndex].amount = updateDetail.amount

            if(paymentPlans.value[planIndex].details.update === undefined) {
                paymentPlans.value[planIndex].details.update = []
            }

            if(updateDetail.id === '') {
                let existingLesson = ''

                for(let i=0; i<paymentPlans.value[planIndex].details.create.length; i++) {
                    if(paymentPlans.value[planIndex].details.create[i].planRef == updateDetail.planRef) {
                        paymentPlans.value[planIndex].details.create[i].title = updateDetail.title
                        paymentPlans.value[planIndex].details.create[i].description = updateDetail.description
                        paymentPlans.value[planIndex].details.create[i].amount = updateDetail.amount
                    }
                }

            } else {
                let existingIndex = ''
                for(let i=0; i<paymentPlans.value[planIndex].details.update.length; i++) {
                    if(paymentPlans.value[planIndex].details.update[i].id == updateDetail.id) {
                        existingIndex = i
                        break
                    }
                }

                if(existingIndex === '') {
                    paymentPlans.value[planIndex].details.update.push({
                        id: updateDetail.id,
                        title: updateDetail.title,
                        description: updateDetail.description,
                        amount: updateDetail.amount
                    })
                } else {
                    paymentPlans.value[planIndex].details.update[existingIndex].id = updateDetail.id
                    paymentPlans.value[planIndex].details.update[existingIndex].title = updateDetail.title
                    paymentPlans.value[planIndex].details.update[existingIndex].description = updateDetail.description
                    paymentPlans.value[planIndex].details.update[existingIndex].amount = updateDetail.amount
                }
            }
        }

    }

    updateDetail.index = 0
    updateDetail.planIndex = ''
    updateDetail.title = ''
    updateDetail.description = ''
    updateDetail.amount = ''

    updateDetailModal.toggle()
}

onMounted(() => {

    newDetailModal = new bootstrap.Modal(document.querySelector('#newDetailModal'))
    updateDetailModal = new bootstrap.Modal(document.querySelector('#updateDetailModal'))

    KTApp.initButtons()
})

watchEffect(() => {
    if(result.value) {
        if(!result.value.course) {
            router.push('/courses')
        } else {

            course = result.value.course

            if(course.paymentPlans.length) {
                course.paymentPlans.forEach(function(plan) {
                    paymentPlans.value.push({
                        title: plan.title,
                        description: plan.description,
                        details: plan.details.map((detail) => ({
                            ...detail
                        }))
                    })
                })
            }
        }
    }
})
</script>
