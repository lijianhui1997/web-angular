import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsfirstComponent } from './componentsfirst.component';

describe('ComponentsfirstComponent', () => {
  let component: ComponentsfirstComponent;
  let fixture: ComponentFixture<ComponentsfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
