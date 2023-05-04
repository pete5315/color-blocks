$(onReady)

console.log('🟥 🟦 🟩 🟨');

function onReady() {
    $('#blocks').on('click', '.block', removeBlock);
    $('#red-btn').on('click', appendRedBlock);
    $('#blue-btn').on('click', appendBlueBlock);
    $('#green-btn').on('click', appendGreenBlock);
    $('#yellow-btn').on('click', appendYellowBlock);

let red=1, blue=1, green=1, yellow=1;

    function appendRedBlock() {
        $('#blocks').append('<div class="block red-fill"></p>');
        redRecount();
    }

    function redRecount() {
        $('#red-count').empty();
        $('#red-count').append($('.red-fill').length);    
    }

    function appendBlueBlock() {
        $('#blocks').append('<div class="block blue-fill"></p>');
        $('#blue-count').empty();
        blue++;
        $('#blue-count').append(blue);
    }

    function blueRecount() {
        $('#blue-count').empty();
        $('#blue-count').append($('.blue-fill').length);    
    }

    function appendYellowBlock() {
        $('#blocks').append('<div class="block yellow-fill"></p>');
        $('#yellow-count').empty();
        yellow++;
        $('#yellow-count').append(yellow);
    }

    function yellowRecount() {
        $('#yellow-count').empty();
        $('#yellow-count').append($('.yellow-fill').length);    
    }

    function appendGreenBlock() {
        $('#blocks').append('<div class="block green-fill"></p>');
        $('#green-count').empty();
        green++;
        $('#green-count').append(green);
    }

    function greenRecount() {
        $('#green-count').empty();
        $('#green-count').append($('.green-fill').length);    
    }


    function removeBlock() {
        $(this).remove();
        redRecount();
        blueRecount();
        greenRecount();
        yellowRecount()
    }

}