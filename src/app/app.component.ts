import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentInit {
  component: ComponentRef<AuthFormComponent>;
  ctx = {
    $implicit: 'Tom Hard',
    location: 'England, En'
  };
  @ViewChild('tmpl') template: TemplateRef<any>;
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;

  constructor( private resolver: ComponentFactoryResolver ) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
      this.entry.createComponent(authFormFactory);
      this.component = this.entry.createComponent(authFormFactory, 0);
      this.component.instance.title = 'Create user';
      this.component.instance.submitted.subscribe(this.loginUser);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
    this.entry.createEmbeddedView(this.template, {
      $implicit: 'Nata Gildry',
      location: 'Ukraine, UA'
    });
  });
  }

  loginUser(user: User): void {
    console.log('Login', user);
  }

  destroyComponent(): void {
    this.component.destroy();
  }

  moveComponent(): void {
    this.entry.move(this.component.hostView, 1);
  }

}
