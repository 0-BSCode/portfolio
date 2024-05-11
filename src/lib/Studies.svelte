<script lang="ts">
  import FileCabinetLogo from "../assets/file-cabinet.svg";
  import Study from "./components/Study.svelte";
</script>

<section class="mt-12 flex flex-col gap-6">
  <!-- Heading -->
  <div class="flex gap-3">
    <img src={FileCabinetLogo} alt="Case Studies Logo" />
    <h2 class="text-2xl font-bold uppercase">Case Studies</h2>
  </div>
  <!-- Projects -->
  <div class="flex flex-col gap-12">
    <Study
      startDate={"March 2024"}
      endDate={"May 2024"}
      title={"Leafe"}
      subtitle={"Built for writers with simplicity in mind."}
      description={"A cross-platform Web Application for story text editing, task management, workflows, and easy sharing. Leave or request for peer reviews on your work via URL and avail of AI assistance for multiple utilities."}
      tools={["Figma"]}
    />
  </div>
</section>
