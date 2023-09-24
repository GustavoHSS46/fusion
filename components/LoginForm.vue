<template>
    <div class="overflow-hidden font-sans h-full w-full flex justify-center items-center flex-col">
        <form @submit.prevent="() => login()" class="w-full h-full flex flex-col items-center justify-center gap-4">
            <h1 class="text-4xl text-white w-full h-1/6 cursor-default select-none flex justify-center items-center">Login
            </h1>
            <input v-model="email" placeholder="gustavo@soslocacoes.com" type="email" maxlength="64"
                class="text-center placeholder:text-gray-600 focus:outline-none focus:border-none bg-slate-500 rounded-md w-4/5 h-1/6">
            <input v-model="password" placeholder="******" type="password" maxlength="32" minlength="6"
                class="text-center text-xl placeholder:text-gray-600 focus:outline-none focus:border-none bg-slate-500 rounded-md h-1/6 w-4/5">
            <input type="submit" class="rounded-md cursor-pointer font-sans bg-emerald-600 h-1/6 w-4/5">
        </form>
    </div>
    <Modal v-if="errorView" :Type="1" @close="close" :ErrorMessage="ErrorMessage" ModalType="Error"
        Message="Tentar Novamente" />
    <Modal v-if="isLoading" @close="close" ErrorMessage="This May Take Some Time" ModalType="Loading" />
</template>

<script setup>
const email = ref('')
const password = ref('')
const client = useSupabaseClient()
const errorView = ref(false)
const isLoading = ref(false)
let ErrorMessage = ref('')


const { error } = client.auth.signOut()

function close() {
    errorView.value = false
    console.log(errorView)
}


const login = async () => {
    isLoading.value = true

    const user = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })

    setTimeout(function () {
        if (user.error !== null) {
            isLoading.value = false
            ErrorMessage = user.error.message
            errorView.value = true
            console.log(ErrorMessage, errorView)
        } else {
            isLoading.value = false
            return navigateTo('/')
        }
    }, 1000);


}
</script>