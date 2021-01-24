import {AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {User} from './auth-form/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  component: ComponentRef<AuthFormComponent>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
      this.component = this.entry.createComponent(authFormFactory);
      this.component.instance.title = 'Create user';
      this.component.instance.submitted.subscribe(this.loginUser);
    });
  }

  loginUser(user: User): void {
    console.log('Login', user);
  }
  destroyComponent(): void {
    this.component.destroy();
  }

}
