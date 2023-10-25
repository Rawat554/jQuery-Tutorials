$(document).ready(function () {



    //var value = $('#idOne').val(); // to get value from input 
    //console.log(value)

   // $('.inputOne').val("Hello World"); // to set a value in input


    //$('#btnOne').click(function () {
    //    var element = `<button id="btnTwo" data-value="Hello World">Btn Two</button>`;
    //    $('#divOne').append(element);
    //})




    $('#btnOne').click(function () {
        //console.log($('input[type="radio"]:checked').val())

        var data = {
            "StudentName": "temp",
            "FatherName": "xyz",
            "CollegeName": "CGC",
            "CourseName": "BCA",
            "Gender": "Male",
            "Age": "23",
            "Country": "101",
            "State": "32",
            "IsActive": "true",
            "id":"10"
        }



        //$.ajax(

        //    {
        //        url: "",
        //        type: "",
        //        data: {}

        //    }

        //)




        // Asyncronus
        // async



        $.ajax({
            url: '../Home/GetData',
            type: "get",
            //data: data,
            datatype: 'application/json',
            success: function (res) {
                console.log(res)
            },
            error: function (err) {
                console.log(err)
            }
        })
        
    })



   


})


$(document).on('click', '#btnTwo', function () {
    alert('Hello')
})

$(document).on('click', '.getData', function () {

    //var compData = $(this).parent().parent().find('.comp').text();


    var compData = $(this).parents().eq(1).find('.comp').text();

    console.log(compData)
})


/*
    jQuery Selectors

    tag selector => tag name

    id selector =>  #

    class selector => .

    prop name => []

*/


// DOM manupulation

// Ajax function of jquery



// upcomming

// target and current targate  and event propagation



var divRed = document.getElementById('red')
var divGreen = document.getElementById('green')
var divBlue = document.getElementById('blue')

var defaultCapture = true;

divRed.addEventListener('click', function (e) {
    //e.stopPropagation()
    console.log(`tatget is ${e.target.id} and current target is ${e.currentTarget.id} in red div`)
    
},defaultCapture)

divGreen.addEventListener('click', function (e) {
    //e.stopPropagation()
    console.log(`tatget is ${e.target.id} and current target is ${e.currentTarget.id} in green div`)
},defaultCapture)

divBlue.addEventListener('click', function (e) {
    //e.stopPropagation()
    console.log(`tatget is ${e.target.id} and current target is ${e.currentTarget.id} in blue div`)
}, defaultCapture)



// Ajax




