import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'modules',
    loadChildren: () =>
      import('./mods/mods.module').then((module) => module.ModsModule),
  },
  {
    // We are saying only when user is at the elements path we want to load up the module.
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then(
        (module) => module.ElementsModule
      ),
  },
  // We are going to load up the collection's module in the browser of our user when they
  // actually go up to the collections route.
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (module) => module.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then((module) => module.ViewsModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
