import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetakLaporanComponent } from './cetak-laporan.component';

describe('CetakLaporanComponent', () => {
  let component: CetakLaporanComponent;
  let fixture: ComponentFixture<CetakLaporanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetakLaporanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetakLaporanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
