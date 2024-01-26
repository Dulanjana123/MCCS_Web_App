import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './_guards/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { InvoiceModelComponent } from './Invoice/Component/invoice-model/invoice-model.component';
import { InvoiceTemplateComponent } from './Invoice/Component/invoice-template/invoice-template.component';
import { CustomerComponent } from './Customer/Component/customer/customer.component';
import { ProductComponent } from './Product/Component/product/product.component';
import { CustomerListComponent } from './Customer/Component/customer-list/customer-list.component';
import { InvoiceListComponent } from './Invoice/Component/invoice-list/invoice-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {path: 'customer', component: CustomerComponent,canActivate: [authGuard]},
      {path: 'customers', component: CustomerListComponent,canActivate: [authGuard]},
      {path: 'product', component: ProductComponent,canActivate: [authGuard]},
      {path: 'invoice', component: InvoiceModelComponent,canActivate: [authGuard]},
      {path: 'invoices', component: InvoiceListComponent,canActivate: [authGuard]},
      {
        path: 'invoice-template/:id', 
        component: InvoiceTemplateComponent
      }
    ]
  },
{path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
