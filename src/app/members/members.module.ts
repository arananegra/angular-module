import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent
} from './members-table';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
  ],
  exports: [
    MembersTableComponent
  ]
})
export class MembersModule { }
