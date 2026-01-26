"use client";

import ContactForm from "../components/contact-form";
import TechStack from "../components/tech-stack";
import { AutoSliderBanner } from "@/components/auto-slider-banner";
import { useEffect, useState } from "react";
import { useSplashComplete } from "./layout";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectStack } from "@/components/project-stack";
import { AboutSection } from "../components/about-section";
import { ChevronUp } from "lucide-react";
import writing from "@/data/writing.json";
import Link from "next/link";
import education from "@/data/education.json";

export default function Page() {
  const [navTransparent, setNavTransparent] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showTOS, setShowTOS] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const splashComplete = useSplashComplete();
  const writingPosts = ((writing as any)?.posts ??
    (writing as any) ??
    []) as Array<{
    title: string;
    url: string;
    tag?: string;
  }>;

  useEffect(() => {
    if (!splashComplete) return;
    const onScroll = () => {
      setNavTransparent(window.scrollY < 10);
      setShowBackToTop(window.scrollY > 3000);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    let timer: NodeJS.Timeout | null = null;
    requestAnimationFrame(() => {
      timer = setTimeout(() => setHeaderVisible(true), 1500);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, [splashComplete]);

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar
        navTransparent={navTransparent}
        headerVisible={headerVisible}
        setMobileNavOpen={setMobileNavOpen}
        mobileNavOpen={mobileNavOpen}
      />
      <main className="-mt-16">
        {/* Hero Section */}
        <section>
          <AutoSliderBanner />
        </section>
        {/* About Section */}
        <AboutSection />
        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-20 md:py-32 relative px-4 md:px-8"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <ProjectStack />
        </section>

        {/* Tech Stack Section */}
        <section
          id="tech"
          className="py-20 md:py-32 bg-gradient-to-b from-background to-purple-950/30 rounded-xl my-12 px-4 md:px-8"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <TechStack />
        </section>

        {/* Education */}
        <section id="education" className="py-16 md:py-24 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Global Education Journey
          </h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="mb-4">
              A timeline of where I studied, what I focused on, and the
              milestones that brought me here.
            </p>
            <div className="relative mt-8 text-left">
              <div className="absolute left-3 top-0 h-full w-px bg-border/70" />
              <div className="space-y-6">
                {education.map((e, idx) => (
                  <div key={`${e.title}-${idx}`} className="relative pl-10">
                    <div className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400" />
                    <div className="rounded-xl border border-border/60 bg-background/40 p-5">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div className="font-semibold">{e.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {e.dates}
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {e.subtitle}
                      </div>

                      {e.bullets?.length ? (
                        <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          {e.bullets.map((b: string) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Writing Section */}
        <section
          id="writing"
          className="py-16 md:py-24 px-4 md:px-8 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-pink-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Writing
          </h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="mb-8">
              Short notes + longer essays from building and events.
            </p>

            <div className="grid gap-3 text-left">
              {(writingPosts ?? []).map((post) => (
                <Link
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  prefetch={false}
                  className="block rounded-xl border border-border bg-muted/40 px-6 py-5 transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring pointer-events-auto"
                >
                  <div className="text-lg font-semibold text-foreground">
                    {post.title}
                  </div>
                  {post.tag ? (
                    <div className="mt-1 text-sm text-muted-foreground">
                      {post.tag}
                    </div>
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Events Placeholder */}
        <section id="events" className="py-16 md:py-24 px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
            Events & Volunteering
          </h2>
          <div className="max-w-2xl mx-auto text-center text-muted-foreground">
            <p className="mb-4">
              Photos + short notes from tech events and volunteering.
            </p>
            <ul className="space-y-2">
              <li className="bg-muted rounded px-4 py-2 text-muted-foreground/70">
                [Events Placeholder]
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 px-4 md:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
      {/* Back to Top Button (desktop only) */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hidden md:flex fixed bottom-8 right-8 z-50 bg-black/80 hover:bg-purple-500/10 text-white rounded-full p-3 shadow-lg border-2 border-purple-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          aria-label="Back to top"
        >
          <ChevronUp className="h-7 w-7" />
        </button>
      )}
      <Footer
        setShowTOS={setShowTOS}
        setShowPrivacy={setShowPrivacy}
        showTOS={showTOS}
        showPrivacy={showPrivacy}
      />
    </div>
  );
}
