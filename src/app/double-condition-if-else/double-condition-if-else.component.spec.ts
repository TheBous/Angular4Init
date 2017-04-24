import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleConditionIfElseComponent } from './double-condition-if-else.component';

describe('DoubleConditionIfElseComponent', () => {
  let component: DoubleConditionIfElseComponent;
  let fixture: ComponentFixture<DoubleConditionIfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleConditionIfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleConditionIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
