<script lang="ts">
  import { userIcons } from "$lib/client/icons";
  import { truncateString } from "$lib/helpers/text";
  import Svg from "./svg.svelte";

  type Props = { prepId: string; creator: string };

  let { prepId, creator }: Props = $props();

  let [id, name] = $derived(creator.split(":"));
</script>

<div class="creator">
  <a href="preps?creator={id}" class="ghost">
    <Svg ds={userIcons} dimension="25" />
    <span>{truncateString(name, 10)}</span>
  </a>

  <a href="/app/prep-{prepId}?creator={creator}" class="ghost"> start prep </a>
</div>

<style>
  .creator {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .ghost {
      display: flex;
      align-items: center;
      color: currentColor;
      gap: 0.5rem;
      font-size: 0.8rem;
      padding: var(--gap-nano) var(--gap-smallest);
      border-radius: 2rem;
    }
  }
</style>
