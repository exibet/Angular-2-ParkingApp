System.register([], function(exports_1) {
    var CarModel;
    return {
        setters:[],
        execute: function() {
            CarModel = (function () {
                function CarModel(type, animation) {
                    if (animation === void 0) { animation = {
                        top: null,
                        left: null,
                        position: null
                    }; }
                    this.type = type;
                    this.animation = animation;
                    this.id = this.generateCarNumber();
                }
                CarModel.prototype.generateCarNumber = function () {
                    var rdNumber = '' + Math.floor((Math.random() * 1000) + 1);
                    //let rdString = Math.random().toString(36).substr(2, 2);
                    return 'AA ' + ('0000' + rdNumber).substring(rdNumber.length) + ' CK';
                };
                return CarModel;
            })();
            exports_1("CarModel", CarModel);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Nhci5tb2RlbC50cyJdLCJuYW1lcyI6WyJDYXJNb2RlbCIsIkNhck1vZGVsLmNvbnN0cnVjdG9yIiwiQ2FyTW9kZWwuZ2VuZXJhdGVDYXJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7O1lBQUE7Z0JBR0lBLGtCQUNXQSxJQUFZQSxFQUNaQSxTQUlOQTtvQkFKREMseUJBSUNBLEdBSkRBO3dCQUNJQSxHQUFHQSxFQUFFQSxJQUFJQTt3QkFDVEEsSUFBSUEsRUFBRUEsSUFBSUE7d0JBQ1ZBLFFBQVFBLEVBQUVBLElBQUlBO3FCQUNqQkE7b0JBTE1BLFNBQUlBLEdBQUpBLElBQUlBLENBQVFBO29CQUNaQSxjQUFTQSxHQUFUQSxTQUFTQSxDQUlmQTtvQkFSTEEsT0FBRUEsR0FBVUEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxFQUFFQSxDQUFDQTtnQkFTbENBLENBQUNBO2dCQUVKRCxvQ0FBaUJBLEdBQWpCQTtvQkFDSUUsSUFBSUEsUUFBUUEsR0FBR0EsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzNEQSx5REFBeURBO29CQUV6REEsTUFBTUEsQ0FBQ0EsS0FBS0EsR0FBR0EsQ0FBQ0EsTUFBTUEsR0FBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3pFQSxDQUFDQTtnQkFDTEYsZUFBQ0E7WUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7WUFsQkQsK0JBa0JDLENBQUEiLCJmaWxlIjoic2VydmljZXMvY2FyLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhck1vZGVsIHtcbiAgICBpZDpzdHJpbmcgPSB0aGlzLmdlbmVyYXRlQ2FyTnVtYmVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGFuaW1hdGlvbjogYW55ID0ge1xuICAgICAgICAgICAgdG9wOiBudWxsLFxuICAgICAgICAgICAgbGVmdDogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsXG4gICAgICAgIH1cbiAgICApIHt9XG5cbiAgICBnZW5lcmF0ZUNhck51bWJlcigpIHtcbiAgICAgICAgbGV0IHJkTnVtYmVyID0gJycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxKTtcbiAgICAgICAgLy9sZXQgcmRTdHJpbmcgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMik7XG5cbiAgICAgICAgcmV0dXJuICdBQSAnICsgKCcwMDAwJysgcmROdW1iZXIpLnN1YnN0cmluZyhyZE51bWJlci5sZW5ndGgpICsgJyBDSyc7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
