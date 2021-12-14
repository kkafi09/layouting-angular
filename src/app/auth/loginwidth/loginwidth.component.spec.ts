import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwidthComponent } from './loginwidth.component';

describe('LoginwidthComponent', () => {
  let component: LoginwidthComponent;
  let fixture: ComponentFixture<LoginwidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginwidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
