import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisDetailComponent } from './crisis-detail.component';
import {RouterTestingModule} from "@angular/router/testing";
import {DialogService} from "../../services/dialog.service";

describe('CrisisDetailComponent', () => {
  let component: CrisisDetailComponent;
  let fixture: ComponentFixture<CrisisDetailComponent>;

  const mockDialogService = jasmine.createSpyObj(['confirm'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CrisisDetailComponent ],
      providers: [
        {provide: DialogService, useValue: mockDialogService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
