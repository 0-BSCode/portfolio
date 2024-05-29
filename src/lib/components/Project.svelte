<script lang="ts">
  import Badge from "./Badge.svelte";

  export let startDate;
  export let endDate;
  export let title;
  export let subtitle;
  export let description;
  export let tools;
  export let projectUrl;

  import ArrowLogo from "../../assets/arrow.svg";
  let active = false;
</script>

<a
  href={projectUrl}
  target="_blank"
  on:mouseenter={() => {
    active = true;
  }}
  on:mouseleave={() => {
    active = false;
  }}
>
  <div
    class="flex flex-col gap-4 rounded-lg p-2 transition-all"
    style={active ? "background:#823F26" : "background:#130D0A"}
  >
    <!-- Header -->
    <div class="flex flex-col gap-3">
      <p class="text-sm">
        {startDate} - {endDate}
      </p>
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <p class="text-xl font-bold">
            {title}
          </p>
          <img class="w-10" src={ArrowLogo} alt="Arrow" />
        </div>
        <p class="text-base italic">
          {subtitle}
        </p>
      </div>
    </div>
    <!-- Description -->
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
</a>
