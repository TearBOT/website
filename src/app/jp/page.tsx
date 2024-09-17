import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { ResumeCardXp } from "@/components/resume-card-xp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resumejp";
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
                text={`${DATA.name.split(" ")[0]} です。`}
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
          <h2 className="text-xl font-bold">について</h2>
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
          <h2 className="text-xl">言語</h2>
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
          <h2 className="text-xl">趣味</h2>
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
                  認証
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                アーキテクチャの卓越性
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  専門知識を高めるために認証を追求し、クラウドインフラストラクチャと自動化のスキルをマスターすることでアーキテクチャの役割に進むことに重点を置いています。
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
          <h2 className="text-xl">次の認証</h2>
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
                学位
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                学問の旅
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ソフトウェア工学とコンピュータサイエンスを習得することに専念し、革新的な問題解決と技術の進歩のための強固な基盤を築いてきました。
                </p>
              </div>
            </div>
          </BlurFade>
          </div>
        <h2 className="text-xl">技術</h2>
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
        <h2 className="text-xl">管理</h2>
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
                スキル
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                継続的な学習
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                新しい技術を探求することに情熱を持ち、イノベーションと継続的な学習に満ち、テクノロジーの領域で自分のスキルを適応し、向上させることに常に熱心です。
                </p>
              </div>
            </div>
          </BlurFade>
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">言語プログラミング言語</h2>
        </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skillsLanguages.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl">アーキテクチャ</h2>
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
          <h2 className="text-xl">ソフトスキル</h2>
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
                職務経験
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ダイナミックな経験
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                急速に変化する環境で活躍し、多様なチームと協力しながら、自分のスキルを活かして革新的なソリューションを推進し、共に課題に取り組むことを楽しんでいます。
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
                サイドプロジェクト
                </div>
                <br/>
                <br/>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                常に挑戦
                </h2>
                <br/>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                自由時間にサイドプロジェクトで新しいツールを計画したり作成したり、技術を発見したりすることに取り組んでいます。
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
              連絡先
              </div>
                <br/>
                <br/>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              連絡を取る
              </h2>
              <br/>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                お話ししたいですか？ {" "}
                <Link
                  href="https://www.linkedin.com/in/min-soo-ko/"
                  className="text-blue-500 hover:underline"
                >
                  LinkedInで直接質問を送っていただければ
                </Link>{" "}
                、できるだけ早くお答えします。
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
