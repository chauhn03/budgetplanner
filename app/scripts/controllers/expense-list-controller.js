'use strict';

app.controller('ExpenseListController', function ($scope, $timeout) {
    $scope.text = "Expense List";
    $scope.selectExpense;
    $scope.vm = this;
    $scope.incomes = [
        {Id: 1, Name: "Lương"},
        {Id: 2, Name: "Phụ cấp"},
        {Id: 3, Name: "Thưởng"}
    ];
    $scope.expenseGroups = [
        {
            Id: 1,
            Group: "Chi phí đi lại",
            Expand: true,
            Expense: [{
                    Id: 1,
                    Name: "Xang"
                }]},
        {
            Id: 2,
            Group: "Nhà ở",
            Expand: true,
            Expense: [{
                    Id: 4,
                    Name: "Sửa chữa"
                }]}
    ];

    $timeout(function () {
        $('.tree-toggle').click(function () {
            var ulTree = $(this).parent().children('ul.tree');
            var label = $(this)[0];
            ulTree.toggle(500);
            var value = ulTree.val();
            var id = label.id ? parseInt(label.id) : null;


            $timeout(function () {
                var empenseGroup = _.find($scope.expenseGroups, {"Id": id});
                empenseGroup.Expand = !empenseGroup.Expand;
                console.log(empenseGroup);
            });
        });
    });

    $scope.onSelectExpenseClick = function (expense) {
        $scope.selectExpense= expense;
//        alert(expense.Name);
    }
});