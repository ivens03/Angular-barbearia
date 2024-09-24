import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Lenbrando que os componentes tem que ser criados e importando dps colocado dentro do arrey do imports
import { ComponenteCabecalhoComponent } from '../components/componente-cabecalho/componente-cabecalho.component';
import { ComponenteCorpoComponent } from '../components/componente-corpo/componente-corpo.component';
import { ComponenteFormularioContatosComponent } from '../components/componente-formulario-contatos/componente-formulario-contatos.component';
import { ComponenteRodapeComponent } from '../components/componente-rodape/componente-rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ComponenteCabecalhoComponent, 
    ComponenteCorpoComponent,
    ComponenteFormularioContatosComponent,
    ComponenteRodapeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_barbearia';
}
