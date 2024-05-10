<script lang="ts">
  import FacebookLogo from "../assets/facebook.svg";
  import GithubLogo from "../assets/github.svg";
  import LinkedInLogo from "../assets/linkedin.svg";
  import GoogleLogo from "../assets/google.svg";
</script>

<div class="flex flex-col gap-6">
  <!-- Introduction -->
  <div class="flex flex-col gap-1">
    <h1 class="text-4xl font-bold">Bryan Sanchez</h1>
    <p class="text-sm font-medium">
      Product-driven Fullstack Software Engineer
    </p>
  </div>
  <!-- Description -->
  <p class="text-xs">
    I build bridges between problems and progress through code
  </p>
  <!-- Socials -->
  <div class="flex gap-6">
    <a
      href="https://www.linkedin.com/in/bryan-sanchez-b316b7203/"
      target="_blank"
    >
      <img src={LinkedInLogo} alt="LinkedIn" />
    </a>
    <a href="https://github.com/0-BSCode" target="_blank">
      <img src={GithubLogo} alt="Github" />
    </a>
    <a href="mailto:bipsanchez.work@gmail.com" target="_blank">
      <img src={GoogleLogo} alt="Google" />
    </a>
    <a href="https://www.facebook.com/BryanSanchez1024/" target="_blank">
      <img src={FacebookLogo} alt="Facebook" />
    </a>
  </div>
</div>
