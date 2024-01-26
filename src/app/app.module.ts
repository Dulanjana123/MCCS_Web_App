import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { UserCreationComponent } from './user/user-creation/user-creation.component';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { InvoiceModelComponent } from './Invoice/Component/invoice-model/invoice-model.component';
import { InvoiceTemplateComponent } from './Invoice/Component/invoice-template/invoice-template.component';
import { CustomerComponent } from './Customer/Component/customer/customer.component';
import { ProductComponent } from './Product/Component/product/product.component';
import { CustomerListComponent } from './Customer/Component/customer-list/customer-list.component';
import { InvoiceListComponent } from './Invoice/Component/invoice-list/invoice-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListsComponent,
    UserCreationComponent,
    NotFoundComponent,
    ServerErrorComponent,
    TestErrorsComponent,
    InvoiceModelComponent,
    InvoiceTemplateComponent,
    CustomerComponent,
    ProductComponent,
    CustomerListComponent,
    InvoiceListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
