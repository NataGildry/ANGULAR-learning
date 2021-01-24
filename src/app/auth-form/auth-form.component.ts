import {AfterViewInit, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterViewInit{

  title = 'Login';
  @ViewChild('email') email: ElementRef;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.renderer.selectRootElement(this.email.nativeElement).focus();
  }

  onSubmit(value: User): void {
    this.submitted.emit(value);
  }
}
