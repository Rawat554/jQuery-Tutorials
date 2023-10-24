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



        var table = `<table class="tbl">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td class="comp">Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td><button class="getData">Get Data</button></td>
  </tr>
  <tr>
    <td class="comp">Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td><button class="getData">Get Data</button></td>
  </tr>
  <tr>
    <td class="comp">Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td><button class="getData">Get Data</button></td>
  </tr>
  <tr>
    <td class="comp">Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td><button class="getData">Get Data</button></td>
  </tr>
  <tr>
    <td class="comp">Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
    <td><button class="getData">Get Data</button></td>
  </tr>
  <tr>
    <td class="comp">Magazzini Alimentari Riuniti</td>
    <td class="contact">Giovanni Rovelli</td>
    <td class="country">Italy</td>
    <td><button class="getData">Get Data</button></td>
  </tr>
</table>`


        $('#form').empty();

        $('#form').append(table);

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

// target and current targate



