<template>
  <component
      :is="tag" v-bind="attrs" :to="isRouter ? to : undefined" :href="isAnchor ? href : undefined"
      :disabled="isButton ? isDisabled : undefined" :aria-disabled="isDisabled ? 'true' : undefined"
      :class="wrapperClasses" @click="click">
    <!--    <span-->
    <!--        v-if="loading" class="inline-flex shrink-0 items-center justify-center" :class="spinnerClasses"-->
    <!--        aria-hidden="true">-->
    <!--      <span class="inline-block animate-spin rounded-full border-2 border-current border-t-transparent"/>-->
    <!--    </span>-->

    <span
        v-if="$slots.left && !loading" class="inline-flex shrink-0 items-center justify-center">
      <slot name="left"/>
    </span>

    <span class="whitespace-nowrap">
      <slot/>
    </span>

    <span
        v-if="$slots.right && !loading" class="inline-flex shrink-0 items-center justify-center">
      <slot name="right"/>
    </span>
  </component>
</template>

<script setup lang="ts">
import {RouterLink} from 'vue-router'
import {computed} from 'vue'

type Color = 'yellow' | 'black' | 'gray'
type Size = 'regular' | 'large'
type Variant = 'solid' | 'outline' | 'link'
type Radius = 'regular' | 'full'

export interface ButtonProps {
  href?: string | null
  to?: string | Record<string, never> | null

  color?: Color
  size?: Size
  variant?: Variant

  radius?: Radius
  circular?: boolean

  disabled?: boolean
  loading?: boolean

  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  href: null,
  to: null,
  color: 'black',
  size: 'regular',
  variant: 'solid',
  radius: 'full',
  circular: false,
  disabled: false,
  loading: false,
  type: 'button',
})

const isRouter = computed(() => !!props.to)
const isAnchor = computed(() => !!props.href && !props.to)
const isButton = computed(() => !props.href && !props.to)

const isDisabled = computed(() => props.disabled || props.loading)

const tag = computed(() => {
  if (isRouter.value) return RouterLink
  if (isAnchor.value) return 'a'
  return 'button'
})

const attrs = computed(() => {
  const base: Record<string, string | undefined> = {
    role: isButton.value ? undefined : 'button',
    'aria-busy': props.loading ? 'true' : undefined,
  }

  if (isButton.value) {
    base.type = props.type
  } else {
    delete base.type
  }

  return base
})

const solidStyles: Record<Color, string> = {
  yellow: 'bg-yellow-500 text-gray-900 hover:bg-yellow-300 focus:bg-yellow-300 disabled:bg-gray-200 disabled:text-gray-400',
  black: 'bg-gray-900 text-white hover:bg-gray-800 focus:bg-gray-800 disabled:bg-gray-300 disabled:text-white',
  gray: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:bg-gray-300 disabled:bg-gray-200 disabled:text-gray-400',
}

const linkStyles: Record<Color, string> = {
  yellow: '',
  black: 'text-gray-900 hover:bg-gray-200 disabled:bg-gray-200 disabled:text-gray-400',
  gray: '',
}

const outlineStyles: Record<Color, string> = {
  yellow: '',
  black: 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-200 hover:border-gray-400 disabled:bg-white disabled:border-gray-400 disabled:text-gray-300',
  gray: '',
}

const sizeMap: Record<Size, string> = {
  regular: 'px-4 h-11 text-sm font-semibold gap-2',
  large: 'px-5 h-13 text-md font-semibold gap-2.5',
}

const circularSizeMap: Record<Size, string> = {
  regular: 'w-11 h-11',
  large: 'w-13 h-13',
}

const colorClasses = computed(() => {
  if (props.variant === 'link') {
    return linkStyles[props.color]
  }

  if (props.variant === 'outline') {
    return outlineStyles[props.color]
  }

  return solidStyles[props.color]
})

const sizeClasses = computed(() => {
  if (props.circular) {
    return circularSizeMap[props.size]
  }

  return sizeMap[props.size]
})

const radiusClass = computed(() => {
  if (props.radius === 'regular' && !props.circular) {
    return 'rounded-xl'
  }

  return 'rounded-full'
})

const wrapperClasses = computed(() => {
  return [
    'flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed',
    radiusClass.value,
    sizeClasses.value,
    colorClasses.value,
    props.loading ? 'pointer-events-none' : '',
  ].join(' ').replace(/\s+/g, ' ').trim()
})

const click = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
    e.stopPropagation()
  }
}
</script>
