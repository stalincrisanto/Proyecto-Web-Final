import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdministrativoComponent } from './user-administrativo.component';

describe('UserAdministrativoComponent', () => {
  let component: UserAdministrativoComponent;
  let fixture: ComponentFixture<UserAdministrativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdministrativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
