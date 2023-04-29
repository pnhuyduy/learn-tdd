import { VueWrapper, mount } from '@vue/test-utils';
import TodoApp from './TodoApp.vue';

describe('Render a todo', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
        wrapper = mount(TodoApp)
    })
    afterEach(() => {
        wrapper.unmount()
    })

    it('Has header title', () => {
        const header = wrapper.get('h1')
        expect(header.text()).toBe('Todo App')
    })

    it('should complete todo', async () => {
        await wrapper.get('li input[data-id="1"]').setValue(true)

        expect(wrapper.get('[data-id="1"]').classes()).toContain('completed')
    })
})