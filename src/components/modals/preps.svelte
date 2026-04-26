<script lang="ts">
  import { slugify } from "$lib/helpers/text";
  import Creator from "./creator.svelte";

  type Preps = {
    id: string;
    creatorName: string;
    creatorId: string;
    question: string;
    topics: string;
    courseId: string;
  };

  type Props = { preps: Preps[] };

  let { preps }: Props = $props();
</script>

<div class="preps">
  {#each preps as prep}
    {@const [, prepId] = prep.id.split(":")}
    {@const creator = `${prep.creatorId}:${prep.creatorName}`}
    <div class="prep">
      <a href="/prep-{prepId}?creator={creator}"> {prep.question}</a>

      <div class="topics">
        {#each prep.topics.split(",") as topic}
          {@const search = encodeURIComponent(topic)}
          <a href="/preps?course={prep.courseId}&search={search}">
            #{slugify(topic)}
          </a>
        {/each}
      </div>

      <Creator {creator} {prepId} />
    </div>
  {/each}
</div>

<style>
  .preps {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    .prep {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      box-shadow: var(--shadow-inset);
      padding: 1rem;
      border-radius: var(--radius-base);
      font-size: 1.2rem;
      width: 100%;

      & > a {
        color: currentColor;
      }

      .topics {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;

        a {
          text-transform: lowercase;
          font-size: 1rem;
        }
      }
    }
  }
</style>
