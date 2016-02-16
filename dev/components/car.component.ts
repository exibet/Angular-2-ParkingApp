import {Component, ElementRef} from 'angular2/core';

import {CarService} from '../services/car.service'

import {AnimateCar} from '../components/car.animation'

@Component({
    selector: 'cars',
    template: `
        <car *ngFor="#car of cars" [class]="car.type" animate-car #aCar="a-car" (click)="aCar.start(car)">
            <span class="car-number">{{car.id}}</span>
        </car>
    `,
    directives: [AnimateCar],
    providers: [AnimateCar, ElementRef]
})
export class Car {

    private cars = [];

    constructor( private _carService: CarService ) {
        _carService.cars.subscribe(newCars => this.cars = newCars);
    }

}