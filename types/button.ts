import type { TooltipProps } from './tooltip'

export interface IButton {
  tag?: 'button' | 'a' | 'nuxt-link' | string
  type?: 'button' | 'submit' | 'reset' | null
  href?: string
}

export interface IButtonProps extends IButton {
  variant?: 'primary' | 'dark' | 'light'
}

export interface IIconButtonProps extends IButtonProps {
  label: string
  tooltipProps?: TooltipProps
  disableTooltip?: boolean
}

export interface IDualButton {
  tag?: 'button' | 'a' | 'nuxt-link' | string
  type?: 'button' | 'submit' | 'reset' | null
  href?: string
}

export interface IDualButtonProps extends IDualButton {
  variant?: 'primary' | 'secondary'
  direction?: 'right' | 'down'
}

export interface IMultipleButton {
  tag?: 'button' | 'a' | 'nuxt-link' | string
  type?: 'button' | 'submit' | 'reset' | null
  href?: string
}

export interface IMultipleButtonProps extends IMultipleButton {
  variant?: 'primary' | 'secondary'
  direction?:
    | 'left-up-down'
    | 'left-down-up'
    | 'right-up-down'
    | 'right-down-up'
    | 'up-down'
    | 'down-up'
  isActive?: boolean
  isIcons?: boolean
}
