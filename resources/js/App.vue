<template>
    <router-view />
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { useAuth } from '@/stores/auth'
    const router = useRouter()

    router.beforeEach(async(to, from) => {
        KTApp.initPageLoader();
        const auth = useAuth()

        if (to.meta.layout === 'error') return router.push(from.fullPath)

        if (to.meta.layout !== 'auth' && !auth.isAuthenticated) return router.push('/auth/sign-in')

        if (to.meta.layout === 'auth' && auth.isAuthenticated) return router.push(from.fullPath)

        if(to.fullPath === '/') {
            return router.push('/dashboard')
        }
    })

    onMounted(() => {
        KTApp.init()
    })
</script>
