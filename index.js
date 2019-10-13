'use strict';


function getImage(number, select) {
    if (select===""){
        fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
            .then(response => response.json()) 
            .then(responseJson => 
                displayResults(responseJson))
            .catch(error => alert('Please check your internet or the server might be down.'));
    } else {
        fetch(`https://dog.ceo/api/breed/${select}/images/random/${number}`)
            .then(response => response.json())
            .then(responseJson => 
                displayResults(responseJson))
            .catch(error => alert('Please check your internet or the server might be down.'));
    }
}



function displayResults(responseJson) {
    $('.results').append(`<h2>Look at this dog!</h2>`)
    responseJson.message.forEach( dogs => {
    $('.results').append(`
    <img src="${dogs}" alt="Random Doggo!" class="img-results">`) 
    });
    $('.results').removeClass('hidden');
}

function pressSubmit() {
    $('.submit').on('click', function(s) {
        let breed = $('.breeds').val().replace('-', '/');
        let select = breed;
        let number = $('.inputs').val();
        s.preventDefault(); 
        getImage(number, select);
        $('.results').empty();
    });
}

$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});

