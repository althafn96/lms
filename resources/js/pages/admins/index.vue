<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="container-xxl" id="kt_content_container">
            <div class="card">
                <div class="card-header border-0 pt-6">
                    <div class="card-title">
                        <div class="d-flex align-items-center position-relative my-1">
                            <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                </svg>
                            </span>
                            <input v-model="searchQuery" type="text" class="form-control form-control-solid w-250px ps-14" placeholder="Search Admin" />
                        </div>
                    </div>

                    <div class="card-toolbar">

                        <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">

                            <button type="button" class="btn btn-light-primary me-3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
                                    </svg>
                                </span>Filter
                            </button>

                            <div class="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">

                                <div class="px-7 py-5">
                                    <div class="fs-5 text-dark fw-bolder">Filter Options</div>
                                </div>

                                <div class="separator border-gray-200"></div>
                            </div>

                            <button type="button" class="btn btn-light-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_export_users">
                            <span class="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1" transform="rotate(90 12.75 4.25)" fill="black" />
                                    <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="black" />
                                    <path d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="#C4C4C4" />
                                </svg>
                            </span> Export</button>

                            <router-link type="button" class="btn btn-primary" to="/admins/create">
                            <span class="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                </svg>
                            </span> Add Admin</router-link>

                        </div>

                        <div class="d-flex justify-content-end align-items-center d-none" data-kt-user-table-toolbar="selected">
                            <div class="fw-bolder me-5">
                            <span class="me-2" data-kt-user-table-select="selected_count"></span>Selected</div>
                            <button type="button" class="btn btn-danger" data-kt-user-table-select="delete_selected">Delete Selected</button>
                        </div>
                    </div>
                </div>

                <div class="card-body py-4">
                    <Datatable
                        :loading="loading"
                        :columns="[
                            { header: 'Name', value: 'full_name', headerClass: 'min-w-125px', valueClass: '', valueType: 'text' },
                            { header: 'Picture', value: 'display_picture', headerClass: 'w-150px', valueClass: 'w-100px', valueType: 'image' },
                            { header: 'Updated', value: 'humanized_updated_at', headerClass: 'min-w-125px', valueClass: '', valueType: 'text' },
                        ]"
                        :items="result?.admins.data.map(function(admin) {
                            return {
                                full_name: admin.full_name,
                                humanized_updated_at: admin.humanized_updated_at,
                                display_picture: admin.display_picture,
                                slug: admin.slug
                            }
                        })"
                        :paginator="result?.admins.paginatorInfo"
                        :actions="[
                            { title: 'Edit', link: `/admins/edit/{slug}` }
                        ]"
                        @refetchData="refetchData"
                    >
                    </Datatable>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usePage } from '@/stores/page'
import { useQuery } from '@vue/apollo-composable'
import getAdmins from '@/graphql/queries/users/getAdmins.gql'
import { useRouter } from 'vue-router'
import useDebouncedRef from '@/composables/useDebouncedRef'
import Datatable from '@/components/datatable.vue'

let table = ref(null);
let datatable = ref(null);
let toolbarBase = ref(null);
let toolbarSelected = ref(null);
let selectedCount = ref(null);
let paginationEl = ref(null);
let searchQuery = useDebouncedRef('', 400)

let totalRecords = ref(0)
let perPage = ref(0)

const router = useRouter()
const route = useRoute()

const page = usePage()
page.title = "Admins"
page.breadcrumbs = [{link: '/dashboard', title: 'Dashboard'}, {link: '', title: 'Admins'}]

let currentPage = router.currentRoute.value.query.page == undefined ? ref(1) : ref(parseInt(router.currentRoute.value.query.page))

let { result, loading, refetch } = useQuery(getAdmins, {
    page: currentPage.value,
    name: `%${searchQuery.value}%`
}, {
    fetchPolicy: 'network-only'
})

// Filter Datatable
var handleFilterDatatable = () => {
    // Select filter options
    const filterForm = document.querySelector('[data-kt-user-table-filter="form"]');
    const filterButton = filterForm.querySelector('[data-kt-user-table-filter="filter"]');
    const selectOptions = filterForm.querySelectorAll('select');

    // Filter datatable on submit
    filterButton.addEventListener('click', function () {
        var filterString = '';

        // Get filter values
        selectOptions.forEach((item, index) => {
            if (item.value && item.value !== '') {
                if (index !== 0) {
                    filterString += ' ';
                }

                // Build filter value options
                filterString += item.value;
            }
        });

        // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()
        datatable.search(filterString).draw();
    });
}

// Reset Filter
var handleResetForm = () => {
    // Select reset button
    const resetButton = document.querySelector('[data-kt-user-table-filter="reset"]');

    // Reset datatable
    resetButton.addEventListener('click', function () {
        // Select filter options
        const filterForm = document.querySelector('[data-kt-user-table-filter="form"]');
        const selectOptions = filterForm.querySelectorAll('select');

        // Reset select2 values -- more info: https://select2.org/programmatic-control/add-select-clear-items
        selectOptions.forEach(select => {
            $(select).val('').trigger('change');
        });

        // Reset datatable --- official docs reference: https://datatables.net/reference/api/search()
        datatable.search('').draw();
    });
}

// Delete subscirption
var handleDeleteRows = () => {
    // Select all delete buttons
    const deleteButtons = table.value.querySelectorAll('[data-kt-users-table-filter="delete_row"]');

    deleteButtons.forEach(d => {
        // Delete button on click
        d.addEventListener('click', function (e) {
            e.preventDefault();

            // Select parent row
            const parent = e.target.closest('tr');

            // Get user name
            const userName = parent.querySelectorAll('td')[1].querySelectorAll('a')[1].innerText;

            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                text: "Are you sure you want to delete " + userName + "?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, delete!",
                cancelButtonText: "No, cancel",
                customClass: {
                    confirmButton: "btn fw-bold btn-danger",
                    cancelButton: "btn fw-bold btn-active-light-primary"
                }
            }).then(function (result) {
                if (result.value) {
                    Swal.fire({
                        text: "You have deleted " + userName + "!.",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    }).then(function () {
                        // Remove current row
                        datatable.row($(parent)).remove().draw();
                    }).then(function () {
                        // Detect checked checkboxes
                        toggleToolbars();
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: customerName + " was not deleted.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    });
                }
            });
        })
    });
}

// Init toggle toolbar
var initToggleToolbar = () => {
    // Toggle selected action toolbar
    // Select all checkboxes
    const checkboxes = table.value.querySelectorAll('[type="checkbox"]');

    // Select elements
    toolbarBase = document.querySelector('[data-kt-user-table-toolbar="base"]');
    toolbarSelected = document.querySelector('[data-kt-user-table-toolbar="selected"]');
    selectedCount = document.querySelector('[data-kt-user-table-select="selected_count"]');
    const deleteSelected = document.querySelector('[data-kt-user-table-select="delete_selected"]');

    // Toggle delete selected toolbar
    checkboxes.forEach(c => {
        // Checkbox on click event
        c.addEventListener('click', function () {
            setTimeout(function () {
                toggleToolbars();
            }, 50);
        });
    });

    // Deleted selected rows
    deleteSelected.addEventListener('click', function () {
        // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
        Swal.fire({
            text: "Are you sure you want to delete selected customers?",
            icon: "warning",
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: "Yes, delete!",
            cancelButtonText: "No, cancel",
            customClass: {
                confirmButton: "btn fw-bold btn-danger",
                cancelButton: "btn fw-bold btn-active-light-primary"
            }
        }).then(function (result) {
            if (result.value) {
                Swal.fire({
                    text: "You have deleted all selected customers!.",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    customClass: {
                        confirmButton: "btn fw-bold btn-primary",
                    }
                }).then(function () {
                    // Remove all selected customers
                    checkboxes.forEach(c => {
                        if (c.checked) {
                            datatable.row($(c.closest('tbody tr'))).remove().draw();
                        }
                    });

                    // Remove header checked box
                    const headerCheckbox = table.value.querySelectorAll('[type="checkbox"]')[0];
                    headerCheckbox.checked = false;
                }).then(function () {
                    toggleToolbars(); // Detect checked checkboxes
                    initToggleToolbar(); // Re-init toolbar to recalculate checkboxes
                });
            } else if (result.dismiss === 'cancel') {
                Swal.fire({
                    text: "Selected customers was not deleted.",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok, got it!",
                    customClass: {
                        confirmButton: "btn fw-bold btn-primary",
                    }
                });
            }
        });
    });
}

// Toggle toolbars
const toggleToolbars = () => {
    // Select refreshed checkbox DOM elements
    const allCheckboxes = table.value.querySelectorAll('tbody [type="checkbox"]');

    // Detect checkboxes state & count
    let checkedState = false;
    let count = 0;

    // Count checked boxes
    allCheckboxes.forEach(c => {
        if (c.checked) {
            checkedState = true;
            count++;
        }
    });

    // Toggle toolbars
    if (checkedState) {
        selectedCount.innerHTML = count;
        toolbarBase.classList.add('d-none');
        toolbarSelected.classList.remove('d-none');
    } else {
        toolbarBase.classList.remove('d-none');
        toolbarSelected.classList.add('d-none');
    }
}

const fetchinstructors = () => {

}

const refetchData = async (selectedPage) => {
    loading.value = true
    await refetch({
        page: parseInt(selectedPage)
    })
    currentPage.value = parseInt(selectedPage)
    loading.value = false
}


watch(searchQuery, async (newVal) => {
    loading.value = true
    await refetch({
        name: `%${newVal}%`,
        page: 1
    }, {
        fetchPolicy: 'network-only'
    })
    currentPage.value = 1
    loading.value = false
});

onMounted(() => {
    // initToggleToolbar();
    // handleSearchDatatable();
    // handleResetForm();
    // handleDeleteRows();
})

</script>
