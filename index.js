'use strict';

let select = document.getElementById('breedSelect')


function getImage(number) {
    fetch(`https://dog.ceo/api/breeds/image/random/"${number}"`)
        .then(response => response.json()) 
        .then(responseJson => 
            displayResults(responseJson))
        .catch(error => alert('Please check your internet or the server might be down.'));
        console.log('getImage ran the if statement')
    }

function displayResults(responeJson) {
    $('.img-results').replaceWith(`<img src="${responeJson.message}" alt="Random Doggo!" class="img-results">`)
    $('.results').removeClass('hidden');
}

function pressSubmit() {
    $('.submit').on('click', function(s) {
        let number = $('.inputs').val()
        console.log(number);
        s.preventDefault(); 
        getImage(number);
    });
}

$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});

