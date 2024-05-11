<script lang="ts">
  import PlantLogo from "../assets/plant.svg";
  import Link from "./components/Link.svelte";
</script>

<section class="mt-24 flex flex-col gap-6">
  <!-- Heading -->
  <div class="flex gap-3">
    <img src={PlantLogo} alt="About Logo" />
    <h2 class="text-2xl font-bold uppercase">About</h2>
  </div>
  <!-- Content -->
  <div class="flex flex-col gap-6 text-base">
    <p>
      From tinkering with hardware to building software, my passion for creation
      has always been my driving force. The pandemic sparked my journey into web
      development, and I haven't looked back.
    </p>
    <p>
      Today, I bring several years of experience to the table, honed through
      internships at prominent YC-backed tech companies like
      <Link url={"https://dashlabs.ai/"} text={"Dashlabs.ai"} />
      and
      <Link url={"https://www.expedock.com/"} text={"Expedock"} />.
    </p>
    <p>
      When I'm not tackling coding challenges, I find fulfillment in exploring
      new development tools, expanding my knowledge through reading, or staying
      active with kickboxing.
    </p>
  </div>
</section>
