import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesColaboradorComponent } from './detalhes-colaborador.component';

describe('DetalhesColaboradorComponent', () => {
  let component: DetalhesColaboradorComponent;
  let fixture: ComponentFixture<DetalhesColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
