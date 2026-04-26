<script lang="ts">
  import Header from "$components/layouts/header.svelte";
  import Main from "$components/layouts/main.svelte";
  import Meta from "$components/layouts/meta.svelte";
  import "$styles/app.css";
  import { Toaster } from "svelte-hot-french-toast";

  let { children } = $props();
</script>

<Meta />

<Header />

<Main>
  {@render children()}
</Main>

<Toaster />
