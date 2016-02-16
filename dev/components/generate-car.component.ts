import {Component, Output, EventEmitter} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';

import {CarService} from '../services/car.service'
import {ParkingService} from '../services/parking.service'

import {Car} from '../components/car.component'

@Component({
    selector: 'generate-car',
    template: `
        <h2><b>Create Car</b> - for this parking</h2>
        <div class="generate-car">
            <form [ngFormModel]="carForm" (ngSubmit)="onCreateCar(carForm.value)">
                <select name="type" ngControl="type" (change)="checkAvailable($event.target.value)">
                    <option *ngFor="#type of types" [value]="type" >{{type}}</option>
                </select>
                <fieldset>
                    <button [disabled]="pressed || !placesAvailable" type="submit">Create Car</button>
                    <span *ngIf="!placesAvailable" class="car-error">All places - {{carError}} full</span>
                </fieldset>
                <button [disabled]="!pressed" (click)="parkingCar()"  type="button" class="parking">Parking Car</button>
            </form>
            <car-preview [class]="carForm.controls['type'].value"></car-preview>
        </div>
        <cars></cars>
    `,
    directives: [Car]
})
export class GenerateCar {

    private types = ['Disabled', 'Sedan', 'Truck'];

    private cars = [];

    private pressed: boolean;
    private placesAvailable: boolean = true;
    private carError: string;

    private lastCar: any;

    private carForm: ControlGroup;

    constructor( private _fb: FormBuilder,
                 private _carService: CarService,
                 private _parkingService: ParkingService) {

        _carService.cars.subscribe(newCars => this.cars = newCars);

        this.carForm = this._fb.group({
            type: [this.types[0], Validators.required]
        });
    }

    @Output() animate = new EventEmitter();

    onCreateCar(value) {
        // Add car in Car Collection
        this._carService.createCar(value);
        this.pressed = true;

        // Get last car from Car Collection
        this.lastCar = this._carService.getLastCar();

        // Add last car on right place in Parking Collection
        this._parkingService.parkingCar( this.lastCar );

        // Check available places
        if ( this._parkingService.fullPlaces !== (this.carError || null)) {
            this.placesAvailable = false;
            this.carError = this._parkingService.fullPlaces
        }

        // Add offsets for last car
        this._parkingService.findCarOnParking( this.lastCar );
    }

    parkingCar() {
        this.pressed = false;
        document.querySelector('car:last-child').click()
    }

    checkAvailable(type) {
        if ( this.carError !== type && this.carError !== '' ) {
            this.placesAvailable = true;
        }
    }

    reset() {
        this.placesAvailable = true;
        this.carError = null;
    }
}