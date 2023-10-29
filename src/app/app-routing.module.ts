import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ColprojectsComponent } from './colprojects/colprojects.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { SkillsComponent } from './skills/skills.component';
import { TictactocComponent } from './tictactoc/tictactoc.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tictactoc', component: TictactocComponent },
  { path: 'productsearch', component: ProductsearchComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'project', component: ColprojectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
