import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  BadgeCheck,
  Camera,
  Club,
  Compass,
  BriefcaseBusiness,
  Clapperboard,
  Download,
  Facebook,
  Github,
  Gamepad2,
  Home,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Menu,
  MonitorSmartphone,
  Music4,
  NotebookPen,
  Plane,
  Phone,
  Sparkles,
  Twitter,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ParticleNetwork } from "@/components/particle-network";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "work", label: "Resume", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: Mail },
];

const socialLinks = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
];

const stats = [
  { value: "Python", label: "Backend-focused engineering" },
  { value: "Django", label: "Secure web application delivery" },
  { value: "REST API", label: "Scalable integration systems" },
];

const services = [
  "Django application development with maintainable architecture",
  "REST API design with JWT, OAuth, and RBAC-based security",
  "PostgreSQL-backed systems with performance-minded implementation",
];

const aboutHighlights = [
  { icon: BriefcaseBusiness, value: "2 Years Job Experience", label: "Professional industry experience" },
  { icon: BadgeCheck, value: "5+ Project Complete", label: "Delivered across backend and full-stack work" },
  { icon: Sparkles, value: "Freelance Available", label: "Open to remote and contract opportunities" },
];

const interests = [
  { icon: Music4, label: "Music" },
  { icon: Plane, label: "Travelling" },
  { icon: Camera, label: "Photos" },
  { icon: Clapperboard, label: "Movies" },
  { icon: Compass, label: "Nature" },
  { icon: MonitorSmartphone, label: "Badminton" },
  { icon: Club, label: "Cards" },
  { icon: Gamepad2, label: "Chess" },
];

const experiences = [
  {
    period: "Professional Experience",
    title: "Software Engineer",
    place: "Ubique",
    points: [
      "Developed and maintained scalable web applications using modern programming languages and frameworks.",
      "Optimized code performance, fixed bugs, and improved system reliability.",
      "Participated in code reviews and followed best practices for clean, efficient development.",
      "Built and integrated front-end interfaces with back-end APIs to deliver complete full-stack solutions.",
      "Managed databases, handled server-side logic, and ensured smooth deployment of web applications.",
      "Implemented responsive designs and ensured cross-browser compatibility for seamless user experience.",
    ],
  },
];

const educationItems = [
  {
    period: "B.Sc",
    title: "B.Sc in Software Engineering",
    place: "Daffodil International University",
    points: [
      "Covered software development, algorithms, data structures, operating systems, computer architecture, software security, ethics, legal principles, and cyber laws.",
      "Built a strong foundation in maintainable engineering practices and applied software problem solving.",
    ],
  },
  {
    period: "Higher Secondary",
    title: "Higher Secondary Certificate",
    place: "Khoksa College",
    points: ["Completed higher secondary studies in the Science group."],
  },
  {
    period: "Secondary",
    title: "Secondary School Certificate",
    place: "Khoksa Janipur Pilot Secondary School",
    points: ["Completed secondary education with a strong general academic base."],
  },
];

const workingSteps = [
  {
    number: "01",
    title: "Discuss Problem",
    description:
      "Understand the project goal, technical needs, constraints, and business context before planning the build.",
  },
  {
    number: "02",
    title: "Describe Creative Solutions or Concept",
    description:
      "Shape the best solution direction with practical ideas, architecture thinking, and a clear execution plan.",
  },
  {
    number: "03",
    title: "Turn into Web",
    description:
      "Convert the concept into a responsive, secure, and maintainable web application with clean implementation.",
  },
  {
    number: "04",
    title: "Final Solution",
    description:
      "Refine, test, optimize, and deliver a complete solution that is ready for real users and future growth.",
  },
];

const skillBars = [
  { name: "Web Developer", value: 75 },
  { name: "Python", value: 90 },
  { name: "JavaScript", value: 85 },
];

const skillCircles = [
  { name: "React", value: 70 },
  { name: "Django", value: 80 },
  { name: "MySQL", value: 85 },
  { name: "PostgreSQL", value: 85 },
];

const rotatingTitles = [
  "Software Engineer",
  "Python Developer",
  "Django Developer",
  "Designer",
];

const cvFilePath = "/Litons-CV.pdf";
const emailJsServiceId = "service_w6uptrh";
const emailJsTemplateId = "krhs49BeggH5nEss84-CE";
const emailJsPublicKey = "xofb7RzrgDudkABve";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [titleIndex, setTitleIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mailNotice, setMailNotice] = useState("");

  useEffect(() => {
    const sectionIds = ["home", "about", "work", "skills", "contact"];

    const updateActiveSection = () => {
      const scrollPoint = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return;
        }

        const sectionTop = element.offsetTop;
        if (scrollPoint >= sectionTop) {
          currentSection = id;
        }
      });

      const pageBottom = window.scrollY + window.innerHeight;
      if (document.body.offsetHeight - pageBottom < 24) {
        currentSection = sectionIds.at(-1) || currentSection;
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % rotatingTitles.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSendMail = async (event) => {
    event.preventDefault();

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "litonbiswas1997@gmail.com",
          reply_to: formData.email,
        },
        emailJsPublicKey,
      );

      setMailNotice("Message sent successfully to litonbiswas1997@gmail.com.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setMailNotice(
        "Message sending failed. Please check your EmailJS template fields and try again.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#09111f] text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(172,196,219,0.22),_transparent_35%),linear-gradient(120deg,_rgba(12,21,37,0.92),_rgba(55,76,103,0.72)_45%,_rgba(118,137,158,0.45)_100%)]" />
        <div className="absolute inset-y-0 left-[18%] hidden w-[42rem] rounded-full bg-white/8 blur-3xl lg:block" />
        <div className="absolute inset-y-0 right-[-10%] w-[38rem] rounded-full bg-sky-200/10 blur-3xl" />
        <ParticleNetwork />

        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 lg:hidden">
          <div className="relative mx-auto max-w-7xl">
            <div className="flex h-14 items-center justify-between rounded-[1.75rem] border border-white/10 bg-black/78 px-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <button
              className="bg-gradient-to-r from-emerald-300 via-cyan-200 to-white bg-clip-text text-2xl font-black tracking-[0.35em] text-transparent transition-all duration-500 hover:scale-[1.03]"
              onClick={() => scrollToSection("home")}
              type="button"
            >
              LITON
            </button>
            <button
              aria-label="Toggle navigation"
              className="rounded-full border border-white/15 p-2 text-white/90 transition-all duration-500 hover:border-emerald-400/35 hover:bg-emerald-400/10 hover:text-emerald-300"
              onClick={() => setMenuOpen((value) => !value)}
              type="button"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
            <div
              className={`absolute left-0 right-0 top-0 z-50 overflow-hidden rounded-[2rem] border border-white/10 bg-black/92 px-4 pb-5 pt-[4.75rem] shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 ${
                menuOpen
                  ? "pointer-events-auto translate-x-0 opacity-100"
                  : "pointer-events-none -translate-x-[108%] opacity-0"
              }`}
            >
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium tracking-wide transition-all duration-500 ease-out hover:translate-x-1 hover:scale-[1.01] ${
                      activeSection === item.id
                        ? "border-emerald-400/40 bg-emerald-400/12 text-emerald-300 shadow-[0_0_0_1px_rgba(52,211,153,0.08)]"
                        : "border-white/10 bg-white/5 text-white/85 hover:border-emerald-400/25 hover:bg-white/8 hover:text-white"
                    }`}
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    type="button"
                  >
                    <item.icon className="size-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          {menuOpen ? (
            <button
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px]"
              onClick={() => setMenuOpen(false)}
              type="button"
            />
          ) : null}
        </header>

        <aside className="fixed inset-y-0 left-0 z-40 hidden w-36 flex-col border-r border-white/8 bg-black/36 backdrop-blur-xl lg:flex">
          <button
            className="flex h-36 items-center justify-center border-b border-white/8 bg-gradient-to-b from-emerald-300 via-cyan-200 to-white bg-clip-text text-4xl font-black tracking-[0.25em] text-transparent"
            onClick={() => scrollToSection("home")}
            type="button"
          >
            L
          </button>
          <nav className="flex flex-1 flex-col items-center justify-center gap-4 border-y border-white/8">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  className={`group flex w-full flex-col items-center gap-2 px-4 py-3 transition-all duration-500 ease-out hover:bg-white/8 hover:text-white ${
                    activeSection === item.id ? "bg-white/8 text-white" : "text-white/70"
                  }`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  type="button"
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-2xl border bg-white/5 ${
                      activeSection === item.id
                        ? "border-emerald-400/35 text-emerald-300"
                        : "border-white/10"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={`text-[0.68rem] uppercase tracking-[0.24em] transition ${
                      activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
          <div className="flex h-32 flex-col items-center justify-center gap-2 border-t border-white/8 text-center">
           <a
  href="https://github.com/dipu97"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:opacity-80 transition"
>
  <Github className="w-6 h-6 text-white" />
  
</a>
          </div>
        </aside>

        <div className="fixed right-4 top-20 z-40 flex flex-col gap-4 lg:right-8 lg:top-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                aria-label={link.label}
                className="text-white/80 transition-all duration-500 ease-out hover:-translate-y-1 hover:text-emerald-300"
                href={link.href}
                key={link.label}
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>

        <main className="relative z-10 lg:ml-36">
          <section
            className="flex min-h-screen items-center px-6 pb-16 pt-28 sm:px-8 lg:px-16"
            id="home"
          >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-white/60">
                  Software Engineer • Python • Django
                </p>
                <h1 className="max-w-4xl text-5xl font-black leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl xl:text-[6.3rem]">
                  Liton Kumar Biswas
                </h1>
                <div className="mt-5 inline-flex min-h-[3.75rem] items-center rounded-full border border-white/12 bg-slate-950/35 px-5 py-3 text-base text-white/88 shadow-[0_20px_70px_rgba(2,6,23,0.42)] backdrop-blur-xl sm:text-2xl">
                  <span className="mr-2 text-white/88">I am a</span>
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-200 to-white bg-clip-text font-semibold text-transparent transition-all duration-500">
                    {rotatingTitles[titleIndex]}
                  </span>
                </div>
                <p className="mt-8 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                  Software Engineer specializing in Python programming and proficient in
                  building high-performing, secure applications using Django, PostgreSQL,
                  and modern API architecture.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection("work")}>
                    View Resume
                  </Button>
                  <Button size="lg" variant="secondary" onClick={() => scrollToSection("contact")}>
                    Hire Me
                  </Button>
                </div>
              </div>

              <Card className="relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_35%),linear-gradient(160deg,_rgba(255,255,255,0.14),_rgba(255,255,255,0.02))]" />
                <div className="relative">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/35 p-5">
                    <p className="text-sm uppercase tracking-[0.4em] text-white/50">About Me</p>
                    <p className="mt-4 text-sm leading-7 text-white/72">
                      I design and develop reliable backend systems with a strong focus on
                      security, performance, and maintainable software structure. I enjoy
                      turning complex requirements into clean, production-ready solutions.
                    </p>
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div
                        className="rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-5"
                        key={stat.label}
                      >
                        <div className="text-3xl font-bold">{stat.value}</div>
                        <p className="mt-2 text-sm leading-6 text-white/62">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="px-6 py-14 sm:px-8 lg:px-16" id="about">
            <div className="mx-auto max-w-7xl">
              <Card className="p-7 sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative flex size-64 items-center justify-center rounded-full border border-emerald-400/35 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_rgba(15,23,42,0.78)_55%)] shadow-[0_0_0_10px_rgba(16,185,129,0.06)] sm:size-72">
                      <div className="flex size-[88%] items-center justify-center rounded-full border border-white/10 bg-slate-950/55 text-center">
                        <div>
                          <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-emerald-400/25 bg-emerald-400/10">
                            <UserRound className="size-10 text-emerald-300" />
                          </div>
                          <p className="mt-5 text-2xl font-bold tracking-[0.12em] text-white">
                            LKB
                          </p>
                          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
                            Profile Photo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-white/50">About Me</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                      Liton Kumar Biswas
                    </h2>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
                      <MapPin className="size-4" />
                      Mirpur 1, Dhaka, Bangladesh 
                    </div>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-white/72">
                      I am a software engineer focused on Python and Django development,
                      building secure and high-performing applications with clean architecture
                      and maintainable code. I enjoy REST API development, authentication
                      systems, database design, and bringing frontend and backend together
                      into complete user-focused products.
                    </p>

                    <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-slate-950/28 p-5">
                      <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/85">
                        My Strength
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        Building secure applications with clean architecture.
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                        I specialize in Python and Django development, creating robust
                        applications and REST APIs secured with JWT, OAuth, and RBAC. I also
                        work comfortably with PostgreSQL and frontend integration to deliver
                        complete software experiences.
                      </p>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                      {aboutHighlights.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            className="rounded-[1.5rem] border border-white/10 bg-slate-950/28 p-5"
                            key={item.value}
                          >
                            <div className="flex size-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                              <Icon className="size-5" />
                            </div>
                            <p className="mt-4 text-lg font-semibold text-white">{item.value}</p>
                            <p className="mt-2 text-sm leading-6 text-white/62">{item.label}</p>
                          </div>
                        );
                      })}
                    </div>

                    <Button
                      asChild
                      className="group mt-8 overflow-hidden border border-emerald-400/45 bg-transparent text-white"
                      size="lg"
                      variant="secondary"
                    >
                      <a className="relative" download href={cvFilePath}>
                        <span className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-full bg-emerald-400/18 transition-transform duration-500 group-hover:scale-x-100" />
                        <span className="flex items-center gap-2">
                          <Download className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5" />
                          Download CV
                        </span>
                      </a>
                    </Button>

                    <div className="mt-10">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-14 bg-emerald-400/80" />
                        <span className="flex size-5 items-center justify-center rounded-full border-2 border-emerald-400">
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                        </span>
                        <span className="h-px w-14 bg-emerald-400/80" />
                      </div>
                      <div className="mt-5 flex items-center gap-3">
                        <NotebookPen className="size-5 text-emerald-300" />
                        <h3 className="text-2xl font-semibold text-white">About My Interest</h3>
                      </div>

                      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                        {interests.map((item) => {
                          const Icon = item.icon;

                          return (
                            <div
                              className="flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4"
                              key={item.label}
                            >
                              <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                                <Icon className="size-5" />
                              </span>
                              <span className="h-10 w-px bg-white/12" />
                              <span className="text-base font-medium text-white/88">{item.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="px-6 py-14 sm:px-8 lg:px-16" id="work">
            <div className="mx-auto max-w-7xl">
              <Card className="p-7 sm:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-white/50">Resume</p>
                    <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                      Backend engineering with security and quality in mind.
                    </h2>
                  </div>
                  <Button asChild size="lg" variant="secondary">
                    <a download href={cvFilePath}>
                      <Download className="size-4" />
                      Download CV
                    </a>
                  </Button>
                </div>
                <div className="mt-10 grid gap-10 lg:grid-cols-2">
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="h-px flex-1 bg-emerald-400/40" />
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
                        Experience
                      </p>
                      <span className="h-px flex-1 bg-emerald-400/40" />
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute bottom-0 left-2 top-0 w-px bg-emerald-400/45" />
                      {experiences.map((item) => (
                        <div className="relative mb-8 last:mb-0" key={`${item.place}-${item.title}`}>
                          <span className="absolute -left-[1.95rem] top-2 size-4 rounded-full border-4 border-emerald-400 bg-[#09111f]" />
                          <div className="rounded-[1.75rem] border border-emerald-400/15 bg-slate-950/30 p-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                              {item.period}
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-1 text-lg font-medium text-white/75">{item.place}</p>
                            <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                              {item.points.map((point) => (
                                <p key={point}>{point}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <span className="h-px flex-1 bg-emerald-400/40" />
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
                        Education
                      </p>
                      <span className="h-px flex-1 bg-emerald-400/40" />
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute bottom-0 left-2 top-0 w-px bg-emerald-400/45" />
                      {educationItems.map((item) => (
                        <div className="relative mb-8 last:mb-0" key={`${item.place}-${item.title}`}>
                          <span className="absolute -left-[1.95rem] top-2 size-4 rounded-full border-4 border-emerald-400 bg-[#09111f]" />
                          <div className="rounded-[1.75rem] border border-emerald-400/15 bg-slate-950/30 p-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">
                              {item.period}
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-1 text-lg font-medium text-white/75">{item.place}</p>
                            <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                              {item.points.map((point) => (
                                <p key={point}>{point}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="px-6 py-14 sm:px-8 lg:px-16" id="skills">
            <div className="mx-auto max-w-7xl">
              <Card className="mb-10 p-7 sm:p-8">
                <div className="mx-auto max-w-max text-center">
                  <div className="flex items-center justify-center gap-5">
                    <span className="flex size-5 items-center justify-center rounded-full border-2 border-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <p className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                      Working Process
                    </p>
                    <span className="flex size-5 items-center justify-center rounded-full border-2 border-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <span className="h-px w-12 bg-emerald-400/80" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="h-px w-12 bg-emerald-400/80" />
                  </div>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {workingSteps.map((step) => (
                    <div
                      className="rounded-[1.75rem] border border-emerald-400/15 bg-slate-950/30 p-5"
                      key={step.number}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
                        {step.number}
                      </p>
                      <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/72">{step.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-7 sm:p-8">
                <div className="mx-auto max-w-max text-center">
                  <p className="text-4xl font-bold tracking-[-0.04em] text-white">Skills</p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-emerald-400/90" />
                    <span className="flex size-4 items-center justify-center rounded-full border-2 border-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="h-px w-10 bg-emerald-400/90" />
                  </div>
                </div>
                <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-8">
                    {skillBars.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-3 flex items-center justify-between gap-4">
                          <span className="text-xl font-semibold text-white">{skill.name}</span>
                          <span className="text-lg font-semibold text-white/90">{skill.value}%</span>
                        </div>
                        <div className="relative h-2 rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full bg-emerald-400"
                            style={{ width: `${skill.value}%` }}
                          />
                          <span
                            className="absolute top-1/2 block size-4 -translate-y-1/2 rounded-full border-[3px] border-emerald-400 bg-[#06080b] shadow-[0_0_0_4px_rgba(16,185,129,0.08)]"
                            style={{ left: `calc(${skill.value}% - 0.5rem)` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {skillCircles.map((skill) => (
                      <div
                        className="flex items-center justify-center rounded-[1.75rem] border border-white/6 bg-black/20 p-4"
                        key={skill.name}
                      >
                        <div
                          className="flex size-36 items-center justify-center rounded-full"
                          style={{
                            background: `conic-gradient(#10b981 ${skill.value}%, rgba(255,255,255,0.05) 0)`,
                          }}
                        >
                          <div className="flex size-[7.4rem] flex-col items-center justify-center rounded-full bg-[#06080b] text-center">
                            <span className="text-2xl font-bold text-white">{skill.value}%</span>
                            <span className="mt-1 text-lg font-semibold text-white/90">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="px-6 pb-20 pt-14 sm:px-8 lg:px-16" id="contact">
            <div className="mx-auto max-w-7xl">
              <Card className="p-7 sm:p-8">
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">Contact</p>
                <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                      Let&apos;s build secure and scalable software together.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                      Passionate about clean architecture, performance improvements, and
                      quality, maintainable software solutions, I am always ready to learn,
                      adapt, and contribute to impactful products.
                    </p>
                    <div className="mt-8 grid gap-4">
                      <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/28 px-5 py-4">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                          <Mail className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Email</p>
                          <a
                            className="mt-1 block text-base font-medium text-white/88 hover:text-emerald-300"
                            href="mailto:litonbiswas1997@gmail.com"
                          >
                            litonbiswas1997@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/28 px-5 py-4">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                          <MapPin className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Location</p>
                          <p className="mt-1 text-base font-medium text-white/88">
                            Mirpur, Dhaka, Bangladesh
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/28 px-5 py-4">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                          <Phone className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Phone</p>
                          <a
                            className="mt-1 block text-base font-medium text-white/88 hover:text-emerald-300"
                            href="tel:+8801771974774"
                          >
                            +8801771974774
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form
                    className="rounded-[2rem] border border-white/10 bg-slate-950/30 p-6 sm:p-7"
                    onSubmit={handleSendMail}
                  >
                    <div className="grid gap-5">
                      <label className="grid gap-2">
                        <span className="text-sm font-medium uppercase tracking-[0.28em] text-white/55">
                          Name
                        </span>
                        <input
                          className="h-12 rounded-2xl border border-white/10 bg-white/6 px-4 text-white outline-none transition focus:border-emerald-400/45"
                          name="name"
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          value={formData.name}
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-medium uppercase tracking-[0.28em] text-white/55">
                          Email
                        </span>
                        <input
                          className="h-12 rounded-2xl border border-white/10 bg-white/6 px-4 text-white outline-none transition focus:border-emerald-400/45"
                          name="email"
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          type="email"
                          value={formData.email}
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-medium uppercase tracking-[0.28em] text-white/55">
                          Message
                        </span>
                        <textarea
                          className="min-h-36 rounded-[1.5rem] border border-white/10 bg-white/6 px-4 py-4 text-white outline-none transition focus:border-emerald-400/45"
                          name="message"
                          onChange={handleInputChange}
                          placeholder="Write your project idea or message..."
                          required
                          value={formData.message}
                        />
                      </label>
                      <Button className="mt-2" size="lg" type="submit">
                        <Mail className="size-4" />
                        Send Mail
                      </Button>
                      {mailNotice ? (
                        <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-200">
                          {mailNotice}
                        </p>
                      ) : null}
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
