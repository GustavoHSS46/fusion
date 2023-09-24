<template>
    <div class="w-full h-full flex items-center flex-col">
        <div class="w-full h-full flex items-center">
            <div class="w-2/6 lg:w-1/12 h-full flex justify-center items-center">
                <Icon name="ic:baseline-person" class="text-6xl"/>
            </div>
            <div class="w-full h-full flex lg:items-center text-center justify-center p-2 flex-col">
                <h1 class="text-lg text-slate-200">{{ name }} {{ lastName }}</h1>
                <h1 class="text-slate-400 text-base">{{ role }}</h1>
            </div>
            <div class="w-1/6 h-full flex items-center justify-center invisible">
                <Icon name="ic:baseline-keyboard-arrow-right" class="text-3xl" />
            </div>
        </div>
    </div>
</template>

<script setup>
const client = useSupabaseClient()

const {
    data: { user },
} = await client.auth.getUser()

let name = ref('')
let lastName = ref('')
let role = ref('')

name = user.user_metadata.first_name
lastName = user.user_metadata.last_name
role = user.user_metadata.role
console.log("profile", user.user_metadata)

</script>