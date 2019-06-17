import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    // propiedades
    mostrar = true;

    frase: any = {
        mensaje : 'Un gran poder require una gran responsabilidad',
        autor: 'Ben parker'
    };

    personajes: string[] = ['spiderman', 'venom', 'Dr. octopus'];
}
