import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  providers: [COUNTER_CONTROL_ACCESSOR],
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.css']
})
export class StockCounterComponent implements ControlValueAccessor {
  constructor() { }

  private onTouch: () => {};
  private onModelChange: (value: number) => {};

  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  registerOnTouched(fn): void {
    this.onTouch = fn;
  }

  registerOnChange(fn): void {
    this.onModelChange = fn;
  }

  writeValue(value): void {
    this.value = value || 0;
  }

  increment(): void {
    if (this.value < this.max) {
      this.value = this.value + this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
  decrement(): void {
    if (this.value > this.min) {
      this.value = this.value - this.step;
      this.onModelChange(this.value);
    }
    this.onTouch();
  }
}
