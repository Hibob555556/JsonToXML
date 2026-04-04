<template>
  <div class="pb-10">
    <NuxtRouteAnnouncer />

    <header class="sticky top-0 z-20 mx-auto mt-0 w-[min(1180px,calc(100vw-2rem))] border-b border-transparent bg-[linear-gradient(180deg,rgba(7,17,31,0.88),rgba(7,17,31,0.55))] py-4 backdrop-blur-[18px]">
      <div class="flex flex-col items-start justify-between gap-4 rounded-b-2xl px-3 md:flex-row md:items-center">
        <NuxtLink to="/" class="inline-flex items-center gap-4">
          <span class="grid h-11 w-11 place-items-center rounded-2xl border border-accent/40 bg-[linear-gradient(135deg,rgba(124,240,207,0.18),rgba(255,210,121,0.14))] font-display text-sm font-bold tracking-[0.08em] text-text-main">
            TA
          </span>

          <span class="flex flex-col">
            <strong class="font-display text-[0.98rem] tracking-[0.03em] text-text-main">TypescriptAutodoc</strong>
            <span class="text-sm text-text-muted">Submit TypeScript and get Markdown docs back</span>
          </span>
        </NuxtLink>

        <nav class="flex flex-wrap items-center gap-x-5 gap-y-3 px-3 text-[0.96rem] text-[#dfe8fb]">
          <NuxtLink to="/" class="relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,#7cf0cf,transparent)] after:transition hover:after:scale-x-100">
            Home
          </NuxtLink>
          <NuxtLink to="/submit" class="relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-[linear-gradient(90deg,#7cf0cf,transparent)] after:transition hover:after:scale-x-100">
            Submit
          </NuxtLink>
        </nav>
      </div>
    </header>

    <NuxtPage />
  </div>
</template>
