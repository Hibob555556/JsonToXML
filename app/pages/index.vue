<script setup lang="ts">
import heroImage from '~/assets/images/hero.png'
</script>

<template>
  <main class="page-shell pt-8 md:pt-10">
    <section class="glass-panel bg-hero-panel px-6 py-8 md:px-8 md:py-10">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
        <div>
          <p class="mb-4 font-display text-xs uppercase tracking-[0.16em] text-accent">TypescriptAutodoc</p>
          <h1 class="text-glow max-w-4xl text-[clamp(2.3rem,6vw,4.3rem)] leading-[0.96] tracking-[-0.05em] text-text-main">
            Turn messy TypeScript into polished documentation in minutes.
          </h1>
          <p class="mt-5 max-w-3xl text-[0.98rem] leading-8 text-text-muted">
            Upload your TypeScript file and get back a clean Markdown deliverable that surfaces classes, methods,
            functions, and the docstrings that matter. Less manual cleanup, faster handoff, better docs.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink to="/submit" class="button-primary">
              Generate My Docs
            </NuxtLink>
            <a href="#project-notes" class="button-secondary">
              See Why It Helps
            </a>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-xl">
          <div class="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_center,rgba(124,240,207,0.22),transparent_68%)] blur-2xl" aria-hidden="true" />
          <img
            :src="heroImage"
            alt="Preview artwork for the TypescriptAutodoc documentation generator"
            class="relative z-10 w-full rounded-[1.75rem] border border-white/10 bg-[#09111f]/70 object-cover shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
          >
        </div>
      </div>

      <ul class="mt-8 grid gap-4 border-t border-white/8 pt-6 md:grid-cols-3">
        <li class="metric-card">
          <strong class="block font-display text-base text-text-main">Skip The Busywork</strong>
          <span class="mt-1 block text-sm leading-7 text-text-muted">Stop hand-assembling documentation from source files and let the pipeline do the heavy lifting.</span>
        </li>
        <li class="metric-card">
          <strong class="block font-display text-base text-text-main">Capture What Matters</strong>
          <span class="mt-1 block text-sm leading-7 text-text-muted">Surface classes, methods, functions, and existing docstrings in one organized output your team can actually use.</span>
        </li>
        <li class="metric-card">
          <strong class="block font-display text-base text-text-main">Ship Better Docs</strong>
          <span class="mt-1 block text-sm leading-7 text-text-muted">Get a Markdown file that is ready to review, share, commit, or publish without another formatting pass.</span>
        </li>
      </ul>
    </section>

    <section id="project-notes" class="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <article class="glass-panel p-6 md:p-7">
        <span class="accent-pill">Why It Helps</span>
        <h2 class="mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] tracking-[-0.04em] text-text-main">
          Turn existing code comments into documentation people can actually use.
        </h2>
        <p class="mt-4 max-w-3xl text-sm leading-8 text-text-muted">
          Instead of digging through source files line by line, you can generate one readable Markdown artifact that
          pulls classes, methods, functions, and their docstrings into a format that is easier to review and share.
        </p>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <article class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Faster Reviews</p>
            <p class="mt-3 text-sm leading-7">Give teammates a high-level reference without asking them to scan raw TypeScript first.</p>
          </article>

          <article class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Clearer Handoffs</p>
            <p class="mt-3 text-sm leading-7">Share a Markdown summary during onboarding, client delivery, or internal documentation work.</p>
          </article>

          <article class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Better Coverage</p>
            <p class="mt-3 text-sm leading-7">Spot which classes and functions already have usable docstrings and where the gaps still are.</p>
          </article>
        </div>
      </article>

      <aside class="glass-panel p-6 md:p-7">
        <span class="accent-pill">Output Preview</span>
        <ul class="mt-5 space-y-4 text-sm leading-8 text-text-muted">
          <li>A generated <span class="font-mono text-accent">.md</span> file you can review or publish.</li>
          <li>Sections for classes, methods, functions, and related documented symbols.</li>
          <li>Docstrings collected into one place instead of scattered across the codebase.</li>
          <li>A cleaner starting point for README updates, internal docs, and knowledge sharing.</li>
        </ul>
      </aside>
    </section>
  </main>
</template>
