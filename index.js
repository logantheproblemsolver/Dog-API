'use strict';

function getImage() {
    fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(response => response.json()) 
        .then(responseJson => 
            displayResults(responseJson))
        .catch(error => alert('Please check your internet or the server might be down.'));
        console.log('getImage ran')
    }

function displayResults() {
    $('.img-results').replaceWith(`<img src="${responeJson.message}" class="img-results">`)
    $('.results').removeClass('hidden');
    console.log('displayResults ran');
}

function pressSubmit() {
    $('.submit').on('click', function(s) {
        s.preventDefault();
        getImage();
        console.log('pressSubmit ran');
    });
}

$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});