import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { MatTableComponent } from './mat-table/mat-table.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ContactComponent } from './contact/contact.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { Immobilier3dComponent } from './immobilier3d/immobilier3d.component';
import { HomeContentComponent } from './home-content/home-content.component';



import { UpdateByIdComponent } from './routing/update-by-id/update-by-id.component';
import { DeleteByIdComponent } from './routing/delete-by-id/delete-by-id.component';
import { PostUserComponent } from './routing/post-user/post-user.component';

import { ProfileComponent } from './profile/profile.component';

//Stepper
import { Step2Component } from './new-client/step2/step2.component';
import { Step3Component } from './new-client/step3/step3.component';
import { Step4Component } from './new-client/step4/step4.component';
import { Step5Component } from './new-client/step5/step5.component';




const routes: Routes = [
  { path: '', component: HomeContentComponent,},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  { path: 'conciergerie', component: ConciergerieComponent },
  { path: 'immobilier', component: Immobilier3dComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  { path: 'newClient', component: NewClientComponent,  canActivate: [AuthGuard] },
  { path: 'findAllUser', component: MatTableComponent, canActivate: [AuthGuard] },

  { path: 'addUser', component: PostUserComponent, canActivate: [AuthGuard] },
  { path: 'updateID', component: UpdateByIdComponent, canActivate: [AuthGuard] },
  { path: 'deleteID', component: DeleteByIdComponent, canActivate: [AuthGuard] },

  //Stepper
  { path: 'step2/document', component: Step2Component, canActivate: [AuthGuard] },
  { path: 'step3/bien', component: Step3Component, canActivate: [AuthGuard] },
  { path: 'step4/rdv', component: Step4Component, canActivate: [AuthGuard] },
  { path: 'step5/confirmation', component: Step5Component, canActivate: [AuthGuard] },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
