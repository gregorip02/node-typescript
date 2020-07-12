import chalk from 'chalk'

const log: Function = console.log

// Informative logs
export const info: Function = (text: string) => log(
  chalk.blue(`[App] ${text}`)
)

// Error logs
export const error: Function = (text: string) => log(
  chalk.red(`[App] ${text}`)
)

// Warning logs
export const warning: Function = (text: string) => log(
  chalk.yellow(`[App] ${text}`)
)

export default {
  info, error, warning
}
