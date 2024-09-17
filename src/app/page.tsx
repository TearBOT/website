import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { ResumeCardXp } from "@/components/resume-card-xp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hello`}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`I'm ${DATA.name.split(" ")[0]}`}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
        <br/>
        <br/>
        <BlurFadeText
          className="max-w-[600px] md:text-xl font-bold"
          delay={BLUR_FADE_DELAY}
          text={DATA.description1}
        />
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary1}
          </Markdown>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary2}
          </Markdown>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary3}
          </Markdown>
        </BlurFade>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">Languages</h2>
        </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.spokenLanguages.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">Hobbies</h2>
        </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.hobbies.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        <br/>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">minsoo.ko@hotmail.com</h2>
        </BlurFade>
      </section>
      <section id="certification">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Certifications
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Architectural Excellence
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pursuing certifications to enhance my expertise, I am focused on advancing towards an architectural role, mastering skills in cloud infrastructure and automation.
                </p>
              </div>
            </div>
          </BlurFade>
          </div>
        {/* <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.certification.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
              />
            </BlurFade>
          ))}
        </div> */}
        <br/>
        <br/>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">Next Certification</h2>
        </BlurFade>
        <br/>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.nextCertification.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Diplomas
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Academic Journey
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dedicated to mastering software engineering and computer science, I&apos;ve built a strong foundation for innovative problem-solving and technological advancement.
                </p>
              </div>
            </div>
          </BlurFade>
          </div>
        <h2 className="text-xl">Technical</h2>
        <br/>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
              />
            </BlurFade>
          ))}
        </div>
        <br/>
        <h2 className="text-xl">Management</h2>
        <br/>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.educationManagement.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Skills
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Continously learning
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Passionate about exploring new technologies,
                I thrive on innovation and continuous learning,
                always eager to adapt and enhance my skills in the tech landscape.
                </p>
              </div>
            </div>
          </BlurFade>
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">Languages</h2>
        </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skillsLanguages.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">Architecture</h2>
        </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skillsArchitecture.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">DevOps</h2>
        </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skillsDevops.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">Soft Skills</h2>
        </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skillsSoft.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Work Experience
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Dynamic Experience
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Thriving in fast-paced environments, I enjoy collaborating with diverse teams, leveraging my skills to drive innovative solutions and tackle challenges together.
                </p>
              </div>
            </div>
          </BlurFade>
          </div>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCardXp
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                location={work.location}
                subtitle={work.title}
                badges={work.badges}
                description={work.description}
                period={`${work.start} - ${work.end ?? "Present"}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Side-Projects
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Always Challenging
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Still planning and creating new tools and discovering technologies by application of these in side projects on my free time.
                </p>
              </div>
            </div>
          </BlurFade>
          </div>
        <br/>
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.sideProjects.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
                <br/>
                <br/>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <br/>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href="https://www.linkedin.com/in/min-soo-ko/"
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
