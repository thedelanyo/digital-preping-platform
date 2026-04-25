<script>
  import { preplet } from "$db/schema/preps";
  import { fly } from "svelte/transition";

  let { score } = $derived($preplet);

  let percent = $derived.by(() => {
    let total = score.totalCorrect + score.totalWrong;
    return Math.round((score.totalCorrect / total) * 100) || 0;
  });
</script>

<div class="scorecard" in:fly={{ x: -500 }}>
  <h2>Scorecard</h2>

  <div>
    <div class="score">
      <p>
        <span>Total Correct:</span>
        <span>{score.totalCorrect}</span>
      </p>

      <p>
        <span>Total Wrong:</span>
        <span>{score.totalWrong}</span>
      </p>
    </div>

    <p class="percent">{percent}%</p>
  </div>
</div>

<style>
  .scorecard {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .score {
      display: flex;
      flex-direction: column;

      p {
        border-bottom: var(--border);
        padding: var(--gap-small) 1rem;
        font-size: 1.2rem;
        display: flex;
        justify-content: space-between;
      }
    }

    & > div {
      border: var(--border);
      border-radius: var(--radius-large);
    }

    .percent {
      text-align: center;
      font-size: 6rem;
      padding: 1rem;
    }
  }
</style>
