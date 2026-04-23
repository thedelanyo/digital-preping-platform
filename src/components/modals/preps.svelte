<script lang="ts">
  import Creator from "./creator.svelte";

  type Preps = {
    id: string;
    creator_name: string;
    creator_id: string;
    question: string;
  };

  type Props = { preps: Preps[] };

  let { preps }: Props = $props();
</script>

<div class="preps">
  {#each preps as { id, question, creator_name, creator_id }}
    {@const [, prepId] = id.split(":")}
    {@const creator = `${creator_id}:${creator_name}`}
    <div>
      <a href="/app/prep-{prepId}?creator={creator}">{question}</a>
      <Creator {prepId} {creator} />
    </div>
  {/each}
</div>

<style>
  .preps {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      box-shadow: var(--shadow-inset);
      padding: 1.5rem 1rem;
      border-radius: var(--radius-base);
      font-size: 1.3rem;

      a {
        color: currentColor;
      }
    }
  }
</style>
