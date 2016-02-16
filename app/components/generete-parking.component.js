System.register(['angular2/core', 'angular2/common', '../services/parking.service', '../services/car.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, parking_service_1, car_service_1;
    var GenerateParking;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (parking_service_1_1) {
                parking_service_1 = parking_service_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            GenerateParking = (function () {
                function GenerateParking(_fb, _parkingService, _carService) {
                    this._fb = _fb;
                    this._parkingService = _parkingService;
                    this._carService = _carService;
                    this.parkingForm = this._fb.group({
                        total: new common_1.Control('10', common_1.Validators.required),
                        disabled: new common_1.Control(''),
                        truck: new common_1.Control('')
                    }, { validator: this.validateInputPlaces });
                }
                GenerateParking.prototype.onCreateParking = function (pForm) {
                    this._carService.removeAllCars();
                    this._parkingService.generateParking(pForm);
                    this.pSedan = pForm.total - pForm.disabled;
                    this.pDisabled = pForm.disabled;
                    this.pTruck = pForm.truck;
                    this.aSedan = this._parkingService.availableSedans;
                    this.aDisabled = this._parkingService.availableDisables;
                    this.aTruck = this._parkingService.availableTruck;
                };
                GenerateParking.prototype.validateInputPlaces = function (group) {
                    var total = group.controls['total'].value || 0, disabled = group.controls['disabled'].value || 0, truck = group.controls['truck'].value || 0, valid = true;
                    if (total < (disabled + truck) || disabled < 0 || truck < 0) {
                        valid = false;
                    }
                    if (valid) {
                        return null;
                    }
                    return {
                        validateInputPlaces: true
                    };
                };
                GenerateParking = __decorate([
                    core_1.Component({
                        selector: 'generate-parking',
                        template: "\n        <h2><b>Create Parking</b></h2>\n        <div class=\"generate-parking\">\n            <form [ngFormModel]=\"parkingForm\" (ngSubmit)=\"onCreateParking(parkingForm.value)\">\n                <input required name=\"total\"    type=\"number\" placeholder=\"Total\"       ngControl=\"total\"/>\n                <input          name=\"disabled\" type=\"number\" placeholder=\"Disabled\"    ngControl=\"disabled\"/>\n                <input          name=\"truck\"    type=\"number\" placeholder=\"Truck\"       ngControl=\"truck\"/>\n                <span class=\"parking-error\" *ngIf=\"!parkingForm.valid\">Sum ( Disabled + Truck ) must be less than - Total</span>\n                <button [disabled]=\"!parkingForm.valid\" type=\"submit\">Generate</button>\n            </form>\n            <table>\n                <tr>\n                    <td></td>\n                    <td>Sedan places</td>\n                    <td>Disabled places</td>\n                    <td>Track places</td>\n                </tr>\n                <tr>\n                    <td>Parking places</td>\n                    <td>{{pSedan || 0}}</td>\n                    <td>{{pDisabled || 0}}</td>\n                    <td>{{pTruck || 0}}</td>\n                </tr>\n                <tr>\n                    <td>PLaces left</td>\n                    <td>{{aSedan || 0}}</td>\n                    <td>{{aDisabled || 0}}</td>\n                    <td>{{aTruck || 0}}</td>\n                </tr>\n            </table>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, parking_service_1.ParkingService, car_service_1.CarService])
                ], GenerateParking);
                return GenerateParking;
            })();
            exports_1("GenerateParking", GenerateParking);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2VuZXJldGUtcGFya2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiR2VuZXJhdGVQYXJraW5nIiwiR2VuZXJhdGVQYXJraW5nLmNvbnN0cnVjdG9yIiwiR2VuZXJhdGVQYXJraW5nLm9uQ3JlYXRlUGFya2luZyIsIkdlbmVyYXRlUGFya2luZy52YWxpZGF0ZUlucHV0UGxhY2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFnRElBLHlCQUFvQkEsR0FBZ0JBLEVBQ2hCQSxlQUErQkEsRUFDL0JBLFdBQXVCQTtvQkFGdkJDLFFBQUdBLEdBQUhBLEdBQUdBLENBQWFBO29CQUNoQkEsb0JBQWVBLEdBQWZBLGVBQWVBLENBQWdCQTtvQkFDL0JBLGdCQUFXQSxHQUFYQSxXQUFXQSxDQUFZQTtvQkFFdkNBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBO3dCQUM5QkEsS0FBS0EsRUFBRUEsSUFBSUEsZ0JBQU9BLENBQUNBLElBQUlBLEVBQUVBLG1CQUFVQSxDQUFDQSxRQUFRQSxDQUFDQTt3QkFDN0NBLFFBQVFBLEVBQUVBLElBQUlBLGdCQUFPQSxDQUFDQSxFQUFFQSxDQUFDQTt3QkFDekJBLEtBQUtBLEVBQUVBLElBQUlBLGdCQUFPQSxDQUFDQSxFQUFFQSxDQUFDQTtxQkFDekJBLEVBQUVBLEVBQUNBLFNBQVNBLEVBQUVBLElBQUlBLENBQUNBLG1CQUFtQkEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlDQSxDQUFDQTtnQkFFREQseUNBQWVBLEdBQWZBLFVBQWdCQSxLQUFLQTtvQkFDakJFLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO29CQUNqQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBRTVDQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQTtvQkFDM0NBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBO29CQUNoQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBRTFCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxlQUFlQSxDQUFDQTtvQkFDbkRBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLGlCQUFpQkEsQ0FBQ0E7b0JBQ3hEQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxjQUFjQSxDQUFDQTtnQkFDdERBLENBQUNBO2dCQUVERiw2Q0FBbUJBLEdBQW5CQSxVQUFvQkEsS0FBbUJBO29CQUNuQ0csSUFBSUEsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsSUFBSUEsQ0FBQ0EsRUFDMUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLEtBQUtBLElBQUlBLENBQUNBLEVBQ2hEQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxLQUFLQSxJQUFJQSxDQUFDQSxFQUUxQ0EsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBRWpCQSxFQUFFQSxDQUFDQSxDQUFFQSxLQUFLQSxHQUFHQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQSxJQUFJQSxRQUFRQSxHQUFHQSxDQUFDQSxJQUFJQSxLQUFLQSxHQUFHQSxDQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDNURBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNsQkEsQ0FBQ0E7b0JBQ0RBLEVBQUVBLENBQUNBLENBQUVBLEtBQU1BLENBQUNBLENBQUNBLENBQUNBO3dCQUNWQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtvQkFDaEJBLENBQUNBO29CQUVEQSxNQUFNQSxDQUFDQTt3QkFDSEEsbUJBQW1CQSxFQUFFQSxJQUFJQTtxQkFDNUJBLENBQUNBO2dCQUNOQSxDQUFDQTtnQkF6RkxIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGtCQUFrQkE7d0JBQzVCQSxRQUFRQSxFQUFFQSw4K0NBK0JUQTtxQkFDSkEsQ0FBQ0E7O29DQXdEREE7Z0JBQURBLHNCQUFDQTtZQUFEQSxDQTFGQSxBQTBGQ0EsSUFBQTtZQTFGRCw2Q0EwRkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dlbmVyZXRlLXBhcmtpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuaW1wb3J0IHtQYXJraW5nU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvcGFya2luZy5zZXJ2aWNlJztcbmltcG9ydCB7Q2FyU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvY2FyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dlbmVyYXRlLXBhcmtpbmcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj48Yj5DcmVhdGUgUGFya2luZzwvYj48L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2VuZXJhdGUtcGFya2luZ1wiPlxuICAgICAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cInBhcmtpbmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uQ3JlYXRlUGFya2luZyhwYXJraW5nRm9ybS52YWx1ZSlcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgbmFtZT1cInRvdGFsXCIgICAgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVG90YWxcIiAgICAgICBuZ0NvbnRyb2w9XCJ0b3RhbFwiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgICAgICAgICAgbmFtZT1cImRpc2FibGVkXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRGlzYWJsZWRcIiAgICBuZ0NvbnRyb2w9XCJkaXNhYmxlZFwiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgICAgICAgICAgbmFtZT1cInRydWNrXCIgICAgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiVHJ1Y2tcIiAgICAgICBuZ0NvbnRyb2w9XCJ0cnVja1wiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhcmtpbmctZXJyb3JcIiAqbmdJZj1cIiFwYXJraW5nRm9ybS52YWxpZFwiPlN1bSAoIERpc2FibGVkICsgVHJ1Y2sgKSBtdXN0IGJlIGxlc3MgdGhhbiAtIFRvdGFsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFwYXJraW5nRm9ybS52YWxpZFwiIHR5cGU9XCJzdWJtaXRcIj5HZW5lcmF0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5TZWRhbiBwbGFjZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+RGlzYWJsZWQgcGxhY2VzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPlRyYWNrIHBsYWNlczwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5QYXJraW5nIHBsYWNlczwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e3BTZWRhbiB8fCAwfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3twRGlzYWJsZWQgfHwgMH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7cFRydWNrIHx8IDB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5QTGFjZXMgbGVmdDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2FTZWRhbiB8fCAwfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3thRGlzYWJsZWQgfHwgMH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7YVRydWNrIHx8IDB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZVBhcmtpbmcge1xuXG4gICAgcHJpdmF0ZSBwU2VkYW46IG51bWJlcjtcbiAgICBwcml2YXRlIHBEaXNhYmxlZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcFRydWNrOiBudW1iZXI7XG5cbiAgICBwcml2YXRlIGFTZWRhbjogbnVtYmVyO1xuICAgIHByaXZhdGUgYURpc2FibGVkOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBhVHJ1Y2s6IG51bWJlcjtcblxuICAgIHB1YmxpYyBwYXJraW5nRm9ybTogQ29udHJvbEdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3BhcmtpbmdTZXJ2aWNlOiBQYXJraW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlKSB7XG5cbiAgICAgICAgdGhpcy5wYXJraW5nRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcbiAgICAgICAgICAgIHRvdGFsOiBuZXcgQ29udHJvbCgnMTAnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBuZXcgQ29udHJvbCgnJyksXG4gICAgICAgICAgICB0cnVjazogbmV3IENvbnRyb2woJycpXG4gICAgICAgIH0sIHt2YWxpZGF0b3I6IHRoaXMudmFsaWRhdGVJbnB1dFBsYWNlc30pO1xuICAgIH1cblxuICAgIG9uQ3JlYXRlUGFya2luZyhwRm9ybSkge1xuICAgICAgICB0aGlzLl9jYXJTZXJ2aWNlLnJlbW92ZUFsbENhcnMoKTtcbiAgICAgICAgdGhpcy5fcGFya2luZ1NlcnZpY2UuZ2VuZXJhdGVQYXJraW5nKHBGb3JtKTtcblxuICAgICAgICB0aGlzLnBTZWRhbiA9IHBGb3JtLnRvdGFsIC0gcEZvcm0uZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMucERpc2FibGVkID0gcEZvcm0uZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMucFRydWNrID0gcEZvcm0udHJ1Y2s7XG5cbiAgICAgICAgdGhpcy5hU2VkYW4gPSB0aGlzLl9wYXJraW5nU2VydmljZS5hdmFpbGFibGVTZWRhbnM7XG4gICAgICAgIHRoaXMuYURpc2FibGVkID0gdGhpcy5fcGFya2luZ1NlcnZpY2UuYXZhaWxhYmxlRGlzYWJsZXM7XG4gICAgICAgIHRoaXMuYVRydWNrID0gdGhpcy5fcGFya2luZ1NlcnZpY2UuYXZhaWxhYmxlVHJ1Y2s7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVJbnB1dFBsYWNlcyhncm91cDogQ29udHJvbEdyb3VwKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IGdyb3VwLmNvbnRyb2xzWyd0b3RhbCddLnZhbHVlIHx8IDAsXG4gICAgICAgICAgICBkaXNhYmxlZCA9IGdyb3VwLmNvbnRyb2xzWydkaXNhYmxlZCddLnZhbHVlIHx8IDAsXG4gICAgICAgICAgICB0cnVjayA9IGdyb3VwLmNvbnRyb2xzWyd0cnVjayddLnZhbHVlIHx8IDAsXG5cbiAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIHRvdGFsIDwgKGRpc2FibGVkICsgdHJ1Y2spIHx8IGRpc2FibGVkIDwgMCB8fCB0cnVjayA8IDAgKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICggdmFsaWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWxpZGF0ZUlucHV0UGxhY2VzOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
