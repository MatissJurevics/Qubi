<script context="module">
    import { auth } from "../../firebase.js"

    export const load = async () => {
        const user = auth.currentUser;
        console.log(user)
        if (!user) {
            return {
                status:302,
                redirect: "/auth/login"
            }
        } else {
            return {}
        }
    }
    
</script>
<svelte:head>
    <title>Qubi</title>
</svelte:head>

<slot />
