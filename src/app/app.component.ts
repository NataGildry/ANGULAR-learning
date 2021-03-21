import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef, OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { User } from './auth-form/user';
import { FileSizePipe } from './filesize.pipe';
import { Router } from '@angular/router';

interface File {
  name: string;
  size: any;
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
  FileSizePipe
]
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  files: File[];
  mapped: File[];
  component: ComponentRef<AuthFormComponent>;
  ctx = {
    $implicit: 'Tom Hard',
    location: 'England, En'
  };
  @ViewChild('tmpl') template: TemplateRef<any>;
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }, {
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  }, {
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];
  constructor( private resolver: ComponentFactoryResolver,
               private fileSizePipe: FileSizePipe,
               private router: Router) {
    setTimeout(() => {
      this.items = [...this.items, { name: 'Nata Gildry', age: 40, location: 'Dnipro' }];
    }, 2000);
  }
  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];
    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      };
    });
  }

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
