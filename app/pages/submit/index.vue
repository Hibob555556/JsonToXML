<script setup lang="ts">
import { computed, ref } from 'vue'

const selectedFile = ref<File | null>(null)
const submitMessage = ref('Choose a TypeScript file to generate documentation.')

const formattedFileSize = computed(() => {
  if (!selectedFile.value) {
    return null
  }

  const sizeInKb = selectedFile.value.size / 1024

  if (sizeInKb < 1024) {
    return `${sizeInKb.toFixed(1)} KB`
  }

  return `${(sizeInKb / 1024).toFixed(2)} MB`
})

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  selectedFile.value = input.files?.[0] ?? null

  if (selectedFile.value) {
    submitMessage.value = `${selectedFile.value.name} is ready for auto-documentation analysis.`
    return
  }

  submitMessage.value = 'Choose a TypeScript file to generate documentation.'
}

function handleSubmit() {
  if (!selectedFile.value) {
    submitMessage.value = 'Select a TypeScript file before submitting.'
    return
  }

  submitMessage.value = `${selectedFile.value.name} is queued for analysis and Markdown generation.`
}
</script>

<template>
  <main class="page-shell pt-8 md:pt-10">
    <section class="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
      <aside class="glass-panel p-6 md:p-7">
        <span class="accent-pill">Submit</span>
        <h1 class="mt-5 max-w-[10ch] text-balance text-[clamp(1.75rem,4.6vw,2.95rem)] leading-[0.96] tracking-[-0.05em] text-text-main">
          Submit a TypeScript file for auto documentation
        </h1>
        <p class="mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-text-muted md:leading-8">
          Upload a `.ts` or `.tsx` file to generate a Markdown summary of your codebase. You will get a cleaner view
          of the classes, methods, functions, and docstrings already living in your source.
        </p>

        <div class="mt-8 grid gap-4">
          <div class="rounded-[1.5rem] border border-accent/25 bg-[radial-gradient(circle_at_top_right,rgba(124,240,207,0.18),transparent_40%),linear-gradient(180deg,rgba(15,26,46,0.92),rgba(9,17,30,0.88))] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.26)]">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent">What You Get</p>
            <p class="mt-3 max-w-[28rem] text-sm leading-7 text-text-muted">
              A generated `.md` file that makes your source easier to review, share with teammates, and turn into
              project documentation.
            </p>
          </div>

          <div class="rounded-[1.5rem] border border-white/8 bg-white/4 p-5">
            <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Best For</p>
            <p class="mt-3 max-w-[28rem] text-sm leading-7 text-text-muted">
              Quick doc audits, onboarding notes, API overviews, and creating a readable reference from existing
              TypeScript comments.
            </p>
            <NuxtLink to="/" class="mt-5 inline-flex items-center font-display text-sm text-text-main hover:text-accent">
              Back Home
            </NuxtLink>
          </div>
        </div>
      </aside>

      <section class="glass-panel overflow-hidden">
        <div class="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,240,207,0.12),transparent_36%),linear-gradient(180deg,rgba(13,24,42,0.99),rgba(8,16,29,0.96))] px-6 py-6 md:px-8">
          <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Ready To Generate</p>
          <p class="mt-3 max-w-2xl text-sm leading-8 text-text-muted">
            Choose your file, review the details, and generate documentation that is easier to read than the raw
            source alone.
          </p>
        </div>

        <div class="p-4 md:p-6">
          <form class="rounded-[1.5rem] border border-white/8 bg-[rgba(255,255,255,0.03)] p-5 md:p-6" @submit.prevent="handleSubmit">
            <label for="submission-file" class="font-display text-sm uppercase tracking-[0.16em] text-text-main">
              Choose a TypeScript file
            </label>

            <input
              id="submission-file"
              type="file"
              class="mt-4 block w-full rounded-2xl border border-dashed border-white/15 bg-[rgba(7,17,31,0.76)] px-4 py-5 text-sm text-text-main file:mr-4 file:rounded-xl file:border-0 file:bg-accent file:px-4 file:py-2 file:font-display file:text-sm file:text-slate-950 hover:border-accent/50"
              @change="handleFileChange"
            >

            <div class="mt-6 rounded-[1.25rem] border border-white/8 bg-[rgba(255,255,255,0.02)] p-4">
              <p class="font-display text-xs uppercase tracking-[0.16em] text-accent-warm">Selected File</p>
              <p class="mt-3 text-base text-text-main">
                {{ selectedFile?.name ?? 'No file selected yet' }}
              </p>
              <p class="mt-2 text-sm leading-7 text-text-muted">
                {{
                  selectedFile
                    ? `Type: ${selectedFile.type || 'Unknown'} | Size: ${formattedFileSize}`
                    : 'Use the file picker above to attach a .ts or .tsx file for analysis.'
                }}
              </p>
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-4">
              <button type="submit" class="button-primary">
                Generate Docs
              </button>
              <span class="text-sm leading-7 text-text-muted">
                {{ submitMessage }}
              </span>
            </div>
          </form>
        </div>
      </section>
    </section>
  </main>
</template>
