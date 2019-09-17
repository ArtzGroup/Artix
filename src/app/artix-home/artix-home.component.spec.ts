import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtixHomeComponent } from './artix-home.component';

describe('ArtixHomeComponent', () => {
  let component: ArtixHomeComponent;
  let fixture: ComponentFixture<ArtixHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtixHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtixHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
