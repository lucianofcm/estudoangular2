import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindComponentComponent } from './two-way-bind-component.component';

describe('TwoWayBindComponentComponent', () => {
  let component: TwoWayBindComponentComponent;
  let fixture: ComponentFixture<TwoWayBindComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayBindComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
