import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentschildComponent } from './componentschild.component';

describe('ComponentschildComponent', () => {
  let component: ComponentschildComponent;
  let fixture: ComponentFixture<ComponentschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
