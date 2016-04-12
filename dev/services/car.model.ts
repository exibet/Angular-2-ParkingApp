export class CarModel {
    id:string = this.generateCarNumber();

    constructor(
        public type: string,
        public animation: any = {
            top: null,
            left: null,
            position: null
        }
    ) {}

    generateCarNumber() {
        let rdNumber = '' + Math.floor((Math.random() * 1000) + 1);
        //let rdString = Math.random().toString(36).substr(2, 2);

        return 'AA ' + ('0000'+ rdNumber).substring(rdNumber.length) + ' CK';
    }
}