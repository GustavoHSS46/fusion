<template>
    <div class="w-full h-full flex flex-col">
        <div class="w-full h-1/2 flex">
            <div class="h-full w-1/2 flex justify-center items-center">
                <div @click="Chamados = true"
                    class="bg-slate-800 w-11/12 h-5/6 rounded-xl flex justify-center select-none cursor-pointer items-center">
                    <div class="h-full w-1/2 flex items-center justify-center">
                        <Icon name="ph:cylinder" class="text-3xl" />
                    </div>
                    <div class="h-full w-full text-lg font-semibold flex items-center">
                        <h1>Chamados</h1>
                    </div>
                </div>
            </div>
            <div @click="Licitacao = true" class="h-full w-1/2 flex justify-center select-none cursor-pointer items-center">
                <div @click="popUp = true" class="bg-slate-800 w-11/12 h-5/6 rounded-xl flex justify-center items-center">
                    <div class="h-full w-1/2 flex items-center justify-center">
                        <Icon name="ic:outline-square" class="text-3xl" />
                    </div>
                    <div class="h-full w-full text-lg font-semibold flex items-center">
                        <h1>Licitações</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-1/2 flex">
            <div @click="Funcionarios = true" class="h-full w-1/2 flex justify-center select-none cursor-pointer items-center">
                <div class="bg-slate-800 w-11/12 h-5/6 rounded-2xl flex justify-center items-center">
                    <div class="h-full w-1/2 flex items-center justify-center">
                        <Icon name="tabler:cone" class="text-3xl" />
                    </div>
                    <div class="h-full w-full text-lg font-semibold flex items-center">
                        <h1>Funcionários</h1>
                    </div>
                </div>
            </div>
            <div @click="Compras = true" class="h-full w-1/2 flex justify-center select-none cursor-pointer items-center">
                <div class="bg-slate-800 w-11/12 h-5/6 rounded-xl flex justify-center items-center">
                    <div class="h-full w-1/2 flex items-center justify-center">
                        <Icon name="fad:softclipcurve" class="text-3xl" />
                    </div>
                    <div class="h-full w-full text-lg font-semibold flex items-center">
                        <h1>Compras</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Transition name="slide-fade">
        <Block @close="close" v-if="Chamados" :Calls="1" />
    </Transition>
    <Transition name="slide-fade">
        <Block @close="close" v-if="Licitacao" :Licition="1" />
    </Transition>
    <Transition name="slide-fade">
        <Block @close="close" v-if="Compras" :Cart="1" />
    </Transition>
    <Transition name="slide-fade">
        <Block @close="close" v-if="Funcionarios" :Workers="1" />

    </Transition>
</template>

<script setup>
const Chamados = ref(false)
const Licitacao = ref(false)
const Compras = ref(false)
const Funcionarios = ref(false)

function close() {
    Chamados.value = false
    Licitacao.value = false
    Compras.value = false
    Funcionarios.value = false
}
</script>

<style>
.slide-fade-enter-active {
    transition: all 1s;
}

.slide-fade-leave-active {
    transition: all 1s;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(-500px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-200px);
}
</style>