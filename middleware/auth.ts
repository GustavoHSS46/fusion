export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCookie(process.env.TOKEN_URL);

    if (user && to.path === '/login') {
        return navigateTo('/');
    }

    if (!user && to.path === '/') {
        return navigateTo('/login');
    }
});