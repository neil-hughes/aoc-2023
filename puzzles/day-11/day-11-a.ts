import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day11a(dataPath?: string) {
  const data = await readData(dataPath);
  return 0;
}

const answer = await day11a();
console.log(chalk.bgGreen('Answer:'), chalk.green(answer));
