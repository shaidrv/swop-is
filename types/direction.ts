export interface Direction {
  ids: number[]
  name: string
  logo: LogoSet
  currency: string[]
  filter: string[]
}

export interface LogoSet {
  withBackground: string
  white: string
  simple: string
}
