<template>
    <div
        class="h-screen w-screen overflow-hidden bg-gray-900 text-gray-50 font-sans flex flex-col justify-center items-center">
        <h1>home</h1>
        <button @click="SignOut()" class="bg-emerald-600 w-full h-16">Macaco</button>
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


console.log("profile", user.user_metadata)



</script>
