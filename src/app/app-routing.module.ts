import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { VscodeComponent } from './pages/vscode/vscode.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { DataManipulationComponent } from './pages/angular/data-manipulation/data-manipulation.component';
import { NpmComponent } from './pages/npm/npm.component';
import { DecoratorsComponent } from './pages/angular/decorators/decorators.component';
import { LifehooksComponent } from './pages/angular/lifehooks/lifehooks.component';
import { RoutingComponent } from './pages/angular/routing/routing.component';
import { DeployingComponent } from './pages/angular/deploying/deploying.component';
import { DirectivesComponent } from './pages/angular/directives/directives.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './error404/error404.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/0'},
  {path: '0', component: IntroductionComponent},
  {path: '1', component: NpmComponent},
  {path: '2', component: VscodeComponent},
  {path: '3', component: TypescriptComponent},
  {path: '4', children: [
    {path: '0', component: DataManipulationComponent},
    {path: '1', component: DirectivesComponent},
    {path: '2', component: DecoratorsComponent},
    {path: '3', component: LifehooksComponent},
    {path: '4', component: RoutingComponent},
    {path: '5', component: DeployingComponent},
  ]},
  {path: '5', component: AboutComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
