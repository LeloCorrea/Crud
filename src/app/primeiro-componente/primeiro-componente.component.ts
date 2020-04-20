import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  meutitulo = "Exibindo dados através de uma variável!";
  
  texto1 = "Olá, tudo bem?";
  texto2 = "Como vai?"

  cliente = {
    id:1,
    nome: "Fulano"
  }

  constructor() { }

  ngOnInit(): void {
  }

  geraTexto(){
    return "Um texto qualquer";
  }

}
