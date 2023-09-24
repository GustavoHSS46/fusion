<template>
    <div
        class="w-screen h-screen absolute top-0 left-0 bg-red-700 overflow-hidden flex justify-center items-center flex-col">
        <Icon v-if="Type" class="text-9xl" name="material-symbols:error-circle-rounded-sharp" />
        <Icon v-else class="text-9xl" name="line-md:loading-loop" />
        <h1 class="text-4xl mt-4">{{ModalType}}</h1>
        <h1 class="text-xl mt-4">{{ ErrorMessage }}</h1>
        <button v-if="Type" @click="$emit('close')" class="rounded-md bg-white h-fit w-5/6 p-4 text-red-700 text-3xl mt-4">{{ Message }}</button>
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