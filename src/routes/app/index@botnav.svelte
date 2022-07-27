<script>
    import { page } from "$app/stores"
    import {goto} from "$app/navigation"
    import { onAuthStateChanged } from "firebase/auth"
    import {auth} from "../../firebase.js"
    const {url} = $page;
    $: name = ""
    $: photoURL = ""
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            return {}
        }
        else {
            // console.log(user)
            // @ts-ignore
            name = user.email 
            // @ts-ignore
            photoURL = user.photoURL
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
    <a href="/app/test"> test</a>
</main>