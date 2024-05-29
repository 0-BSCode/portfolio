<script lang="ts">
  export let link;
  export let logo;
  export let logoName;
</script>

<a href={link} target="_blank">
  <img src={logo} alt={logoName} class="w-10" />
</a>
