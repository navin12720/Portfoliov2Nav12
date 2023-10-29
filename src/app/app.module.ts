import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { ProducttextboxComponent } from './producttextbox/producttextbox.component';
import { ColprojectsComponent } from './colprojects/colprojects.component';
import { TictactocComponent } from './tictactoc/tictactoc.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProductdetailComponent,
    ProductsearchComponent,
    ProducttableComponent,
    ProducttextboxComponent,
    ColprojectsComponent,
    TictactocComponent,
    TodolistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
