import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/dp-logo.png.asset.json";
import heroImg from "@/assets/forest-hero.jpg";
import { Trees, Axe, Scissors, Phone, Mail, MapPin, Clock, ShieldCheck, Award } from "lucide-react";

const CANONICAL = "https://picture-perfect-foundation.lovable.app/tree-services";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tree Service",
  name: "Tree Service in Huntsville, AL",
  description:
    "Tree trimming, tree removal, and stump grinding in Huntsville and across Madison, Limestone, Morgan, and Marshall counties in North Alabama.",
  provider: {
    "@type": "LocalBusiness",
    name: "DP Outdoor Services LLC",
    telephone: "+1-256-655-3696",
    email: "dpoutdoorservicesllc@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3717 Gardenside Drive NW",
      addressLocality: "Huntsville",
      addressRegion: "AL",
      postalCode: "35810",
      addressCountry: "US",
    },
    openingHours: "Mo-Sa 08:00-17:00",
  },
  areaServed: [
    "Madison County, AL",
    "Limestone County, AL",
    "Morgan County, AL",
    "Marshall County, AL",
  ],
};

export const Route = createFileRoute("/tree-services")({
  head: () => ({
    meta: [
      { title: "Tree Service Huntsville AL | Removal, Trimming & Stump Grinding" },
      {
        name: "description",
        content:
          "Tree service in Huntsville, AL — tree removal, trimming, and stump grinding by DP Outdoor Services LLC. 15 years experience, Mon–Sat 8am–5pm. Free quotes.",
      },
      { property: "og:title", content: "Tree Service Huntsville AL | DP Outdoor Services LLC" },
      {
        property: "og:description",
        content:
          "Tree removal, trimming, and stump grinding across Madison, Limestone, Morgan, and Marshall counties in North Alabama.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: TreeServices,
});

const jobs = [
  {
    icon: Axe,
    title: "Tree Removal",
    desc: "Dead, storm-damaged, or crowding a structure? We take the tree down in controlled sections when space is tight, and clean the site up when we're done.",
  },
  {
    icon: Scissors,
    title: "Tree Trimming",
    desc: "Clearing limbs off roofs, driveways, and power lines, thinning heavy canopies, and shaping trees so they grow well and stay safe.",
  },
  {
    icon: Trees,
    title: "Stump Grinding",
    desc: "Grinding leftover stumps below grade so you can mow over the spot, replant, or lay sod without a trip hazard in the yard.",
  },
];

const steps = [
  { n: "1", t: "Call or send a message", d: "Tell us where the tree is and what's going on with it. Photos help." },
  { n: "2", t: "Free on-site quote", d: "We look at access, drop zones, and what's near the tree, then price the job." },
  { n: "3", t: "The work day", d: "We take the tree down or trim it back, haul off the debris, and rake up." },
];

function TreeServices() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="DP Outdoor Services LLC" className="h-12 w-12 object-contain" />
            <span className="hidden text-sm font-semibold tracking-wide text-primary sm:block">
              DP OUTDOOR SERVICES <span className="font-normal text-muted-foreground">LLC</span>
            </span>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-foreground/80 md:flex">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/" hash="services" className="hover:text-primary">Services</Link>
            <Link to="/" hash="areas" className="hover:text-primary">Service Areas</Link>
          </nav>
          <a
            href="tel:+12566553696"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            (256) 655-3696
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Tall pines in a North Alabama forest"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/75 via-primary/60 to-background" />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-foreground backdrop-blur">
            Huntsville &amp; North Alabama
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl">
            Tree Service in Huntsville, AL
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/90">
            Tree removal, trimming, and stump grinding from a locally owned crew with 15 years
            of hands-on experience. Free quotes, honest pricing, and a clean site when we leave.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+12566553696"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:opacity-90"
            >
              Call (256) 655-3696
            </a>
            <a
              href="#quote"
              className="rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">15 years</span> of tree work experience</p>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Licensed</span> in Alabama &amp; Texas</p>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Mon–Sat</span>, 8am–5pm</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">What we handle</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {jobs.map((j) => (
            <div key={j.title} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <j.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{j.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{j.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">How a tree job works</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-6">
                <span className="text-3xl font-bold text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            We work throughout Madison, Limestone, Morgan, and Marshall counties — Huntsville,
            Madison, Athens, Decatur, Hartselle, Guntersville, Arab, and the towns in between.
          </p>
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Get a free tree quote</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Call or email with your address and a quick description of the tree, and we'll set up a
          time to come look at it.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <Phone className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-semibold">Phone</p>
            <a href="tel:+12566553696" className="mt-1 block text-sm text-primary hover:underline">(256) 655-3696</a>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Mail className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-semibold">Email</p>
            <a href="mailto:dpoutdoorservicesllc@gmail.com" className="mt-1 block break-all text-sm text-primary hover:underline">dpoutdoorservicesllc@gmail.com</a>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-semibold">Based in</p>
            <p className="mt-1 text-sm text-muted-foreground">3717 Gardenside Drive NW<br />Huntsville, AL 35810</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Need lawn care, pressure washing, or gutter cleaning too?{" "}
          <Link to="/" className="font-semibold text-primary hover:underline">See all our services</Link>.
        </p>
      </section>

      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-10 w-10 object-contain" />
            <div>
              <p className="text-sm font-semibold">DP Outdoor Services LLC</p>
              <p className="text-xs text-primary-foreground/70">Founded 2025 · Huntsville, AL · Mon–Sat 8am–5pm</p>
            </div>
          </div>
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} DP Outdoor Services LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
