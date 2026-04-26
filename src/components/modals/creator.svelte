<script lang="ts">
  type Props = { prepId: string; creator: string };

  let { prepId, creator }: Props = $props();

  let [id, name] = $derived(creator.split(":"));
</script>

<div class="creator">
  <!-- <a href="preps?creator={id}" class="ghost">
    <Svg ds={userIcons} dimension="25" />
    <span>{truncateString(name.split(" ")[0], 10)}</span>
  </a> -->

  <a class="ghost" href="/prep-{prepId}?creator={creator}"> start prepping</a>
</div>

<style>
  .creator {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1.5rem;

    .ghost {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      padding: var(--gap-nano) var(--gap-base);
      border-radius: 2rem;
    }
  }
</style>
