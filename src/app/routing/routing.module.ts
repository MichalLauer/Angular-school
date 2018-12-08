import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from '../test1/test1.component';
import { Test2Component } from '../test2/test2.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/0/0'},
  {path: '0', children: [
    {path: '0', component: Test1Component},
    {path: '1', component: Test2Component},
  ]},
];

@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }