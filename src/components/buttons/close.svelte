<script lang="ts">
  let { onclick }: { onclick?: () => void } = $props();
</script>

<button class="ghost" {onclick} type="button"> close </button>

<style>
  button {
    padding: var(--gap-nano) 1rem;
    flex-shrink: 0;
    font-size: 0.9rem;
    border-radius: 2rem;
  }
</style>
