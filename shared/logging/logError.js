import chalk from "chalk";
/** 
 * Standardized way of logging errors
 * @param {String} type - Type of error
 * @param {String} file - File name
 * @param {String} error - Error message.
 */
export default function logError(type, file, error) { 
  console.log(chalk.red(`${type}: ${chalk.bold.underline(file)}: \n${error}`))  
}