import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBoxComponent } from './counter-box.component';

describe('CounterBoxComponent', () => {
  let component: CounterBoxComponent;
  let fixture: ComponentFixture<CounterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
