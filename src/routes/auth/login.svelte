<script>
  import { auth } from "../../firebase.js";
  import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { goto } from "$app/navigation";

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // @ts-ignore
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        goto("/app");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  $: email = "";
  $: password = "";
</script>

<svelte:head>
  <title>Anklone | Login</title>
</svelte:head>
<main class="h-screen w-screen flex flex-col justify-center items-center">
  <div
    class="min-w-[400px] min-h-[500px] bg-white/20 rounded-xl flex flex-col items-center"
  >
    <h1 class="text-3xl text-content font-bold my-4">Login</h1>
    <div class="flex flex-col">
      <input
        type="email"
        name="email"
        bind:value={email}
        placeholder="johndoe@email.com"
        class="input input-ghost p-2 mb-3"
      />
      <input
        type="password"
        name="password"
        bind:value={password}
        placeholder="Password"
        class="input input-ghost p-2 mb-3"
      />

      <button
        class="btn btn-primary"
        on:click={() => console.log(email, password)}>Login</button
      >
    </div>
    <h3
      class="text-center w-1/2 border-b border-white/50 my-6 text-xl opacity-80"
    >
      or
    </h3>
    <div class="flex flex-row justify-center items-center w-full px-8 my-auto">
      <button class="btn btn-secondary" on:click={signIn}
        >Sign in with <span class="text-white ml-1">Google</span></button
      >
    </div>
    <a href="/auth/signup">Sign up</a>
  </div>
</main>
