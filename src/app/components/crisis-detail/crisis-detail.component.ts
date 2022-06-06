import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';
import { DialogService } from 'src/app/services/dialog/dialog.service';
import { Crisis } from 'src/app/model/crisis';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis?: Crisis
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.route.data
      .subscribe(data => {
        const crisis: Crisis = data['crisis'];
        this.editName = crisis.name;
        this.crisis = crisis;
      });
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  cancel() {
    this.goBack();
  }

  save() {
    if (this.crisis){
      this.crisis.name = this.editName;
      this.goBack();
    }
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }
}
