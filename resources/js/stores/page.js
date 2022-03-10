import { defineStore } from 'pinia'

export const usePage = defineStore('page', {
    state: () => ({
        title: '',
        breadcrumbs: []
    }),
})
