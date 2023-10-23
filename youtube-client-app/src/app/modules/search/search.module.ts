import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SearchSettingsComponent } from './components/search-settings/search-settings.component';

@NgModule({
  declarations: [SearchFilterComponent, SearchSettingsComponent],
  imports: [
    CommonModule,
  ],
})
export class SearchModule { }
