app.controller('app-Controller', function ($scope) {
    $scope.collapeSideBar = function () {
        if ($("body.sidebar-collapse")[0])
        {
            $("body").removeClass("sidebar-collapse");
        } else
        {
            $("body").addClass("sidebar-collapse");
        }
    };
});
