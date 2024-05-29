<script lang="ts">
  export let startDate;
  export let endDate;
  export let position;
  export let company;
  export let companyUrl;
  export let description;
  export let tools;

  import ArrowLogo from "../../assets/arrow.svg";
  import Badge from "./Badge.svelte";
  let active = false;
</script>

<a
  href={companyUrl}
  target="_blank"
  on:mouseenter={() => {
    active = true;
  }}
  on:mouseleave={() => {
    active = false;
  }}
>
  <div
    class={"flex flex-col gap-2 rounded-lg p-2 transition-all"}
    style={active ? "background:#823F26" : "background:#130D0A"}
  >
    <!-- Heading -->
    <div class="flex flex-col gap-3">
      <p class="text-sm">
        {startDate} - {endDate}
      </p>
      <!-- Job Title and Company-->
      <div class="flex flex-col gap-0 font-bold">
        <div class="flex items-center gap-2">
          <p class="text-xl font-bold">{position}</p>
          <img class="w-10" src={ArrowLogo} alt="Arrow" />
        </div>
        <p class="text-lg font-medium">{company}</p>
      </div>
      <!-- Job Description -->
      <div class="flex flex-col gap-3">
        <p class="text-sm">
          {description}
        </p>
        <!-- Tech Stack -->
        <div class="flex flex-wrap gap-3">
          {#each tools as tool}
            <Badge {tool} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</a>
