import type {Meta, StoryObj} from '@storybook/vue3-vite'
import {HeartIcon} from 'lucide-vue-next'

import Button from './Button.vue'
import {RouterLink} from 'vue-router'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        href: {
            value: {
                type: 'string'
            }
        },
        color: {
            control: {
                type: 'select'
            },
            options: ['yellow', 'black', 'gray']
        },
        size: {
            control: {
                type: 'select'
            },
            options: ['regular', 'large']
        },
        variant: {
            control: {
                type: 'select'
            },
            options: ['solid', 'outline', 'link']
        },
        radius: {
            control: {
                type: 'select'
            },
            options: ['regular', 'full']
        },
        circular: {
            value: {
                type: 'boolean'
            }
        },
        disabled: {
            value: {
                type: 'boolean'
            }
        },
        loading: {
            value: {
                type: 'boolean'
            }
        },
        type: {
            control: {
                type: 'select'
            },
            options: ['button', 'submit', 'reset']
        }
    },
    args: {
        href: null,
        to: null,
        color: 'yellow',
        size: 'regular',
        variant: 'solid',
        radius: 'full',
        circular: false,
        disabled: false,
        loading: false,
        type: 'button'
    }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRounded: Story = {
    render: (args) => ({
        components: {
            Button,
            HeartIcon,
            RouterLink
        },
        setup() {
            return {args}
        },
        template:
            '<Button v-bind="args">' +
            'Button' +
            '<template #right>' +
            '<heart-icon :size="20" :stroke-width="2.4"/>' +
            '</template>' +
            '</Button>'
    })
}

export const DefaultSquare: Story = {
    args: {
        radius: 'regular'
    },
    render: (args) => ({
        components: {
            Button,
            HeartIcon,
            RouterLink
        },
        setup() {
            return {args}
        },
        template:
            '<Button v-bind="args">' +
            'Button' +
            '<template #right>' +
            '<heart-icon :size="20" :stroke-width="2.4"/>' +
            '</template>' +
            '</Button>'
    })
}

export const Circular: Story = {
    args: {
        circular: true
    },
    render: (args) => ({
        components: {
            Button,
            HeartIcon,
            RouterLink
        },
        setup() {
            return {args}
        },
        template:
            "<Button v-bind=\"args\">" +
            "<heart-icon :size=\"20\" :stroke-width=\"2.4\"/>" +
            "</Button>"
    })
}