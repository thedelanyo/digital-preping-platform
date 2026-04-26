<script>
  import { courses } from "$lib/client/courses";
  import { site } from "$lib/client/site";
</script>

<section>
  <div>
    <h1>{site.title}</h1>
    <p>{site.description}</p>
  </div>

  <div>
    <h2>Current Courses</h2>

    <div class="courses">
      {#each courses as { id, title }}
        <a href="/preps?course={id}">
          <img src="/courses/{id}.webp" alt="" />
          <span class="title">{title}</span>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  h2 {
    margin-bottom: 0.5rem;
  }

  .courses {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: var(--border);
      border-radius: var(--radius-large);
      color: currentColor;

      img {
        width: 5rem;
        object-fit: cover;
        border-radius: var(--radius-large) 0 0 var(--radius-large);
      }

      .title {
        font-weight: bold;
        padding: 1rem;
      }
    }
  }
</style>
