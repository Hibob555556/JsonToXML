import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SubmitPage from '../../app/pages/submit/index.vue'

describe('submit page', () => {
  const global = {
    stubs: {
      NuxtLink: {
        template: '<a><slot /></a>'
      }
    }
  }

  it('renders the auto-documentation messaging', () => {
    const wrapper = mount(SubmitPage, {
      global
    })

    expect(wrapper.text()).toContain('Submit a TypeScript file for auto documentation')
    expect(wrapper.text()).toContain('Upload a `.ts` or `.tsx` file to generate a Markdown summary of your codebase.')
    expect(wrapper.text()).toContain('What You Get')
    expect(wrapper.text()).toContain('Ready To Generate')
    expect(wrapper.text()).toContain('Generate Docs')
  })

  it('shows the selected-file placeholder before upload', () => {
    const wrapper = mount(SubmitPage, {
      global
    })

    expect(wrapper.text()).toContain('No file selected yet')
    expect(wrapper.text()).toContain('Use the file picker above to attach a .ts or .tsx file for analysis.')
    expect(wrapper.text()).toContain('Choose a TypeScript file to generate documentation.')
  })
})
