<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import AssetCard from '@/Components/Card.vue'
import {useAssetStore} from '@/Stores/Asset'
import {debounce} from 'lodash'
import { ref, watch } from '@vue/runtime-core';



const items= [
{
    label: 'Update',
    icon: 'pi pi-refresh'
},
{
    label: 'Delete',
    icon: 'pi pi-times'
},
{
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
        window.location.href = 'https://vuejs.org/'
    }
},
{   label: 'Upload',
icon: 'pi pi-upload',
command: () => {
    window.location.hash = "/fileupload"
}
}
];
const selectedCars=null
const cars= [
{brand: 'Audi', value: 'Audi'},
{brand: 'BMW', value: 'BMW'},
{brand: 'Fiat', value: 'Fiat'},
{brand: 'Honda', value: 'Honda'},
{brand: 'Jaguar', value: 'Jaguar'},
{brand: 'Mercedes', value: 'Mercedes'},
{brand: 'Renault', value: 'Renault'},
{brand: 'Volkswagen', value: 'Volkswagen'},
{brand: 'Volvo', value: 'Volvo'}
]

const store=useAssetStore()
const search=ref('')
watch (search, debounce((value)=>store.filteredAssets(value),500))

</script>



<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>
        </template>

        <div class="py-3">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">


                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <!-- <div class="col-span-1 p-6 text-gray-900">
                        Controls come here

                    </div> -->

                    <div class="p-4 text-gray-900 ">
                        <div>
                            <div>
                                <Toolbar>
                                    <template #start>
                                        <Button label="New" icon="pi pi-plus" class="mr-2" />
                                        <!-- <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
                                            <i class="mr-2 pi pi-bars p-toolbar-separator" />
                                            <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton> -->
                                        </template>

                                        <template #end>
                                            <!-- <MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Assets" /> -->
                                            <!-- <Button icon="pi pi-search" class="mr-2" /> -->
                                            <span class="p-input-icon-left">
                                                <i class="pi pi-search" />
                                                <InputText type="text" v-model="search" placeholder="Search"  />
                                            </span>

                                            <!-- <Button icon="pi pi-calendar" class="mr-2 p-button-success" />
                                            <Button icon="pi pi-times" class="p-button-danger" /> -->
                                        </template>
                                    </Toolbar>
                                </div>
                            </div>
                        </div>

                <div class="grid gap-5 p-5 my-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
                        <div v-for="asset in store.assets" :key="asset.id" class="" >
                           <AssetCard :asset="asset"/>

            </div>
            </div>
        </div>
    </div>
</div>
</AuthenticatedLayout>
</template>

<style scoped>
.p-button,
.p-splitbutton {
    margin-bottom: 0.5rem;
}
</style>
