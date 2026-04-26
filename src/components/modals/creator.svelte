<script lang="ts">
  type Props = { prepId: string; creator: string };

  let { prepId, creator }: Props = $props();

  // let [id, name] = $derived(creator.split(":"));
</script>

<div class="creator">
  <!-- <a href="preps?creator={id}" class="ghost">
    <Svg ds={userIcons} dimension="25" />
    <span>{truncateString(name, 10)}</span>
  </a> -->

  <a href="/app/prep-{prepId}?creator={creator}" class="ghost">
    start prepping
  </a>
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
      font-size: 1rem;
      padding: var(--gap-micro) var(--gap-smallest);
      border-radius: 2rem;
      width: 100%;
    }
  }
</style>
