export class ParkingPlace {
    constructor(
        public id: number,
        public type: string,
        public car: any = null,
        public offset: any = {
            top: null,
            left: null,
            position: null
        }
    ) {}
}