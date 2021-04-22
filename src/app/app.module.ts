import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

import { AppComponent } from './app.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleOneComponent } from './example-one/example-one.component';

import { CreditCardDirective } from './credit-card.directive';
import { MyForDirective } from './my-for.directive';

import { FileSizePipe } from './filesize.pipe';
import { PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { MailModule } from './mail/mail.module';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : of(null);
  }
}

export const ROUTES: Routes = [
  { path: 'dashboard', canLoad: [AuthGuard], loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', redirectTo: 'mail/folder/inbox' }
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleThreeComponent,
    ExampleTwoComponent,
    ExampleOneComponent,
    CreditCardDirective,
    MyForDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    StockInventoryModule,
    HttpClientModule,
    MailModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
