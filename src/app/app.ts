import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Boletin 1');

  public playas: string[] = ['Matalascañas', 'Chipiona', 'Caño Guerrero', 'Valdelagrana', 'Islantilla'];
  public notas: number[] = [1,2,3,4,5,6,7,8,9,10];
  public edades: number[] = [19,23,14,24,56,35,28,45,14,49,54,75,33,43,13,24,35,34,54,23]
  public colores: string[] = ['verde', 'amarillo', 'rojo', 'blanco', 'negro'];
  public Frutas: string[] = ['Aguacate', 'Banana', 'Chirimoya','Dátil', 'Fresa', 'Guayaba', 'Kiwi', 'Limón', 'Naranja', 'Pera', 'Sandía', 'Uva', 'Yuca'];
  public fruta: string = "";
  public matriz1: number[][] = this.inicializaMatriz();
  public matriz2: number[][] = this.inicializaMatriz();

  public filtra_playas_pares(): string[]{
    return this.playas.filter((data, idx) => idx %2 == 0);  
  }

  public Obten_nota_max(): number{
    return this.notas.reduce((max, actual) => actual > max ? actual : max);
  }

  public Obten_nota_min():number{
    return this.notas.reduce((min, actual) => actual < min ? actual : min);
  }

  public Calculo_media_edad(): number{
    let edadesFiltradas: number[] = this.edades.filter(edad => 18 > edad && edad < 50);
    let result: number = edadesFiltradas.reduce((acum,edad) => acum + edad) / edadesFiltradas.length;
    return Number(result.toFixed(2))
  }

  public elimina_color(color: string): string[]{
    return this.colores.filter(data => data !== color);
  }

  public addFruit(): void{
    let encontrado = 0;
    for(let i = 0; i < this.Frutas.length; i++) {
      if (this.fruta < this.Frutas[i]) {
        encontrado = i;
        break;
      } 
    }
    
    this.Frutas.splice(encontrado, 0, this.fruta);
  }

  public inicializaMatriz(){
    let result: number[][] = [];
    for (let i = 0; i < 3; i++) {
      let fila: number[] = [];
      for (let j = 0; j < 3; j++) {
        fila.push(0);
      }
      result.push(fila);
   }
   console.log(result);
    return result;
  }
}