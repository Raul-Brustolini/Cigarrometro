import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
quantidadeCigarro: number = 0;
quantidadeAnoFumando: number = 0;
tempoVidaPerdido: number = 0;
  constructor() {}

  calcularTempoVidaPerdido(){
    const totalDiasPorAno = 360;
    const minutosPerdidoPorCigarro = 10;
    const totalMinutosPorDia = 1440;
    let totalDiasFumado = this.quantidadeAnoFumando * totalDiasPorAno;
    let totalCigarroFumado = totalDiasFumado * this.quantidadeCigarro;
    this.tempoVidaPerdido = totalCigarroFumado * minutosPerdidoPorCigarro;
    this.tempoVidaPerdido = this.tempoVidaPerdido / totalMinutosPorDia;
  }
}
