import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaEstudianteComponent } from './tarea-estudiante.component';

describe('TareaEstudianteComponent', () => {
  let component: TareaEstudianteComponent;
  let fixture: ComponentFixture<TareaEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
