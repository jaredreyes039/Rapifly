import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonService } from 'src/app/services/common.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  searchCoachesForm: FormGroup;
  isSearchCoachesFormValid = false;

  users: any = [];

  currentuser;
  currentUserId;
  parent_user_id: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;

  // Use slug to connect w/ prod API
  // Must end with /
  slug = "https://lionfish-app-czku6.ondigitalocean.app/"

  constructor(
    private toastr: ToastrService,
    public authenticationService: AuthenticationService,
    public router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
  ) {
    this.currentuser = this.authenticationService.currentUserValue;
    this.currentUserId = this.currentuser.user._id;

    if (this.currentuser.role === 'Admin') {
      this.parent_user_id = this.currentuser.user._id;
    } else {
      this.parent_user_id = this.currentuser.user.parent_user_id;
    }
  }

  ngOnInit() {
    this.searchCoachesForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      phone: [''],
      title: [''],
      company_name: [''],
      industries: [''],
    });

    this.getUsers();
  }

  getUsers() {
    this.commonService.PostAPI(`${this.slug}coach/get/all`, {}).then((response: any) => {
      if (response.status) {
        this.users = response.data;
      } else {
        this.users = [];
      }

      this.dtOptions = {
        columnDefs: [
          { orderable: false, targets: [1] }
        ],
        pagingType: 'full_numbers',
        pageLength: 10,
      };
      this.dtTrigger.next();
      this.dataTableAfterViewInit();
    });
  }

  resetTable() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    });
  }

  dataTableAfterViewInit() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
      });
    });
  }

  openSearchModal() {
    $("#searchCoachModal").modal('show');
  }
  
  closeSearchModal() {
    $("#searchCoachModal").modal('hide');
  }

  submit() {
    this.isSearchCoachesFormValid = true;

    if (this.searchCoachesForm.invalid) {
      return;
    } else {
      var data = this.searchCoachesForm.value;

      this.commonService.PostAPI(`${this.slug}coach/filter`, data).then((response: any) => {
        if (response.status) {
          this.users = response.data;
        } else {
          this.users = [];
        }

        this.closeSearchModal();

        this.resetTable();
        this.dtOptions = {
          columnDefs: [
            { orderable: false, targets: [1] }
          ],
          pagingType: 'full_numbers',
          pageLength: 10,
        };
        this.dtTrigger.next();
        this.dataTableAfterViewInit();
      });
    }
  }

  resetSearch(){
    this.resetTable();
    this.getUsers();
  }
}
