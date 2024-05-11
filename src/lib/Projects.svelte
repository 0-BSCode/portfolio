<script lang="ts">
  import CalculatorLogo from "../assets/calculator.svg";
  import Project from "./components/Project.svelte";
</script>

<section class="mt-12 flex flex-col gap-6">
  <!-- Heading -->
  <div class="flex gap-3">
    <img src={CalculatorLogo} alt="Projects Logo" />
    <h2 class="text-2xl font-bold uppercase">Projects</h2>
  </div>
  <!-- Projects -->
  <div class="flex flex-col gap-12">
    <Project
      startDate={"September 2023"}
      endDate={"December 2023"}
      projectUrl={"https://github.com/0-BSCode/paper-trail-v2"}
      title={"Paper Trails"}
      subtitle={"A Centralized Grievance System for the University of San Carlos"}
      description={"A web app cut grievance processing time by 25% and boosted student satisfaction 15%. This digital platform replaced a manual paper system, allowing students to submit and track grievances electronically. Secure communication was ensured through role-based access control for students, faculty, and administrators."}
      tools={[
        "React",
        "Typescript",
        "Sequelize",
        "Convex",
        "Umzug",
        "PostgreSQL",
      ]}
    />
    <a
      class="flex w-fit rounded-full bg-primary-700 px-6 py-4 text-xs"
      href={"https://github.com/0-BSCode"}
      target="_blank"
    >
      View All Projects
    </a>
  </div>
</section>
