import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
        light ? "text-stone" : "text-terracotta"
      }`}
    >
      {children}
    </p>
  );
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      aria-label="Alicia Viñolas Curated Events"
      className={`leading-none ${light ? "text-ivory" : "text-charcoal"}`}
    >
      <span className="block font-serif text-[25px] tracking-[0.16em]">
        {siteContent.brand.name}
      </span>
      <span className="mt-1 block text-[10px] font-semibold tracking-[0.36em]">
        {siteContent.brand.descriptor}
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <section id="inicio" className="relative min-h-screen overflow-hidden">
        <img
          src={siteContent.hero.image.src}
          alt={siteContent.hero.image.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/20 to-charcoal/5" />

        <header className="relative z-10 mx-auto flex max-w-[1480px] items-center justify-between gap-6 px-5 py-6 sm:px-8 lg:px-12">
          <BrandMark light />
          <nav className="hidden items-center gap-8 text-[13px] font-medium text-ivory/90 md:flex">
            {siteContent.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="hidden rounded-full bg-terracotta px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#a75f45] sm:inline-flex"
          >
            Cuéntanos tu evento
          </a>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-112px)] max-w-[1480px] items-end px-5 pb-10 sm:px-8 lg:px-12 lg:pb-16">
          <div className="max-w-[720px] bg-ivory px-6 py-7 sm:px-10 sm:py-9 lg:ml-[7vw] lg:px-12 lg:py-11">
            <Eyebrow>{siteContent.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 font-serif text-[42px] leading-[0.97] tracking-[-0.01em] text-charcoal sm:text-[68px] lg:text-[82px]">
              {siteContent.hero.title}
            </h1>
            <p className="mt-6 max-w-[600px] text-base leading-8 text-charcoal/80 sm:text-lg">
              {siteContent.hero.text}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-terracotta px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#a75f45]"
              >
                {siteContent.hero.primaryCta}
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#enfoque"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/20 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal transition hover:border-charcoal/50"
              >
                {siteContent.hero.secondaryCta}
              </a>
            </div>
            <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.18em] text-sage">
              {siteContent.hero.microtext}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.78fr] lg:px-12 lg:py-28">
        <h2 className="font-serif text-[38px] leading-[1.02] text-charcoal sm:text-[54px]">
          {siteContent.trust.title}
        </h2>
        <div>
          <p className="text-lg leading-8 text-charcoal/70">{siteContent.trust.text}</p>
          <div className="mt-10 grid gap-4 border-y border-charcoal/15 py-6 sm:grid-cols-3 lg:grid-cols-1">
            {siteContent.trust.concepts.map((concept) => (
              <p key={concept} className="font-serif text-2xl text-sage">
                {concept}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-stone/70 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[780px]">
            <Eyebrow>{siteContent.services.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-serif text-[42px] leading-[1.02] sm:text-[64px]">
              {siteContent.services.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {siteContent.services.items.map((service) => (
              <article key={service.title} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-sage/20">
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <h3 className="mt-7 font-serif text-[32px] leading-tight">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-charcoal/70">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enfoque" className="mx-auto grid max-w-[1320px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1fr] lg:px-12 lg:py-32">
        <div className="grid grid-cols-6 grid-rows-[160px_120px_170px_120px] gap-4 sm:grid-rows-[210px_150px_220px_150px]">
          {siteContent.curated.images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={[
                "h-full w-full object-cover",
                index === 0 ? "col-span-4 row-span-2" : "",
                index === 1 ? "col-span-2 row-span-2 mt-10" : "",
                index === 2 ? "col-span-3 row-span-2" : "",
                index === 3 ? "col-span-3 row-span-2 -mt-8" : "",
              ].join(" ")}
            />
          ))}
        </div>
        <div className="flex items-center">
          <div className="max-w-[620px] lg:pl-10">
            <Eyebrow>{siteContent.curated.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-[44px] leading-[0.98] sm:text-[70px]">
              {siteContent.curated.title}
            </h2>
            <p className="mt-8 text-lg leading-9 text-charcoal/75">{siteContent.curated.text}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <Eyebrow>{siteContent.method.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-serif text-[42px] leading-[1.02] sm:text-[62px]">
                {siteContent.method.title}
              </h2>
            </div>
            <div className="grid gap-0">
              {siteContent.method.steps.map((step) => (
                <article
                  key={step.number}
                  className="grid gap-5 border-t border-charcoal/15 py-7 sm:grid-cols-[80px_1fr]"
                >
                  <span className="font-serif text-3xl text-terracotta">{step.number}</span>
                  <div>
                    <h3 className="font-serif text-3xl">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-charcoal/70">{step.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-alicia" className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.76fr_1fr] lg:px-12 lg:py-32">
        <div className="relative">
          <img
            src={siteContent.about.image.src}
            alt={siteContent.about.image.alt}
            className="aspect-[4/5] h-full max-h-[680px] w-full object-cover"
          />
        </div>
        <div className="flex items-center">
          <div className="max-w-[650px]">
            <Eyebrow>{siteContent.about.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-[44px] leading-[1.02] sm:text-[68px]">
              {siteContent.about.title}
            </h2>
            <p className="mt-8 text-lg leading-9 text-charcoal/75">{siteContent.about.text}</p>
            <p className="mt-6 text-lg leading-9 text-charcoal/75">
              {siteContent.about.secondaryText}
            </p>
            <a
              href="#contacto"
              className="mt-9 inline-flex items-center gap-3 border-b border-terracotta pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal"
            >
              {siteContent.about.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-[760px]">
            <Eyebrow>{siteContent.responsibility.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-[42px] leading-[1.02] sm:text-[64px]">
              {siteContent.responsibility.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/75">
              {siteContent.responsibility.text}
            </p>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {siteContent.responsibility.principles.map((principle) => (
              <article key={principle.title} className="border-t border-charcoal/20 pt-6">
                <h3 className="font-serif text-3xl">{principle.title}</h3>
                <p className="mt-4 text-base leading-7 text-charcoal/70">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-sage px-5 py-20 text-ivory sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <h2 className="font-serif text-[44px] leading-[1.02] sm:text-[68px]">
              {siteContent.contact.title}
            </h2>
            <p className="mt-6 max-w-[520px] text-lg leading-8 text-ivory/80">
              {siteContent.contact.text}
            </p>
            <div className="mt-10 border-t border-ivory/20 pt-6 text-sm leading-7 text-ivory/70">
              <p>{siteContent.contact.editableArea}</p>
              <p>{siteContent.contact.editableEmail}</p>
            </div>
          </div>
          <form className="grid gap-4" action="#" aria-label="Formulario de contacto">
            <div className="grid gap-4 sm:grid-cols-2">
              {siteContent.contact.fields.map((field) => (
                <label key={field.name} className="grid gap-2 text-sm text-ivory/75">
                  {field.label}
                  <input
                    name={field.name}
                    type={field.type}
                    className="h-12 border border-ivory/25 bg-ivory/10 px-4 text-base text-white outline-none transition placeholder:text-ivory/40 focus:border-ivory/70"
                  />
                </label>
              ))}
            </div>
            <label className="grid gap-2 text-sm text-ivory/75">
              {siteContent.contact.textarea.label}
              <textarea
                name={siteContent.contact.textarea.name}
                rows={5}
                className="border border-ivory/25 bg-ivory/10 px-4 py-3 text-base text-white outline-none transition focus:border-ivory/70"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-terracotta px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#a75f45] sm:w-fit"
            >
              {siteContent.contact.submitLabel}
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-charcoal px-5 py-10 text-ivory sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <BrandMark light />
            <p className="mt-5 max-w-[420px] text-sm leading-6 text-ivory/65">
              {siteContent.brand.footerText}
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-ivory/65">
            {siteContent.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ivory">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
