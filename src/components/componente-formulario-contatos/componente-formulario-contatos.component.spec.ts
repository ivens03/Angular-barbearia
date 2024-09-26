import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFormularioContatosComponent } from './componente-formulario-contatos.component';

describe('ComponenteFormularioContatosComponent', () => {
  let component: ComponenteFormularioContatosComponent;
  let fixture: ComponentFixture<ComponenteFormularioContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteFormularioContatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFormularioContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
