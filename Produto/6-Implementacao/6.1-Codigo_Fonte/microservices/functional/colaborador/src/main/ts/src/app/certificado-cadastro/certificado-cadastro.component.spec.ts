import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoCadastroComponent } from './certificado-cadastro.component';

describe('CertificadoCadastroComponent', () => {
  let component: CertificadoCadastroComponent;
  let fixture: ComponentFixture<CertificadoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
