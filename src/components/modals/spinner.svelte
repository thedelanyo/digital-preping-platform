<script>
  let { size = "23", loading = false } = $props();
</script>

{#if loading}
  <div>
    <span style="width: {size}px;"></span>
  </div>
{/if}

<style>
  div {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    left: 0;
    z-index: 29;
  }

  span {
    aspect-ratio: 1/1;
    border: 5px dotted #fff;
    border-radius: 50%;
    border-bottom-color: #fff;
    border-top-color: #fff;
    animation: spin 0.5s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
