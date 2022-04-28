// General
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Modules
import { AuthModule } from './auth/auth.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { PostUserComponent } from './routing/post-user/post-user.component';

// Components Home
import { HomeContentComponent } from './home-content/home-content.component';
import { DeleteByIdComponent } from './routing/delete-by-id/delete-by-id.component';
import { UpdateByIdComponent } from './routing/update-by-id/update-by-id.component';

//ngx_bootstrap
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MultipleCardsComponent } from './multiple-cards/multiple-cards.component';
import { NgxSpinnerModule } from 'ngx-spinner';


//PrimeNG
import { ToastModule } from 'primeng/toast';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {GalleriaModule} from 'primeng/galleria';
import {TabViewModule} from 'primeng/tabview';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {TableModule} from 'primeng/table';

import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {StepsModule} from 'primeng/steps';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {TooltipModule} from 'primeng/tooltip';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import { SlideMenuModule } from 'primeng/slidemenu';


//Interceptor
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

//Component
import { SidebarGlobalComponent } from './sidebar-global/sidebar-global.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Immobilier3dComponent } from './immobilier3d/immobilier3d.component';
import { ConciergerieComponent } from './conciergerie/conciergerie.component';
import { ContactComponent } from './contact/contact.component';
import { NewClientComponent } from './new-client/new-client.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { Step1Component } from './new-client/step1/step1.component';
import { Step2Component } from './new-client/step2/step2.component';
import { Step3Component } from './new-client/step3/step3.component';
import { Step4Component } from './new-client/step4/step4.component';
import { Step5Component } from './new-client/step5/step5.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ServiceClientComponent } from './service-client/service-client.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    HomeContentComponent,
    PostUserComponent,
    DeleteByIdComponent,
    UpdateByIdComponent,
    MultipleCardsComponent,
    SidebarGlobalComponent,
    FeedbackComponent,
    PresentationComponent,
    Immobilier3dComponent,
    ConciergerieComponent,
    ContactComponent,
    NewClientComponent,
    MatTableComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    NewsLetterComponent,
    ServiceClientComponent,
    FooterComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule,
    ButtonModule,
    PasswordModule,
    MenubarModule,
    SidebarModule,
    InputTextModule,
    GalleriaModule,
    TabViewModule,
    CarouselModule,
    NgbModule,
    NgxSpinnerModule,
    ConfirmDialogModule,
    TooltipModule,
    AccordionModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    InputTextareaModule,
    StepsModule,
    CardModule,
    SlideMenuModule
  
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MessageService, ConfirmationService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
