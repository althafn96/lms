<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
            en
        </div>
    </div>
</template>

<script>
import { usePage } from '@/stores/page'

const page = usePage()
page.title = "Enrollments"
page.breadcrumbs = [{link: '/dashboard', title: 'Dashboard'}, {link: '', title: 'Enrollments'}]
</script>
