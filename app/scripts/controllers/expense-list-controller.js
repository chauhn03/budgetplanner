app.controller('ExpenseListController', function ($scope) {
    $scope.text = "Expense List";
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
            Expense: [{
                    Id: 1,
                    Name: "Xang"
                }]},
        {
            Id: 2,
            Group: "Chi phí đi lại",
            Expense: [{
                    Id: 4,
                    Name: "Xang"
                }]}
    ];

    $('.tree-toggle').click(function () {
        $(this).parent().children('ul.tree').toggle(200);
    });
});