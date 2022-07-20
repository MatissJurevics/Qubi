<h1>auth</h1>
<script>
    import {goto } from "$app/navigation"
    export const load = async () => {
        goto("/auth/login")
    }
</script>