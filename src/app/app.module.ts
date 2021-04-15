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
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { MailModule } from './mail/mail.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

export const ROUTES: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
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
    DashboardModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
