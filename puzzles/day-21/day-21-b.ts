import { readData } from '../../shared.ts';
import chalk from 'chalk';

export async function day21b(dataPath?: string) {
  const data = await readData(dataPath);
  return 0;
}

const answer = await day21b();
console.log(chalk.bgGreen('Answer:'), chalk.green(answer));
