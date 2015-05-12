'use strict';

(function () {
  'use strict';

  angular.module('starter').service('Users', Users);

  function Users($http) {
    var _users = [];

    return {
      all: all
    };

    function all(options) {
      options = options || {};

      if (options.sync) {
        $http.get('http://localhost:3000/users').then(console.log);
      }

      return _users;
    }
  }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy91c2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBVztBQUNWLGNBQVksQ0FBQzs7QUFFYixTQUFPLENBQ0osTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUNqQixPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDOztBQUUzQixXQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDcEIsUUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVoQixXQUFPO0FBQ0wsU0FBRyxFQUFFLEdBQUc7S0FDVCxDQUFDOztBQUVGLGFBQVMsR0FBRyxDQUFDLE9BQU8sRUFBRTtBQUNwQixhQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7QUFFeEIsVUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ2hCLGFBQUssQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUN0Qjs7QUFFRCxhQUFPLE1BQU0sQ0FBQztLQUNmO0dBQ0Y7Q0FDRixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJtb2RlbHMvdXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnc3RhcnRlcicpXG4gICAgLnNlcnZpY2UoJ1VzZXJzJywgVXNlcnMpO1xuXG4gIGZ1bmN0aW9uIFVzZXJzKCRodHRwKSB7XG4gICAgdmFyIF91c2VycyA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbDogYWxsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFsbChvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgaWYgKG9wdGlvbnMuc3luYykge1xuICAgICAgICAkaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VycycpXG4gICAgICAgICAgLnRoZW4oY29uc29sZS5sb2cpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3VzZXJzO1xuICAgIH1cbiAgfVxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==