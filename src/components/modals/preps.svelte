<script lang="ts">
  type Preps = {
    id: string;
    creator_name: string;
    question: string;
  };

  let { preps = [] as Preps[] } = $props();
</script>

<div class="preps">
  {#each preps as { id, creator_name, question }}
    <a href="/prep-{id}">{question}</a>
  {/each}
</div>

<style>
  .preps {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: -1rem;

    a {
      color: currentColor;
      font-size: 1.5rem;
      border: var(--border);
      padding: 1.5rem;
      border-radius: var(--radius-base);
    }
  }
</style>
