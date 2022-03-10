<template>
    <div v-if="loading" class="row ">
        <div class="loading-section lh-50" data-kt-indicator="on">
            <span class="indicator-progress">
                <span class="spinner-border spinner-border-lg align-middle ms-2"></span>
            </span>
        </div>
    </div>
    <div v-else class="table-responsive">
        <table ref="table" class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
            <thead>
                <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                    <th class="w-10px pe-2">
                        <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                            <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                        </div>
                    </th>
                    <th v-for="(column,index) in columns" :key="index" :class="column.headerClass">{{ column.header }}</th>
                    <th class="text-end min-w-100px">Actions</th>
                </tr>
            </thead>
            <tbody v-if="items" class="text-gray-600 fw-bold">
                <tr v-for="(item,index) in items" :key="index">
                    <td>
                        <div class="form-check form-check-sm form-check-custom form-check-solid">
                            <input class="form-check-input" type="checkbox" value="1" />
                        </div>
                    </td>

                    <td v-for="(column,index2) in columns" :key="index2" >
                        <template v-if="column.valueType == 'text'">
                            <span :class="column.valueClass">{{ item[column.value] }}</span>
                        </template>
                        <template v-if="column.valueType == 'image'">
                            <img :class="column.valueClass" :src="item[column.value]" />
                        </template>
                        <template v-if="column.valueType == 'rich_text'">
                            <span :class="column.valueClass" v-html="item[column.value]"></span>
                        </template>

                    </td>

                    <td class="text-end">
                        <a @click="handleActionDropdown" href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <span class="svg-icon svg-icon-5 m-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                            </svg>
                        </span></a>
                        <div :class="item.slug" class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                            <div v-for="(action,index) in actions" :key="index" class="menu-item px-3">
                                <router-link :to="`${action.link.replace('{slug}', item.slug)}`" class="menu-link px-3">{{ action.title }}</router-link>
                            </div>

                            <div class="menu-item px-3">
                                <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="paginator" class="row">
        <el-pagination @current-change="handlePagination" layout="total, prev, pager, next" :total="paginator.total" :page-size="paginator.perPage" :current-page="currentPage"></el-pagination>
    </div>
</template>

<script setup>
const router = useRouter()

const props = defineProps({
    loading: Boolean,
    columns: Array,
    items: Object,
    paginator: Object,
    actions: Array
})

const emit = defineEmits(['refetchData'])

let currentPage = router.currentRoute.value.query.page == undefined ? ref(1) : ref(parseInt(router.currentRoute.value.query.page))

const handlePagination = async (selectedPage) => {
    router.push({name: router.currentRoute.value.name, query: {page: selectedPage}})
    emit('refetchData', selectedPage)
}

const handleActionDropdown = () => {
    KTMenu.createInstances()
}

</script>
