import type { TooltipProps } from './tooltip'

export interface IButton {
  tag?: 'button' | 'a' | 'nuxt-link' | string
  type?: 'button' | 'submit' | 'reset' | null
  href?: string
}

export interface IButtonProps extends IButton {
  variant?: 'primary' | 'secondary'
}

export interface IIconButtonProps extends IButtonProps {
  label: string
  tooltipProps?: TooltipProps
  disableTooltip?: boolean
}
