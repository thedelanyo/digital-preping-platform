<script lang="ts">
  import { enhance } from "$app/forms";
  import { prep } from "$db/schema/preps";
  import { trimSpaces } from "$lib/helpers/text";
  import toast from "svelte-hot-french-toast";
  import { fly, scale } from "svelte/transition";
  import Drawer from "./drawer.svelte";
  import Hero from "./hero.svelte";
  import Spinner from "./spinner.svelte";

  let {
    toggle = $bindable(""),
    step = $bindable(1),
    loading = false,
    success = false,
    submit = null,
  } = $props();

  const { questions } = $derived($prep);

  let is_last = $derived.by(() => {
    return step === questions.length;
  });

  const stepper = (direction: "L" | "R") => {
    direction === "L" && step !== 1 && step--;
    direction === "R" && !is_last && step++;
  };

  type Listen = {
    value: string;
    index: number;
    by: "Q" | "A" | "AC";
    optI: number;
  };

  const listen = (data: Listen) => {
    const { index, by, optI } = data;

    const value = trimSpaces(data.value);

    if (!data) return;

    prep.update((prep) => {
      if (by === "Q") prep.questions[index].title = value;
      if (by === "A") prep.questions[index].options[optI] = value;
      if (by === "AC") prep.questions[index].answer_code = parseInt(value);

      return prep;
    });

    toast.success("Prep updated");
  };

  const resubmit = () => {
    localStorage.removeItem("prep");
    location.reload();
  };
</script>

<Drawer top>
  {#if success}
    <div class="done" in:fly={{ x: -500 }}>
      <Hero size="13" />

      <div class="success">
        👋 Prep submitted successfully. Thanks for your contribution 👋.
      </div>

      <div class="flow-wide">
        <button class="ghost" onclick={resubmit}>submit again</button>
        <a href="/prepping-{$prep.id}" class="button">view prep</a>
      </div>
    </div>
  {:else}
    <h3>
      <button class="ghost" onclick={() => (toggle = "")}>close</button>
      <span> Review & Submit </span>
    </h3>

    <form method="POST" use:enhance={submit}>
      <input type="hidden" name="prep" value={JSON.stringify($prep)} />

      <div class="course">
        <div class="ghost">{$prep.course_title || "No course selected"}</div>
        <div class="ghost">{$prep.topic || "No topic selected"}</div>
      </div>

      {#key step}
        <div in:fly={{ x: -500 }}>
          <div class="info ghost">
            Question: ({step}/{questions.length})
          </div>
          <div>
            {#each questions as { title, options, answer_code }, index}
              {#if step === index + 1}
                <div class="question">
                  <textarea
                    onchange={() => {
                      listen({ by: "Q", value: title, index, optI: 0 });
                    }}
                    value={title}
                  ></textarea>
                </div>

                <div class="options">
                  {#each options as opt, optI}
                    {@const id = `option_${optI}`}
                    {@const checked = optI === answer_code}
                    <div class="inline-control">
                      <input
                        type="text"
                        name={id}
                        {id}
                        onchange={({ currentTarget }) => {
                          const value = currentTarget.value;
                          listen({ by: "A", value, index, optI });
                        }}
                        value={opt}
                      />
                      <input
                        type="radio"
                        {id}
                        name="option"
                        {checked}
                        onchange={() => {
                          listen({ by: "AC", value: `${optI}`, index, optI });
                        }}
                      />
                    </div>
                  {/each}
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/key}

      <div class="flow-wide">
        <button class="ghost" type="button" onclick={() => stepper("L")}>
          previous
        </button>

        {#if is_last}
          <button in:scale>
            <span>submit prep</span>
            <Spinner {loading} />
          </button>
        {:else}
          <button
            in:scale
            type="button"
            class="ghost"
            onclick={() => stepper("R")}
          >
            next
          </button>
        {/if}
      </div>
    </form>
  {/if}
</Drawer>

<style>
  form {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    justify-content: space-between;
    height: 85vh;
    margin-top: 3rem;
    font-size: 0.9rem;

    .flow-wide button {
      border-radius: 2rem;
    }
  }

  .course .ghost {
    justify-content: start;
  }

  .options {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .info.ghost {
    width: max-content;
    padding-block: var(--gap-nano);
  }

  h3 {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-bottom: var(--border);
    padding: var(--gap-micro) var(--gap-small);
    position: fixed;
    top: 0;
    background-color: var(--bg-color);
    z-index: 10;

    button {
      border-radius: 2rem;
      font-size: 0.8rem;
      padding: var(--gap-micro) var(--gap-base);
    }
  }

  .done {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .success {
      padding: var(--gap-small);
      border-radius: var(--radius-base);
    }

    .flow-wide {
      margin-top: 8rem;

      .ghost,
      .button {
        width: 100%;
      }
    }
  }
</style>
