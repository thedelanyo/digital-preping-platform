<script>
  let { size = "17" } = $props();
  let width = $derived(`${size}rem`);
</script>

<div>
  <img src="/images/hero.svg" alt="" style:width />
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
