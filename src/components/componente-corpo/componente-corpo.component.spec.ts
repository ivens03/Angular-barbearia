import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCorpoComponent } from './componente-corpo.component';

describe('ComponenteCorpoComponent', () => {
  let component: ComponenteCorpoComponent;
  let fixture: ComponentFixture<ComponenteCorpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCorpoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCorpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
