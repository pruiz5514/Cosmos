import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable, map} from 'rxjs';
import { SextoComponent } from '../sexto/sexto.component';
import { PreguntasCursosService } from '../../domains/shared/services/preguntas-cursos.service';
import { HeaderComponent } from '../../domains/shared/header/header.component';
import { FooterComponent } from '../../domains/shared/footer/footer.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [SextoComponent,CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.scss'
})
export class EjerciciosComponent implements OnInit {
  // constructor(route:ActivatedRoute){
  //   const grado: Observable<string> = route.params.pipe(map((p) => p['grado']));
  //   grado.subscribe((grado) => {console.log(grado)})
  // }

  private preguntasCurso = inject(PreguntasCursosService) 
  preguntas = this.preguntasCurso.preguntasSexto 

  nombreRuta: string | null = '';
  arrayFiltrado: any[] = [...this.preguntas]

  constructor(private route: ActivatedRoute) { }

  filtrarPregunta(): void {
    this.arrayFiltrado = this.preguntas.filter(pregunta => pregunta.codigo === this.nombreRuta);
  }

  ngOnInit(): void {
    this.nombreRuta = this.route.snapshot.paramMap.get('codigo');
    console.log(this.nombreRuta);
    this.filtrarPregunta()
  }

 
  isClickedButton: string | null = null;

  cambiarColor(opcion:string):void{
    this.isClickedButton = opcion
  }
   
}
