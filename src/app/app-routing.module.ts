import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ConfigureComponent } from './configure/configure.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { PlaygroundComponent } from './playground/playground.component';
import { SupportComponent } from './support/support.component';


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
