<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Logo from '@/Components/ApplicationLogo.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});
</script>

<template>
    <Head title="Welcome" />

    <div
        class="relative min-h-screen bg-gray-100 bg-center sm:flex sm:justify-center sm:items-center bg-dots-darker dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
    >
        <div v-if="canLogin" class="p-6 text-right sm:fixed sm:top-0 sm:right-0">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Dashboard</Link
            >

            <template v-else>
                <Link
                    :href="route('login')"
                    class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Log in</Link
                >

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Register</Link
                >
            </template>
        </div>

        <div class="p-6 mx-auto max-w-7xl lg:p-8">
           <!-- component -->
<div class="min-h-screen overflow-auto bg-gray-100">
  <div class="container max-w-4xl mx-auto">
    <div class="mt-5 text-center">
    <p class="text-4xl font-bold text-teal-500"> Prime Asset Manager</p>
      <h1 class="text-4xl font-bold text-gray-800">Pricing plans</h1>
      <div class="flex justify-center">
            <Link href="/">
                <Logo class="w-10 h-10 mt-4 text-center text-gray-500 fill-current" />
            </Link>
        </div>
      <!-- <p class="mt-3 text-lg font-semibold">Every plan includes 30 day free trial</p> -->
    </div>
    <div class="mt-4">
      <div class="flex justify-between">

      </div>
      <div></div>
    </div>
    <hr class="mt-10" />

    <div class="grid gap-5 mx-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 place-items-center">
    <div class="flex col-span-1 pt-10 space-x-10">
    <div class="">
      <div class="pt-4 space-y-6 overflow-hidden transition-all duration-500 transform bg-white shadow-xl cursor-pointer rounded-xl hover:-translate-y-6 hover:scale-105 hover:shadow-2xl">
        <div class="flex items-center justify-between px-8">
          <h4 class="text-xl font-bold text-slate-800">Prime Owner</h4>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
          <h1 class="text-4xl font-bold text-center">$10.00/M</h1>
          <p class="px-4 text-sm text-center ">
            This plan is for asset owners. It allows owners to manage their assets from the comfort of their holiday seats.
          </p>
          <p class="my-4 text-center capitalize"> Features</p>
          <ul class="text-center">
            <li><a href="#" class="font-semibold">Feature 1</a></li>
            <li><a href="#" class="font-semibold">Feature 2</a></li>
            <li><a href="#" class="font-semibold">Feature 3</a></li>
          </ul>
          <div class="text-center bg-slate-600 ">
       <Link :href="route('register')">
<button class="inline-block my-6 font-bold text-gray-800">Get started today</button>
</Link>
          </div>
      </div>
    </div>
</div>


<div class="flex col-span-1 pt-10 space-x-10">
    <div class="">
      <div class="pt-4 space-y-6 overflow-hidden transition-all duration-500 transform bg-white shadow-xl cursor-pointer rounded-xl hover:-translate-y-6 hover:scale-105 hover:shadow-2xl">
        <div class="flex items-center justify-between px-8">
          <h4 class="text-xl font-bold text-pink-800">Prime Manager</h4>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
          <h1 class="text-4xl font-bold text-center">$5.00/M</h1>
          <p class="px-4 text-sm text-center ">This plan is for asset managers. It helps render accounts to property owners in just a few clicks!</p>
          <ul class="text-center">
            <li><a href="#" class="font-semibold">Feature 1</a></li>
            <li><a href="#" class="font-semibold">Feature 2</a></li>
            <li><a href="#" class="font-semibold">Feature 3</a></li>
          </ul>
          <div class="text-center bg-pink-600 ">
       <Link :href="route('register')">
<button class="inline-block my-6 font-bold text-gray-800">Get started today</button>
</Link>
          </div>
      </div>
    </div>
</div>

<div class="flex col-span-1 pt-10 space-x-10">
    <div class="">
      <div class="pt-4 space-y-6 overflow-hidden transition-all duration-500 transform bg-white shadow-xl cursor-pointer rounded-xl hover:-translate-y-6 hover:scale-105 hover:shadow-2xl">
        <div class="flex items-center justify-between px-8">
          <h4 class="text-xl font-bold text-teal-400">Prime Professional</h4>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
          <h1 class="text-4xl font-bold text-center">$15.00/M</h1>
          <p class="px-4 text-sm text-center ">This is the ultimate enterprise plan for asset estate management</p>
          <ul class="text-center">
            <li><a href="#" class="font-semibold">Feature 1</a></li>
            <li><a href="#" class="font-semibold">Feature 2</a></li>
            <li><a href="#" class="font-semibold">Feature 3</a></li>
          </ul>
          <div class="text-center bg-teal-400 ">
       <Link :href="route('register')">
<button class="inline-block my-6 font-bold text-gray-800">Get started today</button>
</Link>
          </div>
      </div>
    </div>
</div>


    </div>
  </div>
</div>


        </div>
    </div>
</template>

<!-- <style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style> -->
