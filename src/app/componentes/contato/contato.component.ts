import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    RouterLink,
    CabecalhoComponent
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string = ''
  @Input() telefone: string = ''
  @Input() id?: number;
  @Input() avatar: string | ArrayBuffer = '';
}
