import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { TuiBreadcrumbsModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [CommonModule, TuiBreadcrumbsModule, RouterModule],
})
export class NavigationModule {}
