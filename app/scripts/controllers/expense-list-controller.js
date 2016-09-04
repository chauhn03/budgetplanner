app.controller('ExpenseListController', function ($scope, $timeout) {
    $scope.text = "Expense List";   
    $('.tree-toggle').click(function () {
	$(this).parent().children('ul.tree').toggle(200);
});
});