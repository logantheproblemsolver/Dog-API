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

function displayResults(responeJson) {
    $('.img-results').replaceWith(`<img src="${responeJson.message}" alt="Random Doggo!" class="img-results">`)
    $('.results').removeClass('hidden');
}

function pressSubmit() {
    $('.submit').on('click', function(s) {
        let breed = $('.breeds').val().replace('-', '/');
        let select = breed;
        let number = $('.inputs').val();
        console.log(select);
        s.preventDefault(); 
        getImage(number, select);
    });
}

$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});

