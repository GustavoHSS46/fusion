<template>
    <div class="w-screen h-screen absolute top-0 left-0 select-none overflow-hidden flex justify-center items-center flex-col">
        <div class="w-screen h-screen absolute blur-xl z-0 top-0 left-0 bg-black opacity-60"></div>
        <div class="w-full h-full 2xl:w-2/4 relative z-10 lg:w-4/6 lg:h-3/5 rounded-lg overflow-hidden flex justify-center items-center flex-col">
            <div v-if="Type" class="bg-red-700 w-full h-full absolute top-0 left-0 z-0"></div>
            <div v-else class="bg-slate-700 w-full h-full absolute top-0 left-0 z-0"></div>
            <div class="relative z-10 w-full h-full flex justify-center items-center flex-col">
                <Icon v-if="Type" class="text-9xl" name="material-symbols:error-circle-rounded-sharp" />
                <Icon v-else class="text-9xl" name="line-md:loading-loop" />
                <h1 class="text-4xl mt-4 lg:text-5xl">{{ModalType}}</h1>
                <h1 class="text-xl mt-4 lg:text-3xl">{{ ErrorMessage }}</h1>
                <button v-if="Type" @click="$emit('close')" class="rounded-md bg-white h-fit w-5/6 p-4 text-red-700 lg:mt-5 lg:text-4xl text-3xl mt-4">{{ Message }}</button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    ErrorMessage: String,
    Message: String,
    ModalType: String,
    Type: Number,
})
console.log("modal Criado")
</script>