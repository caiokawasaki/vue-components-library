import type {App} from 'vue'
import './assets/css/style.css'

import {Button} from './components/Button'

export {Button}

const components = {
    Button,
}

const install = (app: App) => {
    Object.entries(components).forEach(([name, component]) => {
        app.component(name, component)
    })
}

export default {install}

export * from './components'
