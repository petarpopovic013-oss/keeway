import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; description: string; summary?: ReactNode };

export default function InnerPageHero({ eyebrow, title, description, summary }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] px-4 py-16 text-white md:px-6 md:py-24 lg:px-12 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-36 h-[480px] w-[480px] rounded-full border-[88px] border-white/[0.035] md:h-[700px] md:w-[700px] md:border-[125px]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent_20%,rgba(245,67,8,0.12)_100%)]" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-7 h-1.5 w-24 -skew-x-[45deg] bg-keeway-gradient md:w-32" />
        <p className="mb-4 font-saira text-xs font-bold uppercase tracking-[0.24em] text-keeway-orange-light">{eyebrow}</p>
        <h1 className="max-w-5xl break-words font-zuume text-[46px] font-bold italic leading-[0.88] tracking-[0.01em] text-white sm:text-6xl md:text-8xl lg:text-[104px]">{title}</h1>
        <div className="mt-9 flex max-w-5xl flex-col gap-8 border-t border-white/15 pt-7 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl font-saira text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
          {summary && <div className="shrink-0 not-italic">{summary}</div>}
        </div>
      </div>
    </section>
  );
}
