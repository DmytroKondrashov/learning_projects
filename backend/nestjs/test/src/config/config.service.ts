import { Inject, Injectable, Scope } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { CONFIG_OPTIONS } from './constants';
import { ConfigOptions, EnvConfig } from '../interfaces';

// Here we define service injection scope. Scope can be either:
// - Scope.REQUEST: A new instance of the service is created for each request.
// - Scope.TRANSIENT: A new instance of the service is created for each injection.
// - Scope.DEFAULT: A single instance of the service is created and shared across the application.
@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
