<script context="module">
    import { auth } from "../../firebase.js"
    import { onAuthStateChanged } from "firebase/auth"
    export const load = async () => {
        const user = auth.currentUser;
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

<script>
    import { page } from "$app/stores"
    import {goto} from "$app/navigation"
    const {url} = $page;
    $: name = ""
    $: imgurl = ""
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            return {}
        }
        else {
            // console.log(user)
            name = user.email 
            imgurl = user.photoURL
        }
       
    })
    
    const signOut = () => {
        auth.signOut()
        console.log(url.origin)
        goto("/auth/login")
    }
</script>


<main class="flex flex-col items-center justify-center h-screen">
   
    <h1>{name}</h1>
    <button class="btn btn-primary" on:click={signOut}>Sign out</button>
</main>