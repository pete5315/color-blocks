$(onReady)

console.log('🟥 🟦 🟩 🟨');

function onReady() {
    $('#blocks').on('click', '.block', removeBlock);
    $('#red-btn').on('click', appendRedBlock);
    $('#blue-btn').on('click', appendBlueBlock);
    $('#green-btn').on('click', appendGreenBlock);
    $('#yellow-btn').on('click', appendYellowBlock);



    function appendRedBlock() {
        $('#blocks').append('<div class="block red-fill"></p>');
    }

    function appendBlueBlock() {
        $('#blocks').append('<div class="block blue-fill"></p>');
    }

    function appendYellowBlock() {
        $('#blocks').append('<div class="block yellow-fill"></p>');
    }

    function appendGreenBlock() {
        $('#blocks').append('<div class="block green-fill"></p>');
    }





    

/* 
    function removeBlock() {
        $(this).remove();
    } */

}