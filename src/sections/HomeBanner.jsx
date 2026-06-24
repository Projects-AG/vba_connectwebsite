export default function HomeBanner() {
  const bannerSrc = new URL('/Banner.png', import.meta.url).href

  return (
    <section className="relative overflow-hidden mt-[72px]">
      <div className="relative mx-auto max-w-full">
        <div className="relative h-[520px] sm:h-[620px] lg:h-[720px]">
          <img
            src={bannerSrc}
            alt="VBA full banner"
            loading="eager"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
