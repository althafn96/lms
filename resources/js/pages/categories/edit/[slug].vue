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
                                <h2>Icon</h2>
                            </div>
                            <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body text-center pt-0">
                            <!--begin::Image input-->
                            <div :class="{'image-input-empty': !loading && !result.category.icon != ''}" class="image-input image-input-outline mb-3" data-kt-image-input="true" style="background-image: url(/media/svg/files/blank-image.svg)">
                                <!--begin::Preview existing Icon-->
                                <div class="image-input-wrapper w-150px h-150px" :style="!loading ? `background-image: url(${result.category.icon})` : ''"></div>
                                <!--end::Preview existing Icon-->
                                <!--begin::Label-->
                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change Icon">
                                    <i class="bi bi-pencil-fill fs-7"></i>
                                    <!--begin::Inputs-->
                                    <input ref="icon" @change="handleFileInput($event, 'icon', 'set')" type="file" name="icon" accept=".png, .jpg, .jpeg" />
                                    <input type="hidden" @click="handleFileInput($event, 'icon', 'remove')" name="icon_remove" />
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
                            <div class="text-muted fs-7">Set the category icon. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                            <!--end::Description-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                            <!--begin::Card title-->
                            <div class="card-title">
                                <h2>Image</h2>
                            </div>
                            <!--end::Card title-->
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body text-center pt-0">
                            <!--begin::Image input-->
                            <div :class="{'image-input-empty': !loading && !result.category.image != ''}" class="image-input image-input-outline mb-3" data-kt-image-input="true" style="background-image: url(/media/svg/files/blank-image.svg)">
                                <!--begin::Preview existing Icon-->
                                <div class="image-input-wrapper w-150px h-150px" :style="!loading ? `background-image: url(${result.category.image})` : ''"></div>
                                <!--end::Preview existing Icon-->
                                <!--begin::Label-->
                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change Image">
                                    <i class="bi bi-pencil-fill fs-7"></i>
                                    <!--begin::Inputs-->
                                    <input ref="image" @change="handleFileInput($event, 'image', 'set')" type="file" name="image" accept=".png, .jpg, .jpeg" />
                                    <input type="hidden" @click="handleFileInput($event, 'image', 'remove')" name="image_remove" />
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
                            <div class="text-muted fs-7">Set the category image. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                            <!--end::Description-->
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
                                    <label class="required form-label">Category Name</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input v-model="formData.name" type="text" name="category_name" class="form-control mb-2" placeholder="Category Name"  />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="required form-label">Parent</label>
                                    <VueMultiselect
                                        v-model="formData.parent"
                                        @search-change="fetchCategories"
                                        track-by="id"
                                        label="name"
                                        :options="categories">
                                    </VueMultiselect>
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="form-label">Description</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <ckeditor :editor="editor" v-model="formData.description" :config="editorConfig"></ckeditor>
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
import updateCategory from '@/graphql/mutations/courses/updateCategory.gql'
import { usePage } from '@/stores/page'
import VueMultiselect from 'vue-multiselect'
import useValidator from '@/composables/useValidator'
import Swal from 'sweetalert2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useRouter } from 'vue-router'
import KTImageInput from '../../../../core/js/components/image-input'
import KTApp from '../../../../core/js/layout/app'
import getCategory from '@/graphql/queries/courses/getCategory.gql'
import getCategoriesToSelect from '@/graphql/queries/courses/getCategoriesToSelect.gql'

const page = usePage()
page.title = "Update Category"
page.breadcrumbs = [
    {link: '/dashboard', title: 'Dashboard'},
    {link: '/categories', title: 'Categories'},
    {link: '', title: 'Update Category'}
]

const router = useRouter()

const { result, loading } = useQuery(getCategory, {
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
    description: '',
    image: null,
    icon: null,
    status: 1,
    is_featured: 0,
    parent: null
})
let editor = ClassicEditor
let editorConfig = {

}
let image = ref(null)
let icon = ref(null)
let category = reactive({})
let categories = ref([])
const { resolveClient } = useApolloClient()

const { mutate: updateCategoryMutation, onDone, onError  } = useMutation(updateCategory)

const handleSubmit = () => {
    validator.validate().then(async function (status) {
        if (status == 'Valid') {
            submitButton.value.setAttribute('data-kt-indicator', 'on');

            // Disable submit button whilst loading
            submitButton.value.disabled = true;

            try {
                const res = await updateCategoryMutation(
                    {...formData, parent_id: formData.parent ? formData.parent.id : null},{
                    context: {
                        hasUpload: true
                    }
                })

                // router.push('/categories')
                alert("category updated successfully");
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
    if(type == 'icon') {
        if(action == 'set') {
            // console.log(icon.value.files[0])
            // formData.icon = icon.value.files[0]
            let iconFile = new Blob(icon.value.files, {type: "image/*"})
            iconFile.name = icon.value.files[0].name

            formData.icon = iconFile
        } else {
            formData.icon = null
        }
    }
    if(type == 'image') {
        if(action == 'set') {
            let imageFile = new Blob(image.value.files, {type: "image/*"})
            imageFile.name = image.value.files[0].name

            formData.image = imageFile
        } else {
            formData.image = null
        }
    }
}

watchEffect(() => {
    if(result.value) {
        if(!result.value.category) {
            router.push('/categories')
        } else {

            category = result.value.category
            formData.id = category.id
            formData.name = category.name
            formData.description = category.description
            formData.status = category.status ? 1 : 0
            formData.is_featured = category.is_featured ? 1 : 0
            formData.parent = category.parent == null ? null : {
                id: category.parent.id,
                name: category.parent.name
            }
        }
    }
})

const fetchCategories = async () => {

    const client = resolveClient()

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

onMounted(() => {
    validator = useValidator(
        form.value,
        {
            'category_name': {
                validators: {
                    notEmpty: {
                        message: 'Category Name is required'
                    }
                }
            },
            'parent': {
                validators: {
                    notEmpty: {
                        message: 'Parent is required'
                    }
                }
            }
        }
    )

    KTImageInput.init()
    KTApp.initButtons()
})
</script>
