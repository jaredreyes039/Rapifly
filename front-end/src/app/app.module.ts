import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';
import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DataTablesModule } from 'angular-datatables';
import { ForgetEmailComponent } from './forget/forget-email/forget-email.component';
import { ResetPasswordComponent } from './forget/reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import {
  OwlDateTimeModule,
  OwlNativeDateTimeModule
} from 'ng-pick-datetime';

import { LevelsComponent } from './admin/levels/levels.component';
import { RolesComponent } from './admin/roles/roles.component';
import { UsersComponent } from './users/users.component';
import { InviteUsersComponent } from './admin/invite-users/invite-users.component';
import { RegisterInviteUserComponent } from './register-invite-user/register-invite-user.component';
import { OrganizationsComponent } from './admin/organizations/organizations.component';
import { AddplanComponent } from './addplan/addplan.component';
import { HeirarchyComponent } from './admin/heirarchy/heirarchy.component';
import { ItemPlanDetailsComponent, itemplanitemdate } from './item-plan-detalis/item-plan-detalis.component';
import { PrioritizeComponent, prioritizegoaldate } from './prioritize/prioritize.component';
import { DeactivateComponent } from './deactivate/deactivate.component';
import { ProposeComponent } from './propose/propose.component';
import { VoteComponent } from './vote/vote.component';
import { SelectedVoteComponent } from './selected-vote/selected-vote.component';

import { HierarchyDiagramComponent } from './hierarchy-diagram/hierarchy-diagram.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIconModule, MatStepperModule, MatButtonToggleModule } from '@angular/material';
import { DelegateComponent } from './delegate/delegate.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LaunchComponent } from './launch/launch.component';
import { ReportComponent } from './report/report.component';
import { MeasureComponent } from './measure/measure.component';
import { ImproveComponent } from './improve/improve.component';
import { ProfileComponent } from './profile/profile.component';
import { ManageHieararchyComponent } from './manage-hieararchy/manage-hieararchy.component';
import { ChangeHieararchyComponent } from './change-hieararchy/change-hieararchy.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { UserGroupsComponent } from './user-groups/user-groups/user-groups.component';
import { AddUserGroupsComponent } from './user-groups/add-user-groups/add-user-groups.component';
import { ChatService } from './services/chat.service';
import { DragdropDirective } from './directives/dragdrop.directive';
import { AddQaFormsComponent } from './qa-forms/add-qa-forms/add-qa-forms.component';
import { QaFormsComponent } from './qa-forms/qa-forms/qa-forms.component';
import { FillUpFormComponent } from './qa-forms/fill-up-form/fill-up-form.component';
import { ViewQaFormResultsComponent } from './qa-forms/view-qa-form-results/view-qa-form-results.component';
import { RegisterComponent } from './coach/register/register.component';
import { ListComponent } from './coach/list/list.component';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChartsModule, ThemeService } from 'ng2-charts';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    SignupComponent,
    ForgetEmailComponent,
    ResetPasswordComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TopHeaderComponent,
    LevelsComponent,
    RolesComponent,
    UsersComponent,
    InviteUsersComponent,
    RegisterInviteUserComponent,
    OrganizationsComponent,
    AddplanComponent,
    HeirarchyComponent,
    ItemPlanDetailsComponent,
    itemplanitemdate,
    PrioritizeComponent,
    prioritizegoaldate,
    DeactivateComponent,
    ProposeComponent,
    VoteComponent,
    SelectedVoteComponent,
    HierarchyDiagramComponent,
    DelegateComponent,
    CountdownComponent,
    LaunchComponent,
    ReportComponent,
    MeasureComponent,
    ImproveComponent,
    ProfileComponent,
    ManageHieararchyComponent,
    ChangeHieararchyComponent,
    AdminSettingsComponent,
    UserGroupsComponent,
    AddUserGroupsComponent,
    DragdropDirective,
    AddQaFormsComponent,
    QaFormsComponent,
    FillUpFormComponent,
    ViewQaFormResultsComponent,
    RegisterComponent,
    ListComponent,
    EditPlanComponent,

  ],
  imports: [
    MatStepperModule,
    MatButtonToggleModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    HttpClientModule,
    DataTablesModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgbModule,
    GoogleChartsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatSlideToggleModule,
    MatExpansionModule,
    ChartsModule
  ],

  providers: [{ provide: LOCALE_ID, useValue: 'en-IN' }, ChatService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
