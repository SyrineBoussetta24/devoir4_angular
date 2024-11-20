import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: "instruments", component : InstrumentsComponent,canActivate:[AuthGuard],
    data : {roles:['ADMIN']}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
