import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/ProjectShowcase";

import pattern from "@/public/images/pattern.webp";

export default function Home() {
  return (
    <main className="">
      {/* bg-[url('/images/pattern.webp')] */}
      {/* HERO */}
      <section className="bg-gundam-blue hidden min-h-screen">
        <h1>HERO</h1>
      </section>

      {/* PROJECTS */}
      <section className="">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center">
          <SectionHeader num={"01"} title={"PROJECTS"} />
          <div className="flex w-full max-w-[964px] flex-col">
            {/* Project 1 */}
            <ProjectShowcase variant="frameOne" reversed={false} />
            {/* Project 2 */}
            <ProjectShowcase variant="frameTwo" reversed={true} />
            {/* Project 3 */}
            <ProjectShowcase variant="frameThree" reversed={false} />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"02"} title={"SKILLS"} />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"03"} title={"EXPERIENCE"} />
        </div>
      </section>

      {/* ABOUT/BIO */}
      <section className="">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"04"} title={"ABOUT"} />
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"05"} title={"CERTIFICATIONS"} />
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section className="">
        <div className="mx-auto max-w-[1200px]">
          <h1>CONTACT / FOOTER</h1>
        </div>
      </section>
    </main>
  );
}
