<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
        </div>
    </div>
</template>

<script setup>
import { usePage } from '@/stores/page'

const page = usePage()

page.title = "Dashboard"
page.breadcrumbs = []

onMounted(() => {

})
</script>
