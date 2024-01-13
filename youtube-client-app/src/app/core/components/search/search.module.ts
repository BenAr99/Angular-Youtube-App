import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchSettingsComponent } from './search-settings/search-settings.component';

@NgModule({
  declarations: [SearchFilterComponent, SearchSettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchSettingsComponent,
    SearchFilterComponent,
  ],
})
export class SearchModule { }
