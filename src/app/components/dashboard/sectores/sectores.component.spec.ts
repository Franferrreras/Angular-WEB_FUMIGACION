import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectoresComponent } from './sectores.component';

describe('SectoresComponent', () => {
  let component: SectoresComponent;
  let fixture: ComponentFixture<SectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
