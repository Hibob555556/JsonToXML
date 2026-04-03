import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EditorPage from '../../app/pages/editor/index.vue'

describe('editor page', () => {
  const global = {
    stubs: {
      DragonEditor: {
        template: '<div data-test="dragon-editor-stub" />'
      },
      NuxtLink: {
        template: '<a><slot /></a>'
      }
    }
  }

  it('renders the page heading', () => {
    const wrapper = mount(EditorPage, {
      global
    })

    expect(wrapper.text()).toContain('Dragon Editor Workspace')
    expect(wrapper.text()).toContain('A focused writing surface')
  })

  it('shows the editor shell and navigation affordance', () => {
    const wrapper = mount(EditorPage, {
      global
    })

    expect(wrapper.find('[data-test="dragon-editor-stub"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Drafting Surface')
    expect(wrapper.text()).toContain('Back Home')
  })
})
