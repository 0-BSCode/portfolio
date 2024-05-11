<script lang="ts">
  import Badge from "./Badge.svelte";
  import ArrowLogo from "../../assets/arrow.svg";

  export let startDate;
  export let endDate;
  export let title;
  export let subtitle;
  export let description;
  export let tools;
  export let studyUrl;
</script>

<a href={studyUrl} target="_blank">
  <div class="flex flex-col gap-4">
    <!-- Header -->
    <div class="flex flex-col gap-3">
      <p class="text-xs">
        {startDate} - {endDate}
      </p>
      <div class="flex items-center gap-2">
        <p class="text-base font-bold">
          {title}
        </p>
        <img class="w-10" src={ArrowLogo} alt="Arrow" />
      </div>
      <p class="text-xs italic">
        {subtitle}
      </p>
    </div>
    <!-- Description -->
    <div class="flex flex-col gap-3">
      <p class="text-xs">
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
</a>
