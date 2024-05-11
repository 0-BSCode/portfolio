<script lang="ts">
  import UserTieLogo from "../assets/user-tie.svg";
  import Experience from "./components/Experience.svelte";
</script>

<section class="mt-12 flex flex-col gap-6">
  <!-- Heading -->
  <div class="flex gap-3">
    <img src={UserTieLogo} alt="Experience Logo" />
    <h2 class="text-2xl font-bold uppercase">Experience</h2>
  </div>
  <!-- Experiences -->
  <div class="flex flex-col gap-12">
    <Experience
      startDate={"March 2024"}
      endDate={"Present"}
      company={"Oboda"}
      companyUrl={"https://www.oboda.io/"}
      description={"Developed and implemented an analytics platform for the company website using NextJS, Prisma, and tRPC, resulting in a 40% increase in customer data utilization for informed decision-making."}
      position={"Software Engineer"}
      tools={["React", "t3", "python", "scikit-learn"]}
    />
    <Experience
      startDate={"May 2023"}
      endDate={"November 2023"}
      company={"Expedock"}
      companyUrl={"https://www.expedock.com/"}
      description={"Automated microservice deployments with Python & GitHub Actions (38% dev productivity boost). Redesigned user dashboard with React, Typescript, GraphQL & Flask (information search time cut from 10 mins to 6 mins). Optimized data sync with SQLAlchemy (runtime from 12 mins to 2 mins)."}
      position={"Software Engineer Intern"}
      tools={[
        "React",
        "Typescript",
        "Flask",
        "PostgreSQL",
        "Snowflake",
        "AWS",
        "GraphQL",
      ]}
    />
    <Experience
      startDate={"September 2022"}
      endDate={"March 2023"}
      company={"Dashlabs.ai"}
      companyUrl={"https://www.dashlabs.ai/"}
      description={"Improved e-commerce platform UX by 24% through 15+ features (discount validation, filtering, etc.) and automated PDF generation for purchase history. Streamlined webhook infrastructure with NodeJS/Express/MongoDB, saving 17% on costs."}
      position={"Software Engineer"}
      tools={["React", "Typescript", "MongoDB", "GraphQL"]}
    />
    <a
      class="flex w-fit rounded-full bg-primary-700 px-6 py-4 text-xs"
      href={"https://drive.google.com/file/d/1qnlrz-wXhjbgjVyo-CuKH0ivnCrxnYNk/view?usp=sharing"}
      target="_blank"
    >
      View All Experiences
    </a>
  </div>
</section>
