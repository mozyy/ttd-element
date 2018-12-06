import { isDevEnv } from '../env';

export default class Logger {
  constructor(type = 'log', color = 'red', visible = true) {
    this.type = type;
    this.color = color;
    this.visibleLog = visible;
    return this.log.bind(this);
  }
  log(...msgs) {
    if (isDevEnv && this.visibleLog) {
      console.log(`%c [[${this.type}]]:`, `background:${this.color};color:#fff`, ...msgs);
    }
  }
}

export const logger = new Logger();
