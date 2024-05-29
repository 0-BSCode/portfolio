<script lang="ts">
  import FacebookLogo from "../assets/facebook.svg";
  import GithubLogo from "../assets/github.svg";
  import LinkedInLogo from "../assets/linkedin.svg";
  import GoogleLogo from "../assets/google.svg";
  import Logo from "./components/Logo.svelte";
</script>

<section class="flex flex-col gap-6">
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
  <div class="flex flex-col items-center justify-between gap-6">
    <div class="flex gap-8">
      <Logo
        link="https://www.linkedin.com/in/bryan-sanchez-b316b7203/"
        logo={LinkedInLogo}
        logoName="LinkedIn"
      />
      <Logo
        link="https://github.com/0-BSCode"
        logo={GithubLogo}
        logoName="Github"
      />
      <Logo
        link="mailto:bipsanchez.work@gmail.com"
        logo={GoogleLogo}
        logoName="Google"
      />
      <Logo
        link="https://www.facebook.com/BryanSanchez1024/"
        logo={FacebookLogo}
        logoName="Facebook"
      />
    </div>
    <a
      class="w-full rounded-full bg-primary-300 px-6 py-4 text-center text-base"
      href={"https://drive.google.com/file/d/1qnlrz-wXhjbgjVyo-CuKH0ivnCrxnYNk/view?usp=sharing"}
      target="_blank"
    >
      View Resume
    </a>
  </div>
</section>
