<script setup lang="ts">
import { ref } from 'vue'

type EditorTextBlock = {
  type: 'text'
  classList: string[]
  depth?: number
  textContent: string
}

const contentData = ref<EditorTextBlock[]>([
  {
    type: 'text',
    classList: [],
    textContent: 'Start typing here...'
  }
])
</script>

<template>
  <main class="page-shell pt-8 md:pt-10">
    <section class="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
      <aside class="glass-panel p-6 md:p-7">
        <span class="accent-pill">Editor</span>
        <h1 class="mt-5 text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] tracking-[-0.05em] text-text-main">
          Dragon Editor Workspace
        </h1>
        <p class="mt-4 text-sm leading-8 text-text-muted">
          A focused writing surface with room to grow into a richer documentation workflow.
        </p>

        <div class="mt-6 grid gap-4">
          <div class="rounded-[1.5rem] border border-accent/25 bg-[radial-gradient(circle_at_top_right,rgba(124,240,207,0.18),transparent_40%),linear-gradient(180deg,rgba(15,26,46,0.92),rgba(9,17,30,0.88))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.26)]">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent">Drafting Surface</p>
            <p class="mt-3 text-sm leading-7 text-text-muted">
              Start with a seeded text block, then use the toolbar to add structure and formatting.
            </p>
          </div>

          <div class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Navigation</p>
            <p class="mt-3 text-sm leading-7 text-text-muted">
              Move between the editor and the new homepage without losing the shared app shell.
            </p>
            <NuxtLink to="/" class="mt-5 inline-flex items-center font-display text-sm text-text-main hover:text-accent">
              Back Home
            </NuxtLink>
          </div>
        </div>
      </aside>

      <section class="glass-panel overflow-hidden">
        <div class="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,240,207,0.12),transparent_36%),linear-gradient(180deg,rgba(13,24,42,0.99),rgba(8,16,29,0.96))] px-6 py-6 md:px-8">
          <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Workspace</p>
          <p class="mt-3 max-w-2xl text-sm leading-8 text-text-muted">
            The editor now sits inside the same dark glass treatment as the reference site, so it feels like part
            of one designed product instead of a separate demo screen.
          </p>
        </div>

        <div class="p-4 md:p-6">
          <div class="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-2 md:p-3">
            <DragonEditor v-model="contentData" />
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
