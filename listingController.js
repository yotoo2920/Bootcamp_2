angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = "";
    $scope.itemToBeFound = "";

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if ($scope.newListing !== ""){
        console.log("llegue aqui");
        $scope.listings.push($scope.newListing);
        $scope.newListing = "";
      }
    };

    $scope.deleteListing = function(index) {
      console.log(index);
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
      console.log(detailedInfo);
      console.log("show");
    };

    // $scope.searchItem = function(itemToBeFound) {
    //   if (itemToBeFound !== "")
    //   {
    //     document.getElementById('info').style.display = 'block';
    //   }
    //   // else
    //   // {
    //   //   delete all listing
    //   // }
    // };
  }
]);