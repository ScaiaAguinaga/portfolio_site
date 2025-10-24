import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="bg-gundam-blue hidden min-h-screen">
        <h1>HERO</h1>
      </section>

      {/* PROJECTS */}
      <section className="bg-foreground">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center">
          <SectionHeader num={"01"} title={"PROJECTS"} />
          <div className="border-gundam-blue h-[325px] w-[1008px] border-2"></div>
          <div className="border-gundam-blue h-[325px] w-[1008px] border-2"></div>
          <div className="border-gundam-blue h-[325px] w-[1008px] border-2"></div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-foreground">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"02"} title={"SKILLS"} />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-foreground">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"03"} title={"EXPERIENCE"} />
        </div>
      </section>

      {/* ABOUT/BIO */}
      <section className="bg-foreground">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"04"} title={"ABOUT"} />
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-foreground">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader num={"05"} title={"CERTIFICATIONS"} />
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section className="bg-foreground">
        <div className="mx-auto max-w-[1200px]">
          <h1>CONTACT / FOOTER</h1>
        </div>
      </section>
    </main>
  );
}
