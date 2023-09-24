<template>
    <div
        class="h-screen w-screen overflow-x-hidden bg-black text-gray-50 font-sans flex flex-col justify-center items-center">
        <div class="w-full h-1/6 lg:w-2/4"><Profile/></div>
        <div class="w-full h-full">
            <div class="w-full h-2/6 flex flex-col">
                <Blocks/>
            </div>
            <button @click="SignOut()" class="bg-slate-600 w-full h-fit">logout</button>
        </div>
    </div>
</template>
<script setup>
const client = useSupabaseClient()
function SignOut() {
    client.auth.signOut();
    navigateTo('/login')
}


const {
    data: { user },
} = await client.auth.getUser()
</script>
