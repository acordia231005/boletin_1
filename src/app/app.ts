import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //variables
  public title = signal('Boletin 1');
  public playas: string[] = ['Matalascañas', 'Chipiona', 'Caño Guerrero', 'Valdelagrana', 'Islantilla'];
  public notas: number[] = [1,2,3,4,5,6,7,8,9,10];
  public edades: number[] = [19,23,14,24,56,35,28,45,14,49,54,75,33,43,13,24,35,34,54,23]
  public colores: string[] = ['verde', 'amarillo', 'rojo', 'blanco', 'negro'];
  public Frutas: string[] = ['Aguacate', 'Banana', 'Chirimoya','Dátil', 'Fresa', 'Guayaba', 'Kiwi', 'Limón', 'Naranja', 'Pera', 'Sandía', 'Uva', 'Yuca'];
  public fruta: string = "";
  public matriz1: number[][] = this.inicializaMatriz();
  public matriz2: number[][] = this.inicializaMatriz();
  public diasSemana: Set<string> = new Set();
  public entresemana: Set<string> = new Set(["Lunes","Martes","Miercoles","Jueves","Viernes"]);
  public finde: Set<string> = new Set(["Sabado", "Domingo"]);
  public alumnos: Set<string> = new Set();

  //Ejercicio 1
  public filtra_playas_pares(): string[]{
    return this.playas.filter((data, idx) => idx %2 == 0);  
  }

  //Ejercicio 2
  public Obten_nota_max(): number{
    return this.notas.reduce((max, actual) => actual > max ? actual : max);
  }

  public Obten_nota_min():number{
    return this.notas.reduce((min, actual) => actual < min ? actual : min);
  }

  //Ejercicio 3
  public Calculo_media_edad(): number{
    let edadesFiltradas: number[] = this.edades.filter(edad => 18 > edad && edad < 50);
    let result: number = edadesFiltradas.reduce((acum,edad) => acum + edad) / edadesFiltradas.length;
    return Number(result.toFixed(2))
  }

  //Ejercicio 4
  public elimina_color(color: string): string[]{
    return this.colores.filter(data => data !== color);
  }

  //Ejercicio 5
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

  //Ejercicio 7
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

  //Ejercicio 11
  public rellena_Semana(): void{
    this.diasSemana.add("Lunes").add("Martes").add("Miercoles")
                    .add("Jueves").add("Viernes")
                    .add("Sabado").add("Domingo");
  }

  public unir_conjuntos(): void{
    this.diasSemana = new Set([...this.entresemana, ...this.finde]);
  }

  //Ejercicio 12
  public operar_conjunto(opt: number): void{
    switch(opt){
      case 1:
        this.add_to_set();
        console.log(this.alumnos);
        break;
      case 2:
        this.delete_from_set();
        console.log(this.alumnos);
        break;
      case 3:
        let estaxexu: boolean = this.find_in_set("xexu");
        let estasalva: boolean = this.find_in_set("salvador");
        console.log("el alumno xexu esta " + estaxexu);
        console.log("el alumno salvador esta " + estasalva);
        break;
      case 4:
        let tamano = this.count_set();
        console.log("El conjunto tiene " + tamano + " elementos");
        break;
    }
  }

  private add_to_set(): void{
   this.alumnos.add("xexu").add("canijo").add("Franfli")
                    .add("franver").add("elite")
                    .add("javi").add("sanchez");
  }

  private delete_from_set(): void{
    this.alumnos.delete("franver");
  }

  private find_in_set(alumno: string): boolean{
    return this.alumnos.has(alumno);
  }

  private count_set(): number{
    return this.alumnos.size
  }

  //Ejercicio 13
  public elimina_duplicados(): string[]{
    let lista_con_repetidos: string[] = ["hola", "hola", "adios", "adios","xexu"];
    let conjunto_elementos: Set<string> = new Set(lista_con_repetidos);
    let lista_sin_repetidos = [...conjunto_elementos];
    return lista_sin_repetidos;
  }

  //Ejercicio 14


  //Ejercicio 15
  public listin_telefonico(): Map<string, string>{
    let listin:Map<string, string> = new Map();
    listin.set("Juan", "665462814");
    listin.set("Fernando", "622941563");
    listin.set("Maria", '675454544');

    console.table(listin);
    return listin;
  }

}