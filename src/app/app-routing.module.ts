import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseScreenComponent } from './components/course-screen/course-screen.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { TopicScreenComponent } from './components/topic-screen/topic-screen.component';

//here's where we add our routes
const routes: Routes = [
  {path:'',component:HomeScreenComponent, children: [
    {path:'course/:id',component: CourseScreenComponent, children: [
      {path:'topic/:id/:TopicName',component: TopicScreenComponent}
    ]},
  ]},
  {path:'home',component:HomeScreenComponent},
  {path:'**',component:HomeScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
