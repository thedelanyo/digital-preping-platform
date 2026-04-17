<script lang="ts">
  let { children } = $props();
</script>

<main class="system">
  {@render children()}
</main>

<style>
  main {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 2.5rem var(--gap-base) 4rem;
    margin: 0 auto;
  }

  @media (min-width: 769px) {
    main {
      gap: 6rem;
      padding-inline: 1rem;
      margin: 0 auto;
    }
  }
</style>
