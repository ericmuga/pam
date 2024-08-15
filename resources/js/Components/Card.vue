<script  setup>

//   import defineProps from 'vue';

  const props =defineProps({
                                asset:Object
                            });
</script>

<template>
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
                    <!-- name -->
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {{ asset.description }}
                    <!-- desc -->
                </p>
                <Button
                label="See More"

                />
            </div>
            </div>
    </div>
</template>



<style lang="scss" scoped>

</style>
