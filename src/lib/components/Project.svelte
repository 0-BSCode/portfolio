<script lang="ts">
  import Badge from "./Badge.svelte";

  export let startDate;
  export let endDate;
  export let title;
  export let subtitle;
  export let description;
  export let tools;
</script>

<div class="flex flex-col gap-4">
  <!-- Header -->
  <div class="flex flex-col gap-3">
    <p class="text-xs">
      {startDate} - {endDate}
    </p>
    <p class="text-base font-bold">
      {title}
    </p>
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
