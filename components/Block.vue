<template>
    <div
        class="w-screen h-screen bg-slate-900 absolute top-0 left-0 select-none overflow-hidden flex justify-center items-center flex-col">
        <div v-if="Calls" class="w-11/12 h-full pt-4 bg-slate-900">
            <Icon @click="$emit('close')" class="text-5xl" name="material-symbols:cancel"/>
            <div class="w-full h-2/4 flex pt-6 items-center flex-col">
                <h1 class="text-3xl font-semibold">CHAMADOS</h1>
                <h1 class="text-lg pt-4">Ainda Em Produção</h1>
            </div>
        </div>

        <div v-if="Workers" class="w-11/12 h-full pt-4 bg-slate-900">
            <Icon @click="$emit('close')" class="text-5xl" name="material-symbols:cancel"/>
            <div class="w-full h-2/4 flex pt-6 items-center flex-col">
                <h1 class="text-3xl font-semibold">Funcionario</h1>
                <h1 class="text-lg pt-4">Ainda Em Produção</h1>
            </div>
        </div>

        <div v-if="Licition" class="w-11/12 h-full pt-4 bg-slate-900">
            <Icon @click="$emit('close')" class="text-5xl" name="material-symbols:cancel"/>
            <div class="w-full h-2/4 flex pt-6 items-center flex-col">
                <h1 class="text-3xl font-semibold">Licitações</h1>
                <h1 class="text-lg pt-4">Ainda Em Produção</h1>
            </div>
        </div>

        <div v-if="Cart" class="w-11/12 h-full pt-4 bg-slate-900">
            <Icon @click="$emit('close')" class="text-5xl" name="material-symbols:cancel"/>
            <div class="w-full h-2/4 flex pt-6 items-center flex-col">
                <h1 class="text-3xl font-semibold">COMPRAS</h1>
                <h1 class="text-lg pt-4">Ainda Em Produção</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    Calls: Number,
    Workers: Number,
    Licition: Number,
    Cart: Number,
})
</script>