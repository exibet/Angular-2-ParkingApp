import {Directive, ElementRef} from 'angular2/core';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';
import {Animation} from 'angular2/src/animate/animation'

@Directive({
    selector : '[animate-car]',
    exportAs : 'a-car'
})
export class AnimateCar {
    private animTop: any;
    private animRotate: any;
    private animTurn: any;
    private animation: Animation;

    constructor(private _ab: AnimationBuilder, private _e: ElementRef) {
        this.animTop = this._ab.css();
        this.animRotate = this._ab.css();
        this.animTurn = this._ab.css();
    }

    setAnimation(car) {
        //let pTop:number  = ( car.animation.top === 343 ) ? car.animation.top - 28 : car.animation.top;
        var pTop:number  = car.animation.top;
        var pLeft:number = car.animation.left;
        var hCar: number = this._e.nativeElement.offsetHeight / 2;
        var rotate: string = ( car.animation.position === 'left' ) ? '90' : '-90';

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
    }

    start(car) {
        this.setAnimation( car );

        this.animation = this.animTop.start(this._e.nativeElement);
        this.animation.onComplete(this.rotate);
    }
    rotate = () => {
        this.animation = this.animRotate.start(this._e.nativeElement);
        this.animation.onComplete(this.turn);
    };
    turn = () => {
        this.animation = this.animTurn.start(this._e.nativeElement);
    };

}