import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {
  @HostBinding('style.border')
  border: string;
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');
    this.border = '';
    // if it doesn't contain any numbers add red border
    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }

}
