import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveListComponent } from './interactive-list.component';

describe('InteractiveListComponent', () => {
  let component: InteractiveListComponent;
  let fixture: ComponentFixture<InteractiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
