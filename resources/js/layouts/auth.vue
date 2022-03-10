<template>
    <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(/media/illustrations/dozzy-1/14-dark.png)">
        <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            <a href="javascript:;" class="mb-12">
                <img alt="Logo" src="/media/logos/logo-2.svg" class="h-40px" />
            </a>
            <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <router-view></router-view>
            </div>
        </div>
        <div class="d-flex flex-center flex-column-auto p-10">
            <div class="d-flex align-items-center fw-bold fs-6">
                <a href="javascript:;" class="text-muted text-hover-primary px-2">About</a>
                <a href="javascript:;" class="text-muted text-hover-primary px-2">Support</a>
                <a href="javascript:;" class="text-muted text-hover-primary px-2">Terms & Conditions</a>
            </div>
        </div>
    </div>
</template>

<script setup>
onMounted(() => {
    // KTApp.init()
    document.body.classList.add('bg-dark')
})
</script>
