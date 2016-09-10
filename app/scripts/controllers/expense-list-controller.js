'use strict';
app.controller('ExpenseListController', function ($scope, $timeout) {
    $scope.text = "Expense List";
    $scope.selectedExpense = null;
    $scope.selectedIncome = null;
    $scope.vm = this;
    $scope.expenseEditMode = false;
    $scope.incomeEditMode = false;
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
        listenExpenseGroupNodeClickEvent();
        listenIncomeNodeClickEvent();
    }, 500);

    $scope.onExpenseCancelClick = function () {
        $scope.expenseEditMode = false;
    };

    $scope.onIncomeCancelClick = function () {
        $scope.incomeEditMode = false;
    };

    function listenExpenseGroupNodeClickEvent() {
        var treeToggle = $('#expense-tree .tree-toggle');
        treeToggle.click(function () {
            var ulTree = $(this).parent().children('ul.tree');
            var label = $(this)[0];
            ulTree.toggle(500);
            var id = label.id ? parseInt(label.id) : null;
            expandExpenseGroupTreeView(id);
        });
    }

    function listenIncomeNodeClickEvent() {
        var treeToggle = $('#income-tree .tree-toggle');
        treeToggle.click(function () {
            var ulTree = $(this).parent().children('ul.tree');
            var label = $(this)[0];
            ulTree.toggle(500);
            var id = label.id ? parseInt(label.id) : null;
            expandExpenseGroupTreeView(id);
        });
    }

    function expandExpenseGroupTreeView(expenseGroupId) {
        $timeout(function () {
            var empenseGroup = _.find($scope.expenseGroups, {"Id": expenseGroupId});
            if (!empenseGroup) {
                return;
            }

            empenseGroup.Expand = !empenseGroup.Expand;
            console.log(empenseGroup);
        });
    }

    $scope.onSelectExpenseClick = function (expense) {
        $scope.selectedExpense = expense;
        $scope.groupId = expense.GroupId.toString();
        $scope.expenseEditMode = true;
    };

    $scope.onSelectIncomeClick = function (income) {
        $scope.selectedIncome = income;
        $scope.incomeEditMode = true;
    };
});