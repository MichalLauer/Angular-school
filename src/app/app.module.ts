import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { VscodeComponent } from './pages/vscode/vscode.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { DataManipulationComponent } from './pages/angular/data-manipulation/data-manipulation.component';
import { NpmComponent } from './pages/npm/npm.component';
import { RoutingComponent } from './pages/angular/routing/routing.component';
import { DeployingComponent } from './pages/angular/deploying/deploying.component';
import { LifehooksComponent } from './pages/angular/lifehooks/lifehooks.component';
import { DecoratorsComponent } from './pages/angular/decorators/decorators.component';
import { DirectivesComponent } from './pages/angular/directives/directives.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './pages/angular-tests/input/input.component';
import { OutputComponent } from './pages/angular-tests/output/output.component';
import { ListenerComponent } from './pages/angular-tests/listener/listener.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    VscodeComponent,
    TypescriptComponent,
    DataManipulationComponent,
    NpmComponent,
    RoutingComponent,
    DeployingComponent,
    LifehooksComponent,
    DecoratorsComponent,
    DirectivesComponent,
    InputComponent,
    OutputComponent,
    ListenerComponent,
    AboutComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
