<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';



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

const assets=[
{name:'Asset 1',id:'1',location: "Kilimani Hurlingham"},
{name:'Asset 2',id:'2' ,location:"Riverside Road Lantana"},
{name:'Asset 3',id:'3',location :"Westlands Wood Avenue"},

]

</script>



<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">


                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <!-- <div class="col-span-1 p-6 text-gray-900">
                        Controls come here

                    </div> -->

                    <div class="p-6 text-gray-900 ">
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
                                                <InputText type="text" v-model="value3" placeholder="Search" />
                                            </span>

                                            <Button icon="pi pi-calendar" class="mr-2 p-button-success" />
                                            <Button icon="pi pi-times" class="p-button-danger" />
                                        </template>
                                    </Toolbar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center">
                        <div v-for="asset in assets" :key="asset.id" class="" >

                            <div class="flex justify-center mt-3">
                                <div
                                class="block max-w-sm bg-white rounded-lg shadow-lg dark:bg-neutral-700">
                                <a href="#!">
                                    <img
                                    class="rounded-t-lg"
                                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                                    alt="" />
                                </a>
                                <div class="p-6">
                                    <h5
                                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {{ asset.name }} | {{asset.location }}
                                </h5>
                                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                                <Button
                                  label="See More"

                                />
                        </div>
                    </div>
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
