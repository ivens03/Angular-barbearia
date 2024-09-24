import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './componente-cabecalho.component.html',
  styleUrl: './componente-cabecalho.component.css'
})
export class ComponenteCabecalhoComponent {
  
  logo: string="assents/logo.jpeg";
}
