import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/dp-logo.png.asset.json";
import heroImg from "@/assets/forest-hero.jpg";
import { Trees, Leaf, Phone, Mail, MapPin, Droplets, Clock, Award, ShieldCheck, Home as HomeIcon } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "DP Outdoor Services LLC",
  description:
    "Tree trimming, tree removal, stump grinding, landscaping, lawn care, pressure washing, and gutter cleaning in North Alabama.",
  foundingDate: "2025-04",
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
  areaServed: ["Madison County, AL", "Limestone County, AL", "Morgan County, AL", "Marshall County, AL", "Texas"],
  openingHours: "Mo-Sa 08:00-17:00",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DP Outdoor Services LLC | Tree & Lawn Care, Huntsville AL" },
      {
        name: "description",
        content:
          "Tree removal, stump grinding, lawn care, pressure washing & gutter cleaning across Madison, Limestone, Morgan & Marshall counties. 15 years experience. Free quotes.",
      },
      { property: "og:title", content: "DP Outdoor Services LLC | Tree & Lawn Care, Huntsville AL" },
      {
        property: "og:description",
        content:
          "Locally owned outdoor and land services serving North Alabama — tree work, landscaping, pressure washing, and gutter cleaning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Home,
});

const services = [
  { icon: Trees, title: "Tree Services", desc: "Tree trimming, tree removal, and stump grinding — done safely and cleaned up properly." },
  { icon: Leaf, title: "Lawn & Landscape", desc: "Lawn care, landscaping, bush and hedge trimming, plus planting and removal of plants." },
  { icon: Droplets, title: "Pressure Washing", desc: "Driveways, sidewalks, and home siding — washed clean and looking fresh." },
  { icon: HomeIcon, title: "Gutter Cleaning", desc: "Clear leaves and debris so water flows where it should, protecting your home." },
];

const counties = [
  { name: "Madison County", note: "Huntsville, Madison, New Hope, Gurley" },
  { name: "Limestone County", note: "Athens, Ardmore, Elkmont" },
  { name: "Morgan County", note: "Decatur, Hartselle, Priceville" },
  { name: "Marshall County", note: "Guntersville, Albertville, Arab" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="DP Outdoor Services LLC" className="h-12 w-12 object-contain" />
            <span className="hidden text-sm font-semibold tracking-wide text-primary sm:block">
              DP OUTDOOR SERVICES <span className="text-muted-foreground font-normal">LLC</span>
            </span>
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-foreground/80 md:flex">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#areas" className="hover:text-primary">Service Areas</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Pine forest at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/70 via-primary/55 to-background" />
        <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-28 md:py-40">
          <span className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-foreground backdrop-blur">
            Huntsville, Alabama
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-6xl">
            Tree Service &amp; Lawn Care in Huntsville, AL
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-semibold text-primary-foreground/95">
            Outdoor work, done right the first time.
          </p>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
            Locally owned tree, lawn, and property services with 15 years of experience —
            serving Madison, Limestone, Morgan, and Marshall counties in North Alabama.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+12566553696"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:opacity-90"
            >
              Call (256) 655-3696
            </a>
            <a
              href="#contact"
              className="rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">15 years</span> of hands-on experience</p>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Licensed</span> in Alabama & Texas</p>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Mon–Sat</span>, 8am–5pm</p>
          </div>
        </div>
      </section>



      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">What we do</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-muted-foreground">
            From tree work to pressure washing — if it's outdoors, we handle it.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-border bg-card p-6 transition hover:border-accent hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">About</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">Built on hard work and local roots.</h2>
            <p className="mt-5 text-muted-foreground">
              DP Outdoor Services LLC is owned and operated by Derrell Pattton Jr. out of
              Huntsville, Alabama. The company was founded in April 2025, backed by 15 years
              of hands-on experience in tree work and outdoor property care.
            </p>
            <p className="mt-4 text-muted-foreground">
              We take pride in honest work, dependable service, and treating every property
              like our own — from a single overgrown hedge to a full tree removal.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Experience</dt>
                <dd className="mt-1 text-2xl font-bold text-primary">15 yrs</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Founded</dt>
                <dd className="mt-1 text-2xl font-bold text-primary">2025</dd>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Counties</dt>
                <dd className="mt-1 text-2xl font-bold text-primary">4 + TX</dd>
              </div>
            </dl>

          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl border border-border bg-card p-10 shadow-sm">
              <img src={logoAsset.url} alt="DP Outdoor Services LLC logo" className="h-64 w-64 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get in touch</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Request a quote</h2>
          <p className="mt-3 text-muted-foreground">
            Reach out about your property and we'll get back to you with a free estimate.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-semibold">Location</p>
            <p className="mt-1 text-sm text-muted-foreground">
              3717 Gardenside Drive NW<br />Huntsville, AL 35810
            </p>
          </div>
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
            <Clock className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-semibold">Business Hours</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Monday – Saturday<br />8:00 AM – 5:00 PM<br />
              <span className="text-xs">Closed Sunday</span>
            </p>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section id="areas" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Where we work</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight">Service areas</h2>
            <p className="mt-3 text-muted-foreground">
              We serve all of Madison, Limestone, Morgan, and Marshall counties in North Alabama —
              and we're also licensed to work in the state of Texas.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {counties.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-card p-6">
                <MapPin className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-accent/40 bg-card p-5 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Also licensed in Texas.</span>{" "}
            Working on a property out of state? Give us a call — we're licensed to serve Texas as well.
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-10 w-10 object-contain" />
            <div>
              <p className="text-sm font-semibold">DP Outdoor Services LLC</p>
              <p className="text-xs text-primary-foreground/70">Founded 2025 · Huntsville, AL · Mon–Sat 8am–5pm</p>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <a href="tel:+12566553696" className="block text-sm font-semibold hover:underline">(256) 655-3696</a>
            <a href="mailto:dpoutdoorservicesllc@gmail.com" className="block text-xs text-primary-foreground/80 hover:underline">dpoutdoorservicesllc@gmail.com</a>
            <p className="mt-1 text-xs text-primary-foreground/70">
              © {new Date().getFullYear()} DP Outdoor Services LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
