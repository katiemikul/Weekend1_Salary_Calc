console.log('Weekend Homework!')
$(document).ready(onReady);

let addingSalary = 0;

function onReady(){
    console.log("we are ready!");
    $('#submitButton').on('click', runAnnualSalary);
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
                    '<td>' + $('.annualSalaryInput').val() + '</td>' +
                '</tr>'
);
    clearEmployee();
    runAnnualSalary();
}

function clearEmployee(){
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('.annualSalaryInput').val('');
}

function runAnnualSalary(){
    console.log("Submit button was clicked!");
    addingSalary+=
    console.log(addingSalary);
    updatetotalSalary();
    $('.totalMonthly').text(parseInt(addingSalary));

    $("#annualSalary").each(function() {
        let value = $(this).text();
      
        if(!isNaN(value) && value.length != 0) {
       console.log(value, parseFloat(value));
            sum += parseFloat(value);
        }
 
})


function updatetotalSalary(){
    $('.totalMonthly').text(addingSalary);
}
}