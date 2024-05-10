<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./lib/Navbar.svelte";

  // import "./app.css";
  import Hero from "./lib/Hero.svelte";
</script>

<Navbar />
<main class="mx-3">
  <Hero />
  <div class="w-7 bg-slate-950 text-yellow-600">
    <Counter />
  </div>
</main>
