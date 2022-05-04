import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views.routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  declarations: [
    ViewsComponent,
    StatisticsComponent,
    ItemListComponent,
  ]
})
export class ViewsModule { }