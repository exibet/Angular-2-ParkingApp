import {Component} from 'angular2/core';
import {GenerateCar} from './components/generate-car.component'
import {Parking} from './components/parking.component'
//import {Car} from './components/car.component'
import {GenerateParking} from './components/generete-parking.component'

@Component({
    selector: 'app',
    template: `
        <h1>Parking Car</h1>
        <generate-car></generate-car>
        <generate-parking></generate-parking>
        <parking class="parking"></parking>
    `,
    directives: [GenerateCar, GenerateParking, Parking],
})
export class ParkingApp {
    constructor() {}
}