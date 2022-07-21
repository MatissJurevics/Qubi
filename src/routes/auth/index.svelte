<h1>This should redirect</h1>
<script>
    import {goto } from "$app/navigation"
    export const load = async () => {
        goto("/auth/login")
    }
</script>