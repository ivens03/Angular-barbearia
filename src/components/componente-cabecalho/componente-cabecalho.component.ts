import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './componente-cabecalho.component.html',
  styleUrls: ['./componente-cabecalho.component.css'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class ComponenteCabecalhoComponent {
  logo: string = "assets/logo.jpeg"; // Corrigido o caminho da imagem
}

