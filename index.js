'use strict';

let select = document.getElementById('breedSelect')
let number = $('.inputs').val()


function getImage() {
    console.log(number)
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
        s.preventDefault();
        getImage();
    });
}

$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});

