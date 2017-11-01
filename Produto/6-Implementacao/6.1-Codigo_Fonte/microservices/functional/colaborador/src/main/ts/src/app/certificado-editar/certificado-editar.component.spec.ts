import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoEditarComponent } from './certificado-editar.component';

describe('CertificadoEditarComponent', () => {
  let component: CertificadoEditarComponent;
  let fixture: ComponentFixture<CertificadoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
