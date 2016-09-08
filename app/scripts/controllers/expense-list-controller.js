'use strict';

app.controller('ExpenseListController', function ($scope, $timeout) {
    $scope.text = "Expense List";
    $scope.selectExpense;
    $scope.vm = this;
    $scope.editMode = false;
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
                    Name: "Xang",
                    GroupId: 1
                }]},
        {
            Id: 2,
            Group: "Nhà ở",
            Expand: true,
            Expense: [{
                    Id: 4,
                    Name: "Sửa chữa",
                    GroupId: 2
                }]}
    ];

    $scope.groupId = "1";
    $timeout(function () {
        var treeToggle = $('.tree-toggle');
        treeToggle.click(function () {
            var ulTree = $(this).parent().children('ul.tree');
            var label = $(this)[0];
            ulTree.toggle(500);
            var id = label.id ? parseInt(label.id) : null;
            expandGroupTreeView(id);
        });
    }, 500);

    $scope.onCancelClick = function() {
        $scope.editMode = false;
    }

    function expandGroupTreeView(expenseGroupId) {
        $timeout(function () {
            var empenseGroup = _.find($scope.expenseGroups, {"Id": expenseGroupId});
            if (!empenseGroup)
                return;

            empenseGroup.Expand = !empenseGroup.Expand;
            console.log(empenseGroup);
        });
    }

    $scope.onSelectExpenseClick = function (expense) {
        $scope.selectExpense = expense;
        $scope.groupId = expense.GroupId.toString();
        $scope.editMode = true;
    };
});