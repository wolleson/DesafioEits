import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCertificadoComponent } from './detalhes-certificado.component';

describe('DetalhesCertificadoComponent', () => {
  let component: DetalhesCertificadoComponent;
  let fixture: ComponentFixture<DetalhesCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
