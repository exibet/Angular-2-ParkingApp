System.register(['angular2/core', 'angular2/common', '../services/car.service', '../services/parking.service', '../components/car.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, car_service_1, parking_service_1, car_component_1;
    var GenerateCar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            },
            function (parking_service_1_1) {
                parking_service_1 = parking_service_1_1;
            },
            function (car_component_1_1) {
                car_component_1 = car_component_1_1;
            }],
        execute: function() {
            GenerateCar = (function () {
                function GenerateCar(_fb, _carService, _parkingService) {
                    var _this = this;
                    this._fb = _fb;
                    this._carService = _carService;
                    this._parkingService = _parkingService;
                    this.types = ['Disabled', 'Sedan', 'Truck'];
                    this.cars = [];
                    this.placesAvailable = true;
                    this.animate = new core_1.EventEmitter();
                    _carService.cars.subscribe(function (newCars) { return _this.cars = newCars; });
                    this.carForm = this._fb.group({
                        type: [this.types[0], common_1.Validators.required]
                    });
                }
                GenerateCar.prototype.onCreateCar = function (value) {
                    // Add car in Car Collection
                    this._carService.createCar(value);
                    this.pressed = true;
                    // Get last car from Car Collection
                    this.lastCar = this._carService.getLastCar();
                    // Add last car on right place in Parking Collection
                    this._parkingService.parkingCar(this.lastCar);
                    // Check available places
                    if (this._parkingService.fullPlaces !== (this.carError || null)) {
                        this.placesAvailable = false;
                        this.carError = this._parkingService.fullPlaces;
                    }
                    // Add offsets for last car
                    this._parkingService.findCarOnParking(this.lastCar);
                };
                GenerateCar.prototype.parkingCar = function () {
                    this.pressed = false;
                    document.querySelector('car:last-child').click();
                };
                GenerateCar.prototype.checkAvailable = function (type) {
                    if (this.carError !== type && this.carError !== '') {
                        this.placesAvailable = true;
                    }
                };
                GenerateCar.prototype.reset = function () {
                    this.placesAvailable = true;
                    this.carError = null;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], GenerateCar.prototype, "animate", void 0);
                GenerateCar = __decorate([
                    core_1.Component({
                        selector: 'generate-car',
                        template: "\n        <h2><b>Create Car</b> - for this parking</h2>\n        <div class=\"generate-car\">\n            <form [ngFormModel]=\"carForm\" (ngSubmit)=\"onCreateCar(carForm.value)\">\n                <select name=\"type\" ngControl=\"type\" (change)=\"checkAvailable($event.target.value)\">\n                    <option *ngFor=\"#type of types\" [value]=\"type\" >{{type}}</option>\n                </select>\n                <fieldset>\n                    <button [disabled]=\"pressed || !placesAvailable\" type=\"submit\">Create Car</button>\n                    <span *ngIf=\"!placesAvailable\" class=\"car-error\">All places - {{carError}} full</span>\n                </fieldset>\n                <button [disabled]=\"!pressed\" (click)=\"parkingCar()\"  type=\"button\" class=\"parking\">Parking Car</button>\n            </form>\n            <car-preview [class]=\"carForm.controls['type'].value\"></car-preview>\n        </div>\n        <cars></cars>\n    ",
                        directives: [car_component_1.Car]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, car_service_1.CarService, parking_service_1.ParkingService])
                ], GenerateCar);
                return GenerateCar;
            })();
            exports_1("GenerateCar", GenerateCar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VuZXJhdGUtY2FyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJHZW5lcmF0ZUNhciIsIkdlbmVyYXRlQ2FyLmNvbnN0cnVjdG9yIiwiR2VuZXJhdGVDYXIub25DcmVhdGVDYXIiLCJHZW5lcmF0ZUNhci5wYXJraW5nQ2FyIiwiR2VuZXJhdGVDYXIuY2hlY2tBdmFpbGFibGUiLCJHZW5lcmF0ZUNhci5yZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBbUNJQSxxQkFBcUJBLEdBQWdCQSxFQUNoQkEsV0FBdUJBLEVBQ3ZCQSxlQUErQkE7b0JBckN4REMsaUJBb0ZDQTtvQkFqRHdCQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFhQTtvQkFDaEJBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtvQkFDdkJBLG9CQUFlQSxHQUFmQSxlQUFlQSxDQUFnQkE7b0JBZDVDQSxVQUFLQSxHQUFHQSxDQUFDQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQSxPQUFPQSxDQUFDQSxDQUFDQTtvQkFFdkNBLFNBQUlBLEdBQUdBLEVBQUVBLENBQUNBO29CQUdWQSxvQkFBZUEsR0FBWUEsSUFBSUEsQ0FBQ0E7b0JBa0I5QkEsWUFBT0EsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQUVBLENBQUNBO29CQVBuQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBQUEsT0FBT0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsRUFBbkJBLENBQW1CQSxDQUFDQSxDQUFDQTtvQkFFM0RBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBO3dCQUMxQkEsSUFBSUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3FCQUM3Q0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ1BBLENBQUNBO2dCQUlERCxpQ0FBV0EsR0FBWEEsVUFBWUEsS0FBS0E7b0JBQ2JFLDRCQUE0QkE7b0JBQzVCQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDbENBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO29CQUVwQkEsbUNBQW1DQTtvQkFDbkNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO29CQUU3Q0Esb0RBQW9EQTtvQkFDcERBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLFVBQVVBLENBQUVBLElBQUlBLENBQUNBLE9BQU9BLENBQUVBLENBQUNBO29CQUVoREEseUJBQXlCQTtvQkFDekJBLEVBQUVBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLFVBQVVBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLElBQUlBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO3dCQUMvREEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQzdCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxVQUFVQSxDQUFBQTtvQkFDbkRBLENBQUNBO29CQUVEQSwyQkFBMkJBO29CQUMzQkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsZ0JBQWdCQSxDQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFFQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQUVERixnQ0FBVUEsR0FBVkE7b0JBQ0lHLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLEtBQUtBLENBQUNBO29CQUNyQkEsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFBQTtnQkFDcERBLENBQUNBO2dCQUVESCxvQ0FBY0EsR0FBZEEsVUFBZUEsSUFBSUE7b0JBQ2ZJLEVBQUVBLENBQUNBLENBQUVBLElBQUlBLENBQUNBLFFBQVFBLEtBQUtBLElBQUlBLElBQUlBLElBQUlBLENBQUNBLFFBQVFBLEtBQUtBLEVBQUdBLENBQUNBLENBQUNBLENBQUNBO3dCQUNuREEsSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQ2hDQSxDQUFDQTtnQkFDTEEsQ0FBQ0E7Z0JBRURKLDJCQUFLQSxHQUFMQTtvQkFDSUssSUFBSUEsQ0FBQ0EsZUFBZUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQXJDREw7b0JBQUNBLGFBQU1BLEVBQUVBOzttQkFBQ0EsZ0NBQU9BLFVBQXNCQTtnQkE5QzNDQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxjQUFjQTt3QkFDeEJBLFFBQVFBLEVBQUVBLHM4QkFnQlRBO3dCQUNEQSxVQUFVQSxFQUFFQSxDQUFDQSxtQkFBR0EsQ0FBQ0E7cUJBQ3BCQSxDQUFDQTs7Z0NBZ0VEQTtnQkFBREEsa0JBQUNBO1lBQURBLENBcEZBLEFBb0ZDQSxJQUFBO1lBcEZELHFDQW9GQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2VuZXJhdGUtY2FyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5cbmltcG9ydCB7Q2FyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY2FyLnNlcnZpY2UnXG5pbXBvcnQge1BhcmtpbmdTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9wYXJraW5nLnNlcnZpY2UnXG5cbmltcG9ydCB7Q2FyfSBmcm9tICcuLi9jb21wb25lbnRzL2Nhci5jb21wb25lbnQnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ2VuZXJhdGUtY2FyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+PGI+Q3JlYXRlIENhcjwvYj4gLSBmb3IgdGhpcyBwYXJraW5nPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdlbmVyYXRlLWNhclwiPlxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cImNhckZvcm1cIiAobmdTdWJtaXQpPVwib25DcmVhdGVDYXIoY2FyRm9ybS52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ0eXBlXCIgbmdDb250cm9sPVwidHlwZVwiIChjaGFuZ2UpPVwiY2hlY2tBdmFpbGFibGUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCIjdHlwZSBvZiB0eXBlc1wiIFt2YWx1ZV09XCJ0eXBlXCIgPnt7dHlwZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJwcmVzc2VkIHx8ICFwbGFjZXNBdmFpbGFibGVcIiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlIENhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFwbGFjZXNBdmFpbGFibGVcIiBjbGFzcz1cImNhci1lcnJvclwiPkFsbCBwbGFjZXMgLSB7e2NhckVycm9yfX0gZnVsbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFwcmVzc2VkXCIgKGNsaWNrKT1cInBhcmtpbmdDYXIoKVwiICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJwYXJraW5nXCI+UGFya2luZyBDYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxjYXItcHJldmlldyBbY2xhc3NdPVwiY2FyRm9ybS5jb250cm9sc1sndHlwZSddLnZhbHVlXCI+PC9jYXItcHJldmlldz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxjYXJzPjwvY2Fycz5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtDYXJdXG59KVxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlQ2FyIHtcblxuICAgIHByaXZhdGUgdHlwZXMgPSBbJ0Rpc2FibGVkJywgJ1NlZGFuJywgJ1RydWNrJ107XG5cbiAgICBwcml2YXRlIGNhcnMgPSBbXTtcblxuICAgIHByaXZhdGUgcHJlc3NlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIHBsYWNlc0F2YWlsYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBjYXJFcnJvcjogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBsYXN0Q2FyOiBhbnk7XG5cbiAgICBwcml2YXRlIGNhckZvcm06IENvbnRyb2xHcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX3BhcmtpbmdTZXJ2aWNlOiBQYXJraW5nU2VydmljZSkge1xuXG4gICAgICAgIF9jYXJTZXJ2aWNlLmNhcnMuc3Vic2NyaWJlKG5ld0NhcnMgPT4gdGhpcy5jYXJzID0gbmV3Q2Fycyk7XG5cbiAgICAgICAgdGhpcy5jYXJGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xuICAgICAgICAgICAgdHlwZTogW3RoaXMudHlwZXNbMF0sIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEBPdXRwdXQoKSBhbmltYXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25DcmVhdGVDYXIodmFsdWUpIHtcbiAgICAgICAgLy8gQWRkIGNhciBpbiBDYXIgQ29sbGVjdGlvblxuICAgICAgICB0aGlzLl9jYXJTZXJ2aWNlLmNyZWF0ZUNhcih2YWx1ZSk7XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gR2V0IGxhc3QgY2FyIGZyb20gQ2FyIENvbGxlY3Rpb25cbiAgICAgICAgdGhpcy5sYXN0Q2FyID0gdGhpcy5fY2FyU2VydmljZS5nZXRMYXN0Q2FyKCk7XG5cbiAgICAgICAgLy8gQWRkIGxhc3QgY2FyIG9uIHJpZ2h0IHBsYWNlIGluIFBhcmtpbmcgQ29sbGVjdGlvblxuICAgICAgICB0aGlzLl9wYXJraW5nU2VydmljZS5wYXJraW5nQ2FyKCB0aGlzLmxhc3RDYXIgKTtcblxuICAgICAgICAvLyBDaGVjayBhdmFpbGFibGUgcGxhY2VzXG4gICAgICAgIGlmICggdGhpcy5fcGFya2luZ1NlcnZpY2UuZnVsbFBsYWNlcyAhPT0gKHRoaXMuY2FyRXJyb3IgfHwgbnVsbCkpIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VzQXZhaWxhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNhckVycm9yID0gdGhpcy5fcGFya2luZ1NlcnZpY2UuZnVsbFBsYWNlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG9mZnNldHMgZm9yIGxhc3QgY2FyXG4gICAgICAgIHRoaXMuX3BhcmtpbmdTZXJ2aWNlLmZpbmRDYXJPblBhcmtpbmcoIHRoaXMubGFzdENhciApO1xuICAgIH1cblxuICAgIHBhcmtpbmdDYXIoKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYXI6bGFzdC1jaGlsZCcpLmNsaWNrKClcbiAgICB9XG5cbiAgICBjaGVja0F2YWlsYWJsZSh0eXBlKSB7XG4gICAgICAgIGlmICggdGhpcy5jYXJFcnJvciAhPT0gdHlwZSAmJiB0aGlzLmNhckVycm9yICE9PSAnJyApIHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VzQXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLnBsYWNlc0F2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FyRXJyb3IgPSBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
