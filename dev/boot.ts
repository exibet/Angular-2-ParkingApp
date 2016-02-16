import {bootstrap} from 'angular2/platform/browser';
import {ParkingApp} from "./app.component";

import {CarService} from './services/car.service';
import {ParkingService} from './services/parking.service';
import {GenerateCar} from './components/generate-car.component'

//noinspection TypeScriptValidateTypes
bootstrap(ParkingApp, [CarService, ParkingService, GenerateCar]);
