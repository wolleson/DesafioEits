import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesativaColaboradorComponent } from './desativa-colaborador.component';

describe('DesativaColaboradorComponent', () => {
  let component: DesativaColaboradorComponent;
  let fixture: ComponentFixture<DesativaColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesativaColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesativaColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
