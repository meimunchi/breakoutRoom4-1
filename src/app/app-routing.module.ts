import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseScreenComponent } from './components/course-screen/course-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { TopicScreenComponent } from './components/topic-screen-folder/topic-screen/topic-screen.component';
import { HelpScreenComponent } from './components/help-screen/help-screen.component';
import { AboutScreenComponent } from './components/about-screen/about-screen.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';

//here's where we add our routes
const routes: Routes = [
  {path:'',component:HomeScreenComponent},
  {path:'course/:id',component: CourseScreenComponent},
  {path:'topic/:courseId/:id/:TopicName',component: TopicScreenComponent},
  {path: 'account-settings', component: AccountSettingsComponent},
  {path: 'help', component: HelpScreenComponent},
  {path: 'about', component: AboutScreenComponent},
  {path:'home',component:HomeScreenComponent},
  {path:'**',component:HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
