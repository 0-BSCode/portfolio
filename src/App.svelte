<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";

  import "./app.css";
  import Hero from "./lib/Hero.svelte";
  import About from "./lib/About.svelte";
  import Experiences from "./lib/Experiences.svelte";
  import Projects from "./lib/Projects.svelte";
</script>

<Navbar />
<main class="mx-3">
  <Hero />
  <About />
  <Experiences />
  <Projects />
</main>
