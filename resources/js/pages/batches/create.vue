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
                                <h2>Courses</h2>
                            </div>
                            <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body text-center pt-0">
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <VueMultiselect
                                        v-model="formData.selected_course"
                                        @search-change="fetchCourses"
                                        track-by="id"
                                        label="name"
                                        :show-labels="false"
                                        :multiple="false"
                                        :close-on-select="true"
                                        noOptionsText="Enter Course"
                                        placeholder="Search a Course"
                                        :options="courses">
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
                                <h2>Locations</h2>
                            </div>
                            <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body text-center pt-0">
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <VueMultiselect
                                        v-model="formData.selected_location"
                                        @search-change="fetchLocations"
                                        track-by="id"
                                        label="name"
                                        :show-labels="false"
                                        :multiple="false"
                                        :close-on-select="true"
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
                                    <input v-model="formData.name" type="text" name="name" class="form-control mb-2" placeholder="Batch Name"  />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Commences On</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.commences_on" type="date" name="commences_on" class="form-control mb-2" placeholder="Commencing Date"  />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Completes On</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.completes_on" type="date" name="completes_on" class="form-control mb-2" placeholder="Completing Date"  />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Alloted Count</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.alloted_count" type="number" name="alloted_count" class="form-control mb-2" placeholder="Alloted Students Count"  />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Enrollments Closes On</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.enrollments_closes_on" type="date" name="enrollments_closes_on" class="form-control mb-2" placeholder="Enrollments Closing Date"  />
                                    <!--end::Input-->
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
import { useMutation, useApolloClient } from '@vue/apollo-composable'
import addBatch from '@/graphql/mutations/students/addBatch.gql'
import getLocationsToSelect from '@/graphql/queries/locations/getLocationsToSelect.gql'
import getCoursesToSelect from '@/graphql/queries/courses/getCoursesToSelect.gql'
import { usePage } from '@/stores/page'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import KTApp from '../../../core/js/layout/app'
import VueMultiselect from 'vue-multiselect'
import useValidator from '@/composables/useValidator'
import { useQuery } from '@vue/apollo-composable'

const page = usePage()
page.title = "Add Batch"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/batches', title: 'Batches'},
    {link: '', title: 'Add Batch'}
]

const router = useRouter()

let form = ref(null)
let submitButton = ref(null)
let validator = ref(null)
let formData = reactive({
    name: '',
    commences_on: null,
    completes_on: null,
    enrollments_closes_on: null,
    alloted_count: 0,
    selected_location: null,
    selected_course: null,
    location: {
        connect: null
    },
    course: {
        connect: null
    }
})
let locations = ref([])
let courses = ref([])
const { resolveClient } = useApolloClient()

const client = resolveClient()

const { mutate: addBatchMutation, onDone, onError  } = useMutation(addBatch)

const handleSubmit = () => {

    if(formData.selected_course == null) {
        alert('Course is required!')
        return;
    }

    if(formData.selected_course) {
        formData.course.connect = formData.selected_course.id
    }
    if(formData.selected_location) {
        formData.location.connect = formData.selected_location.id
    }

    validator.validate().then(async function (status) {
        if (status == 'Valid') {
            submitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            submitButton.value.disabled = true;

            try {
                const res = await addBatchMutation(formData)

                // console.log(client.cache.readQuery({query: getCategories}))

                alert("batch added successfully");
                router.push('/batches')
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

const fetchCourses = async () => {

    const { data, loading, fetch } = await client.query({
        query: getCoursesToSelect,
    }, {
        fetchPolicy: 'network-only'
    })

    courses.value = data.courses.data.map(function (course) {
        return {
            id: course.id,
            name: course.name
        }
    })
}

onMounted(() => {
    validator = useValidator(
        form.value,
        {
            'name': {
                validators: {
                    notEmpty: {
                        message: 'Batch Name is required'
                    }
                }
            }
        }
    )

    KTApp.initButtons()
})
</script>
