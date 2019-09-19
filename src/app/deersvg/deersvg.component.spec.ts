import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeersvgComponent } from './deersvg.component';

describe('DeersvgComponent', () => {
  let component: DeersvgComponent;
  let fixture: ComponentFixture<DeersvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeersvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeersvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
