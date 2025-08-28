import type {Preview} from '@storybook/vue3-vite'

import '../src/assets/css/style.css'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        options: {
            storySort: (a, b) => {
                const aIsDocs = a.type === 'docs'
                const bIsDocs = b.type === 'docs'

                if (aIsDocs !== bIsDocs) return aIsDocs ? -1 : 1

                if (aIsDocs && bIsDocs) {
                    return a.title.localeCompare(b.title, undefined, {numeric: true})
                }

                return a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, {numeric: true})
            }
        }
    }
}

export default preview

