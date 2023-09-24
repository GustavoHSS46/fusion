<template>
    <div class="h-screen w-screen overflow-hidden bg-gray-900 text-gray-50 font-sans flex justify-center items-center">
        <div class="flex justify-center items-center flex-col w-screen h-screen lg:w-2/4">
            <div class="overflow-hidden flex justify-center items-center flex-row gap-2 w-full h-1/6">
                <Icon name="mdi:printer" class="text-7xl"/>
            </div>
            <div class="w-full h-2/6">
                <LoginForm/>
            </div>
            <div class="overflow-hidden flex justify-center items-center flex-col w-full h-1/6">
                <h3 class="text-xs 2xl:text-lg cursor-default select-none text-slate-400">PLATAFORMA DESENVOLVIDA POR <span class="text-slate-300 font-bold">GUSTAVO HENRIQUE</span></h3>
            </div>
        </div>
    </div>
</template>
