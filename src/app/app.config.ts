import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {tokenGetter} from "./helpers/tokenGetter";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          // allowedDomains: ["example.com"],
          // disallowedRoutes: ["http://example.com/examplebadroute/"],
        },
      }),
    ),

  ]
};
