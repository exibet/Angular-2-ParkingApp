System.register(['angular2/core', '../services/car.service', '../components/car.animation'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, car_service_1, car_animation_1;
    var Car;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            },
            function (car_animation_1_1) {
                car_animation_1 = car_animation_1_1;
            }],
        execute: function() {
            Car = (function () {
                function Car(_carService) {
                    var _this = this;
                    this._carService = _carService;
                    this.cars = [];
                    _carService.cars.subscribe(function (newCars) { return _this.cars = newCars; });
                }
                Car = __decorate([
                    core_1.Component({
                        selector: 'cars',
                        template: "\n        <car *ngFor=\"#car of cars\" [class]=\"car.type\" animate-car #aCar=\"a-car\" (click)=\"aCar.start(car)\">\n            <span class=\"car-number\">{{car.id}}</span>\n        </car>\n    ",
                        directives: [car_animation_1.AnimateCar],
                        providers: [car_animation_1.AnimateCar, core_1.ElementRef]
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService])
                ], Car);
                return Car;
            })();
            exports_1("Car", Car);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJDYXIiLCJDYXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQWNJQSxhQUFxQkEsV0FBdUJBO29CQWRoREMsaUJBa0JDQTtvQkFKd0JBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtvQkFGcENBLFNBQUlBLEdBQUdBLEVBQUVBLENBQUNBO29CQUdkQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxPQUFPQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxPQUFPQSxFQUFuQkEsQ0FBbUJBLENBQUNBLENBQUNBO2dCQUMvREEsQ0FBQ0E7Z0JBaEJMRDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFFBQVFBLEVBQUVBLHNNQUlUQTt3QkFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQVVBLENBQUNBO3dCQUN4QkEsU0FBU0EsRUFBRUEsQ0FBQ0EsMEJBQVVBLEVBQUVBLGlCQUFVQSxDQUFDQTtxQkFDdENBLENBQUNBOzt3QkFTREE7Z0JBQURBLFVBQUNBO1lBQURBLENBbEJBLEFBa0JDQSxJQUFBO1lBbEJELHFCQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuaW1wb3J0IHtDYXJTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jYXIuc2VydmljZSdcblxuaW1wb3J0IHtBbmltYXRlQ2FyfSBmcm9tICcuLi9jb21wb25lbnRzL2Nhci5hbmltYXRpb24nXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2FycycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGNhciAqbmdGb3I9XCIjY2FyIG9mIGNhcnNcIiBbY2xhc3NdPVwiY2FyLnR5cGVcIiBhbmltYXRlLWNhciAjYUNhcj1cImEtY2FyXCIgKGNsaWNrKT1cImFDYXIuc3RhcnQoY2FyKVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXItbnVtYmVyXCI+e3tjYXIuaWR9fTwvc3Bhbj5cbiAgICAgICAgPC9jYXI+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQW5pbWF0ZUNhcl0sXG4gICAgcHJvdmlkZXJzOiBbQW5pbWF0ZUNhciwgRWxlbWVudFJlZl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyIHtcblxuICAgIHByaXZhdGUgY2FycyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2UgKSB7XG4gICAgICAgIF9jYXJTZXJ2aWNlLmNhcnMuc3Vic2NyaWJlKG5ld0NhcnMgPT4gdGhpcy5jYXJzID0gbmV3Q2Fycyk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
