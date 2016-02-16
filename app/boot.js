System.register(['angular2/platform/browser', "./app.component", './services/car.service', './services/parking.service', './components/generate-car.component'], function(exports_1) {
    var browser_1, app_component_1, car_service_1, parking_service_1, generate_car_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            },
            function (parking_service_1_1) {
                parking_service_1 = parking_service_1_1;
            },
            function (generate_car_component_1_1) {
                generate_car_component_1 = generate_car_component_1_1;
            }],
        execute: function() {
            //noinspection TypeScriptValidateTypes
            browser_1.bootstrap(app_component_1.ParkingApp, [car_service_1.CarService, parking_service_1.ParkingService, generate_car_component_1.GenerateCar]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQSxzQ0FBc0M7WUFDdEMsbUJBQVMsQ0FBQywwQkFBVSxFQUFFLENBQUMsd0JBQVUsRUFBRSxnQ0FBYyxFQUFFLG9DQUFXLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJvb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge1BhcmtpbmdBcHB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHtDYXJTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2Nhci5zZXJ2aWNlJztcbmltcG9ydCB7UGFya2luZ1NlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvcGFya2luZy5zZXJ2aWNlJztcbmltcG9ydCB7R2VuZXJhdGVDYXJ9IGZyb20gJy4vY29tcG9uZW50cy9nZW5lcmF0ZS1jYXIuY29tcG9uZW50J1xuXG4vL25vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VmFsaWRhdGVUeXBlc1xuYm9vdHN0cmFwKFBhcmtpbmdBcHAsIFtDYXJTZXJ2aWNlLCBQYXJraW5nU2VydmljZSwgR2VuZXJhdGVDYXJdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
