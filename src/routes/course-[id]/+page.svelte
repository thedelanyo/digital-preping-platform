<script lang="ts">
  let { data } = $props();

  let { id, title } = $derived(data.course);
</script>

<section>
  <h1>Prep Flashcards for {title}.</h1>
</section>
