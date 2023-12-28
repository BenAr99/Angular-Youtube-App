import {
  Directive, HostBinding, Input, OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appErrorWarning]',
  standalone: true,
})
export class ErrorWarningDirective implements OnChanges {
  @Input() appErrorWarning?: string;

  @HostBinding('style.background')
    background?:string;

  ngOnChanges(): void {
    this.background = '#E0E0E0';
    if (this.appErrorWarning) {
      this.background = '#f1b5b5';
    }
  }
}
