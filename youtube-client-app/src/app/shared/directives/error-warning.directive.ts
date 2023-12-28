import {
  Directive, HostBinding, Input, OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appErrorWarning]',
  standalone: true,
})
export class ErrorWarningDirective implements OnChanges {
  @Input() error?: string;

  @HostBinding('style.background')
    background?:string;

  ngOnChanges(): void {
    this.background = '#E0E0E0';
    if (this.error) {
      this.background = '#f1b5b5';
    }
  }
}
