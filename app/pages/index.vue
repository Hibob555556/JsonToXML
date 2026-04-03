<template>
  <main class="page-shell pt-8 md:pt-10">
    <section class="glass-panel bg-hero-panel px-6 py-8 md:px-8 md:py-10">
      <p class="mb-4 font-display text-xs uppercase tracking-[0.16em] text-accent">TypescriptAutodoc</p>
      <h1 class="text-glow max-w-4xl text-[clamp(2.3rem,6vw,4.3rem)] leading-[0.96] tracking-[-0.05em] text-text-main">
        Write, shape, and review structured content in one focused workspace.
      </h1>
      <p class="mt-5 max-w-3xl text-[0.98rem] leading-8 text-text-muted">
        This app now follows the same dark, glassy design language as your reference CSS: layered backgrounds,
        cool accent glows, warm secondary highlights, and rounded panels that feel more like a product surface than
        a starter template.
      </p>

      <div class="mt-8 flex flex-wrap gap-4">
        <NuxtLink to="/editor" class="button-primary">
          Launch Editor
        </NuxtLink>
        <a href="#project-notes" class="button-secondary">
          Learn More
        </a>
      </div>

      <ul class="mt-8 grid gap-4 border-t border-white/8 pt-6 md:grid-cols-3">
        <li class="metric-card">
          <strong class="block font-display text-base text-text-main">Focused drafting</strong>
          <span class="mt-1 block text-sm leading-7 text-text-muted">A clean editor route stays front and center without crowding the interface.</span>
        </li>
        <li class="metric-card">
          <strong class="block font-display text-base text-text-main">Structured growth</strong>
          <span class="mt-1 block text-sm leading-7 text-text-muted">The shell is ready for metadata, export tools, previews, and publish flows.</span>
        </li>
        <li class="metric-card">
          <strong class="block font-display text-base text-text-main">Consistent styling</strong>
          <span class="mt-1 block text-sm leading-7 text-text-muted">Tailwind now expresses the same portfolio-inspired visual system across the app.</span>
        </li>
      </ul>
    </section>

    <section id="project-notes" class="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <article class="glass-panel p-6 md:p-7">
        <span class="accent-pill">Overview</span>
        <h2 class="mt-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.04] tracking-[-0.04em] text-text-main">
          The homepage now feels like the front door, not a placeholder.
        </h2>
        <p class="mt-4 max-w-3xl text-sm leading-8 text-text-muted">
          The structure mirrors your provided CSS more closely: a strong hero panel, glass cards, muted supporting
          text, and accent treatments that make the content feel deliberate instead of generic.
        </p>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <article class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Author</p>
            <h3 class="mt-3 text-xl text-text-main">Draft Faster</h3>
            <p class="mt-3 text-sm leading-7">The interface keeps calls to action simple and puts the main workflow in clear reach.</p>
          </article>

          <article class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Structure</p>
            <h3 class="mt-3 text-xl text-text-main">Stay Organized</h3>
            <p class="mt-3 text-sm leading-7">Cards and spacing follow the same rhythm as the reference portfolio layout.</p>
          </article>

          <article class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Extend</p>
            <h3 class="mt-3 text-xl text-text-main">Grow Easily</h3>
            <p class="mt-3 text-sm leading-7">You can add persistence, preview, and export features without reworking the visual system.</p>
          </article>
        </div>
      </article>

      <aside class="glass-panel p-6 md:p-7">
        <span class="accent-pill">Project Notes</span>
        <ul class="mt-5 space-y-4 text-sm leading-8 text-text-muted">
          <li>Nuxt serves this page from <span class="font-mono text-accent">/</span>.</li>
          <li>The editor route stays available at <span class="font-mono text-accent">/editor</span>.</li>
          <li>The shared shell now carries the same dark portfolio-style atmosphere between both routes.</li>
          <li>Tailwind utilities are driving the layout and component styling rather than standalone bespoke page CSS.</li>
        </ul>
      </aside>
    </section>
  </main>
</template>
