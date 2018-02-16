import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { IConfig } from './config.interface';
import { INITIAL_CONFIG } from './initial-config';

@Injectable()
export class AppConfiguration {
  private config: IConfig;

  constructor( @Inject(INITIAL_CONFIG) initialConfig: IConfig) {
    this.config = initialConfig;
  }

  get apiURL(): String {
    return this.config && this.config.apiURL;
  }
}