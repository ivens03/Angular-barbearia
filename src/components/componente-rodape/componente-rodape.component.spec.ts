import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRodapeComponent } from './componente-rodape.component';

describe('ComponenteRodapeComponent', () => {
  let component: ComponenteRodapeComponent;
  let fixture: ComponentFixture<ComponenteRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteRodapeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
