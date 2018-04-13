console.log('Weekend Homework!')
$(document).ready(onReady);

function onReady(){
    console.log("we are ready!");
    $('#submitButton').on('click', function(){
        console.log('We are clicking!');
        addNewEmployee();
    })
}

function addNewEmployee(){
console.log('Adding a new employee!');
$('#createNewEmployee').append(
    '<tr>' +
                    '<td>' + $('#firstNameInput').val() + '</td>' +
                    '<td>' + $('#lastNameInput').val() + '</td>' +
                    '<td>' + $('#idInput').val() + '</td>' +
                    '<td>' + $('#titleInput').val() + '</td>' +
                    '<td>' + $('#annualSalaryInput').val() + '</td>' +
                '</tr>'
);
    clearEmployee();
}

function clearEmployee(){
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}