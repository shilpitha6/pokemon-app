import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Generations } from './app/generations/generations';
import { Berries } from './app/berries/berries';
import { Encounters } from './app/encounters/encounters';
import { Moves } from './app/moves/moves';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));
