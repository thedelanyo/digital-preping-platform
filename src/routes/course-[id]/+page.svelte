<script lang="ts">
  import Preps from "$components/modals/preps.svelte";

  let { data } = $props();

  let { course, preps } = $derived(data);
</script>

<section>
  <div>
    <h1>{course.title}.</h1>
    <p>Click on any prep flashcard to start answering more questions on it.</p>
  </div>

  <Preps {preps} />
</section>
