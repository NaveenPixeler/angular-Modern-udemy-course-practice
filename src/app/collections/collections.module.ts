import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CollectionsRoutingModule } from './collections.routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule, CollectionsRoutingModule,SharedModule,RouterModule,
  ],
  declarations: [CollectionHomeComponent, TableComponent,BiographyComponent,CompaniesComponent,PartnersComponent,TabsComponent],
  exports: []
})
export class CollectionsModule { }