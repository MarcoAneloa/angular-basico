import { Component } from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase:any={
        mensaje:"Todo lo puedo en cristo que me fortalece",
        autor:"Jesus"
    }

    personas:string[]=['Persona1','Persona2','Persona3'];
}