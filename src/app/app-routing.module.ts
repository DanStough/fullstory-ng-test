import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ConfigureComponent } from './components/configure/configure.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { SupportComponent } from './components/support/support.component';


const routes: Routes = [
  {path: '', redirectTo: '/instructions', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'configure', component: ConfigureComponent},
  {path: 'instructions', component: InstructionsComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
