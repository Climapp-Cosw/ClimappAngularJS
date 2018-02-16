import { InjectionToken } from '@angular/core';
import { IConfig } from './config.interface';

export let INITIAL_CONFIG = new InjectionToken<IConfig>('app.config');