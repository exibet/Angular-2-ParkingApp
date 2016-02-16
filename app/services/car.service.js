System.register(['angular2/core', 'rxjs/Observable', '../services/car.model'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, car_model_1;
    var CarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (car_model_1_1) {
                car_model_1 = car_model_1_1;
            }],
        execute: function() {
            CarService = (function () {
                function CarService() {
                    var _this = this;
                    this.totalCount = 0;
                    this.disabledCount = 0;
                    this.truckCount = 0;
                    this._cars = [];
                    this.cars = new Observable_1.Observable(function (observer) { return _this._carsObservable = observer; });
                }
                CarService.prototype.createCar = function (car) {
                    this._cars.push(new car_model_1.CarModel(car.type));
                    this.getCarCount(car);
                    this._carsObservable.next(this._cars);
                    console.log(this._cars);
                };
                CarService.prototype.getCarCount = function (car) {
                    this.totalCount += 1;
                    if (car.type === 'Disabled') {
                        this.disabledCount += 1;
                    }
                    if (car.type === 'Truck') {
                        this.truckCount += 1;
                    }
                };
                CarService.prototype.removeAllCars = function () {
                    this._cars = [];
                    this._carsObservable.next(this._cars);
                };
                CarService.prototype.getLastCar = function () {
                    return this._cars[this._cars.length - 1];
                };
                CarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CarService);
                return CarService;
            })();
            exports_1("CarService", CarService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Nhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkNhclNlcnZpY2UiLCJDYXJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiQ2FyU2VydmljZS5jcmVhdGVDYXIiLCJDYXJTZXJ2aWNlLmdldENhckNvdW50IiwiQ2FyU2VydmljZS5yZW1vdmVBbGxDYXJzIiwiQ2FyU2VydmljZS5nZXRMYXN0Q2FyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFXSUE7b0JBWEpDLGlCQTBDQ0E7b0JBdkNVQSxlQUFVQSxHQUFXQSxDQUFDQSxDQUFDQTtvQkFDdkJBLGtCQUFhQSxHQUFXQSxDQUFDQSxDQUFDQTtvQkFDMUJBLGVBQVVBLEdBQVdBLENBQUNBLENBQUNBO29CQUl0QkEsVUFBS0EsR0FBV0EsRUFBRUEsQ0FBQ0E7b0JBR3ZCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxJQUFJQSx1QkFBVUEsQ0FBQ0EsVUFBQUEsUUFBUUEsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsUUFBUUEsRUFBL0JBLENBQStCQSxDQUFDQSxDQUFDQTtnQkFDNUVBLENBQUNBO2dCQUVERCw4QkFBU0EsR0FBVEEsVUFBVUEsR0FBU0E7b0JBQ2ZFLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUVBLElBQUlBLG9CQUFRQSxDQUFFQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFFQSxDQUFFQSxDQUFDQTtvQkFDNUNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO29CQUV0QkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBRXRDQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFFQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFFQSxDQUFBQTtnQkFDN0JBLENBQUNBO2dCQUVERixnQ0FBV0EsR0FBWEEsVUFBYUEsR0FBU0E7b0JBQ2xCRyxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDckJBLEVBQUVBLENBQUNBLENBQUVBLEdBQUdBLENBQUNBLElBQUlBLEtBQUtBLFVBQVdBLENBQUNBLENBQUNBLENBQUNBO3dCQUM1QkEsSUFBSUEsQ0FBQ0EsYUFBYUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQzVCQSxDQUFDQTtvQkFDREEsRUFBRUEsQ0FBQ0EsQ0FBRUEsR0FBR0EsQ0FBQ0EsSUFBSUEsS0FBS0EsT0FBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pCQSxJQUFJQSxDQUFDQSxVQUFVQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDekJBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFFREgsa0NBQWFBLEdBQWJBO29CQUNJSSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDaEJBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUMxQ0EsQ0FBQ0E7Z0JBRURKLCtCQUFVQSxHQUFWQTtvQkFDSUssTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdDQSxDQUFDQTtnQkF6Q0xMO29CQUFDQSxpQkFBVUEsRUFBRUE7OytCQTBDWkE7Z0JBQURBLGlCQUFDQTtZQUFEQSxDQTFDQSxBQTBDQ0EsSUFBQTtZQTFDRCxtQ0EwQ0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9jYXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSdcblxuaW1wb3J0IHtDYXJNb2RlbH0gZnJvbSAnLi4vc2VydmljZXMvY2FyLm1vZGVsJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElDYXIge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBkaXNhYmxlZENvdW50OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB0cnVja0NvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIGNhcnM6IE9ic2VydmFibGU8SUNhcltdPjtcbiAgICBwcml2YXRlIF9jYXJzT2JzZXJ2YWJsZTogYW55O1xuICAgIHByaXZhdGUgX2NhcnM6IElDYXJbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FycyA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHRoaXMuX2NhcnNPYnNlcnZhYmxlID0gb2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhcihjYXI6IElDYXIpIHtcbiAgICAgICAgdGhpcy5fY2Fycy5wdXNoKCBuZXcgQ2FyTW9kZWwoIGNhci50eXBlICkgKTtcbiAgICAgICAgdGhpcy5nZXRDYXJDb3VudChjYXIpO1xuXG4gICAgICAgIHRoaXMuX2NhcnNPYnNlcnZhYmxlLm5leHQodGhpcy5fY2Fycyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuX2NhcnMgKVxuICAgIH1cblxuICAgIGdldENhckNvdW50KCBjYXI6IElDYXIgKSB7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCArPSAxO1xuICAgICAgICBpZiAoIGNhci50eXBlID09PSAnRGlzYWJsZWQnICkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZENvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBjYXIudHlwZSA9PT0gJ1RydWNrJyApIHtcbiAgICAgICAgICAgIHRoaXMudHJ1Y2tDb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsQ2FycygpIHtcbiAgICAgICAgdGhpcy5fY2FycyA9IFtdO1xuICAgICAgICB0aGlzLl9jYXJzT2JzZXJ2YWJsZS5uZXh0KHRoaXMuX2NhcnMpO1xuICAgIH1cblxuICAgIGdldExhc3RDYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJzW3RoaXMuX2NhcnMubGVuZ3RoIC0gMV07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
