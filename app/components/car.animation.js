System.register(['angular2/core', 'angular2/src/animate/animation_builder'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, animation_builder_1;
    var AnimateCar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animation_builder_1_1) {
                animation_builder_1 = animation_builder_1_1;
            }],
        execute: function() {
            AnimateCar = (function () {
                function AnimateCar(_ab, _e) {
                    var _this = this;
                    this._ab = _ab;
                    this._e = _e;
                    this.rotate = function () {
                        _this.animation = _this.animRotate.start(_this._e.nativeElement);
                        _this.animation.onComplete(_this.turn);
                    };
                    this.turn = function () {
                        _this.animation = _this.animTurn.start(_this._e.nativeElement);
                    };
                    this.animTop = this._ab.css();
                    this.animRotate = this._ab.css();
                    this.animTurn = this._ab.css();
                }
                AnimateCar.prototype.setAnimation = function (car) {
                    //let pTop:number  = ( car.animation.top === 343 ) ? car.animation.top - 28 : car.animation.top;
                    var pTop = car.animation.top;
                    var pLeft = car.animation.left;
                    var hCar = this._e.nativeElement.offsetHeight / 2;
                    var rotate = (car.animation.position === 'left') ? '90' : '-90';
                    this.animTop
                        .setDuration(1000)
                        .addAnimationClass('drive')
                        .setFromStyles({
                        top: pTop - hCar + 'px',
                    });
                    this.animRotate
                        .setDuration(1500)
                        .setFromStyles({
                        transform: 'rotate(' + rotate + 'deg)',
                        'transform-origin': 'center center',
                    });
                    this.animTurn
                        .setDuration(1500)
                        .setFromStyles({
                        left: pLeft - 50 + 'px',
                    });
                };
                AnimateCar.prototype.start = function (car) {
                    this.setAnimation(car);
                    this.animation = this.animTop.start(this._e.nativeElement);
                    this.animation.onComplete(this.rotate);
                };
                AnimateCar = __decorate([
                    core_1.Directive({
                        selector: '[animate-car]',
                        exportAs: 'a-car'
                    }), 
                    __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_1.ElementRef])
                ], AnimateCar);
                return AnimateCar;
            })();
            exports_1("AnimateCar", AnimateCar);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyLmFuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJBbmltYXRlQ2FyIiwiQW5pbWF0ZUNhci5jb25zdHJ1Y3RvciIsIkFuaW1hdGVDYXIuc2V0QW5pbWF0aW9uIiwiQW5pbWF0ZUNhci5zdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBVUlBLG9CQUFvQkEsR0FBcUJBLEVBQVVBLEVBQWNBO29CQVZyRUMsaUJBd0RDQTtvQkE5Q3VCQSxRQUFHQSxHQUFIQSxHQUFHQSxDQUFrQkE7b0JBQVVBLE9BQUVBLEdBQUZBLEVBQUVBLENBQVlBO29CQXNDakVBLFdBQU1BLEdBQUdBO3dCQUNMQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTt3QkFDOURBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQUNBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUN6Q0EsQ0FBQ0EsQ0FBQ0E7b0JBQ0ZBLFNBQUlBLEdBQUdBO3dCQUNIQSxLQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQTtvQkFDaEVBLENBQUNBLENBQUNBO29CQTNDRUEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBQzlCQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDakNBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNuQ0EsQ0FBQ0E7Z0JBRURELGlDQUFZQSxHQUFaQSxVQUFhQSxHQUFHQTtvQkFDWkUsZ0dBQWdHQTtvQkFDaEdBLElBQUlBLElBQUlBLEdBQVdBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBO29CQUNyQ0EsSUFBSUEsS0FBS0EsR0FBVUEsR0FBR0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7b0JBQ3RDQSxJQUFJQSxJQUFJQSxHQUFXQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDMURBLElBQUlBLE1BQU1BLEdBQVdBLENBQUVBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLFFBQVFBLEtBQUtBLE1BQU1BLENBQUVBLEdBQUdBLElBQUlBLEdBQUdBLEtBQUtBLENBQUNBO29CQUUxRUEsSUFBSUEsQ0FBQ0EsT0FBT0E7eUJBQ1BBLFdBQVdBLENBQUNBLElBQUlBLENBQUNBO3lCQUNqQkEsaUJBQWlCQSxDQUFDQSxPQUFPQSxDQUFDQTt5QkFDMUJBLGFBQWFBLENBQUNBO3dCQUNYQSxHQUFHQSxFQUFFQSxJQUFJQSxHQUFHQSxJQUFJQSxHQUFHQSxJQUFJQTtxQkFDMUJBLENBQUNBLENBQUNBO29CQUNQQSxJQUFJQSxDQUFDQSxVQUFVQTt5QkFDVkEsV0FBV0EsQ0FBQ0EsSUFBSUEsQ0FBQ0E7eUJBQ2pCQSxhQUFhQSxDQUFDQTt3QkFDWEEsU0FBU0EsRUFBRUEsU0FBU0EsR0FBR0EsTUFBTUEsR0FBR0EsTUFBTUE7d0JBQ3RDQSxrQkFBa0JBLEVBQUVBLGVBQWVBO3FCQUN0Q0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1BBLElBQUlBLENBQUNBLFFBQVFBO3lCQUNSQSxXQUFXQSxDQUFDQSxJQUFJQSxDQUFDQTt5QkFDakJBLGFBQWFBLENBQUNBO3dCQUNYQSxJQUFJQSxFQUFFQSxLQUFLQSxHQUFHQSxFQUFFQSxHQUFHQSxJQUFJQTtxQkFDMUJBLENBQUNBLENBQUNBO2dCQUNYQSxDQUFDQTtnQkFFREYsMEJBQUtBLEdBQUxBLFVBQU1BLEdBQUdBO29CQUNMRyxJQUFJQSxDQUFDQSxZQUFZQSxDQUFFQSxHQUFHQSxDQUFFQSxDQUFDQTtvQkFFekJBLElBQUlBLENBQUNBLFNBQVNBLEdBQUdBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO29CQUMzREEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzNDQSxDQUFDQTtnQkEvQ0xIO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUdBLGVBQWVBO3dCQUMxQkEsUUFBUUEsRUFBR0EsT0FBT0E7cUJBQ3JCQSxDQUFDQTs7K0JBcUREQTtnQkFBREEsaUJBQUNBO1lBQURBLENBeERBLEFBd0RDQSxJQUFBO1lBeERELG1DQXdEQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FyLmFuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QW5pbWF0aW9uQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2FuaW1hdGUvYW5pbWF0aW9uX2J1aWxkZXInO1xuaW1wb3J0IHtBbmltYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbidcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3IgOiAnW2FuaW1hdGUtY2FyXScsXG4gICAgZXhwb3J0QXMgOiAnYS1jYXInXG59KVxuZXhwb3J0IGNsYXNzIEFuaW1hdGVDYXIge1xuICAgIHByaXZhdGUgYW5pbVRvcDogYW55O1xuICAgIHByaXZhdGUgYW5pbVJvdGF0ZTogYW55O1xuICAgIHByaXZhdGUgYW5pbVR1cm46IGFueTtcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogQW5pbWF0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWI6IEFuaW1hdGlvbkJ1aWxkZXIsIHByaXZhdGUgX2U6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5hbmltVG9wID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgICAgIHRoaXMuYW5pbVJvdGF0ZSA9IHRoaXMuX2FiLmNzcygpO1xuICAgICAgICB0aGlzLmFuaW1UdXJuID0gdGhpcy5fYWIuY3NzKCk7XG4gICAgfVxuXG4gICAgc2V0QW5pbWF0aW9uKGNhcikge1xuICAgICAgICAvL2xldCBwVG9wOm51bWJlciAgPSAoIGNhci5hbmltYXRpb24udG9wID09PSAzNDMgKSA/IGNhci5hbmltYXRpb24udG9wIC0gMjggOiBjYXIuYW5pbWF0aW9uLnRvcDtcbiAgICAgICAgdmFyIHBUb3A6bnVtYmVyICA9IGNhci5hbmltYXRpb24udG9wO1xuICAgICAgICB2YXIgcExlZnQ6bnVtYmVyID0gY2FyLmFuaW1hdGlvbi5sZWZ0O1xuICAgICAgICB2YXIgaENhcjogbnVtYmVyID0gdGhpcy5fZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCAvIDI7XG4gICAgICAgIHZhciByb3RhdGU6IHN0cmluZyA9ICggY2FyLmFuaW1hdGlvbi5wb3NpdGlvbiA9PT0gJ2xlZnQnICkgPyAnOTAnIDogJy05MCc7XG5cbiAgICAgICAgdGhpcy5hbmltVG9wXG4gICAgICAgICAgICAuc2V0RHVyYXRpb24oMTAwMClcbiAgICAgICAgICAgIC5hZGRBbmltYXRpb25DbGFzcygnZHJpdmUnKVxuICAgICAgICAgICAgLnNldEZyb21TdHlsZXMoe1xuICAgICAgICAgICAgICAgIHRvcDogcFRvcCAtIGhDYXIgKyAncHgnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbVJvdGF0ZVxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKCcgKyByb3RhdGUgKyAnZGVnKScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnY2VudGVyIGNlbnRlcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltVHVyblxuICAgICAgICAgICAgLnNldER1cmF0aW9uKDE1MDApXG4gICAgICAgICAgICAuc2V0RnJvbVN0eWxlcyh7XG4gICAgICAgICAgICAgICAgbGVmdDogcExlZnQgLSA1MCArICdweCcsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydChjYXIpIHtcbiAgICAgICAgdGhpcy5zZXRBbmltYXRpb24oIGNhciApO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltVG9wLnN0YXJ0KHRoaXMuX2UubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLm9uQ29tcGxldGUodGhpcy5yb3RhdGUpO1xuICAgIH1cbiAgICByb3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltUm90YXRlLnN0YXJ0KHRoaXMuX2UubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLm9uQ29tcGxldGUodGhpcy50dXJuKTtcbiAgICB9O1xuICAgIHR1cm4gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hbmltVHVybi5zdGFydCh0aGlzLl9lLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH07XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
