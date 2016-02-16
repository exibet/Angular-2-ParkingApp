import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable'

import {CarModel} from '../services/car.model'

export interface ICar {
    id: string,
    type: string
}

@Injectable()
export class CarService {

    public totalCount: number = 0;
    public disabledCount: number = 0;
    public truckCount: number = 0;

    public cars: Observable<ICar[]>;
    private _carsObservable: any;
    private _cars: ICar[] = [];

    constructor() {
        this.cars = new Observable(observer => this._carsObservable = observer);
    }

    createCar(car: ICar) {
        this._cars.push( new CarModel( car.type ) );
        this.getCarCount(car);

        this._carsObservable.next(this._cars);

        console.log( this._cars )
    }

    getCarCount( car: ICar ) {
        this.totalCount += 1;
        if ( car.type === 'Disabled' ) {
            this.disabledCount += 1;
        }
        if ( car.type === 'Truck' ) {
            this.truckCount += 1;
        }
    }

    removeAllCars() {
        this._cars = [];
        this._carsObservable.next(this._cars);
    }

    getLastCar() {
        return this._cars[this._cars.length - 1];
    }
}