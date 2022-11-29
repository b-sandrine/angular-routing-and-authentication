import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { EventsComponent } from './events/events.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { SpecialEventsComponent } from './special-events/special-events.component'
import { AuthGuardService } from './auth.guard.service'

const routes: Routes = [
  {
      path:'',
      redirectTo: 'events',
      pathMatch: 'full'
  },
  {
      path: 'events',
      component: EventsComponent
  },
  {
      path: 'special',
      component: SpecialEventsComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
