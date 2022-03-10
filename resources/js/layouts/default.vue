<template>
    <div class="page d-flex flex-row flex-column-fluid">
        <Aside />
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <template v-if="!loading">
                <Header :title="page.title" :breadcrumbs="page.breadcrumbs" />

                <router-view></router-view>
            </template>

            <div v-else class="loading-section" data-kt-indicator="on">
                <span  class="indicator-progress">
                    <span class="spinner-border spinner-border-lg align-middle ms-2"></span>
                </span>
            </div>

            <Footer />
        </div>
    </div>
</template>

<script setup>
import { usePage } from '@/stores/page'

const page = usePage()
import Aside from '@/components/aside.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

const router = useRouter()

let loading = ref(false)

router.beforeEach(async(to, from) => {
    loading.value = true
})
router.afterEach(async(to, from) => {
    loading.value = false
})

onMounted(() => {
    // KTApp.init()
    document.body.classList.remove('bg-dark')
})
</script>
