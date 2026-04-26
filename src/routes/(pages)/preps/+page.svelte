<script lang="ts">
  import Preps from "$components/modals/preps.svelte";

  let { data } = $props();

  let { title, preps } = $derived(data);
</script>

<section>
  <h1>{title}.</h1>

  <Preps {preps} />
</section>
