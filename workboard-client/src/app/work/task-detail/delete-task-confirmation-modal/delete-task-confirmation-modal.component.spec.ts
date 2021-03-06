import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteTaskConfirmationModalComponent} from './delete-task-confirmation-modal.component';

describe('DeleteTaskConfirmationModalComponent', () => {
  let component: DeleteTaskConfirmationModalComponent;
  let fixture: ComponentFixture<DeleteTaskConfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTaskConfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTaskConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
