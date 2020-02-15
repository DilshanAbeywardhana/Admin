import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTrainComponent } from './remove-train.component';

describe('RemoveTrainComponent', () => {
  let component: RemoveTrainComponent;
  let fixture: ComponentFixture<RemoveTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
