import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableListRoutingModule } from './table-list-routing.module';
import { TableListComponent } from './table-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [TableListComponent],
  imports: [
    CommonModule,
    TableListRoutingModule,
    MatCardModule,
    MatTableModule,
  ],
})
export class TableListModule {}
