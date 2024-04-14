document.getElementById('yesBtn').addEventListener('click', function() {
    // Add GIF box
    const gifBox = document.createElement('div');
    gifBox.classList.add('gif-box');
    gifBox.innerHTML = `
        <img src="https://media.giphy.com/media/emBMDnb7PSnne7IBWV/giphy.gif" alt="GIF" class="gif">
    `;
    document.querySelector('.gif-container').innerHTML = ''; // Clear existing content
    document.querySelector('.gif-container').appendChild(gifBox);

    // Update the header and buttons
    document.querySelector('.question').innerHTML = `
        <h1>Will you go to prom with me?</h1>
        <div class="buttons">
            <button id="yesBtn2">Yes!</button>
            <button id="noBtn2">No :(</button>
        </div>

    `;
    document.getElementById('yesBtn2').addEventListener('click', function() {
        document.querySelector('.container').classList.add('page4');
        document.querySelector('.gif-container').innerHTML = `
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHZoYnFwN3pjNW12OTgycmlvcWk2MWR6dG1uZ2w1czgydTVsanlvaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cP6RGx3iNBXaTMfsGt/giphy.gif" alt="GIF" class="gif">
        `;
        document.querySelector('.container').innerHTML = `
            <h1>YAYYY OKAY!!</h1>
        `;
    });
    document.getElementById('noBtn2').addEventListener('click', function() {
        document.querySelector('.container').classList.add('page5');
        document.querySelector('.container').innerHTML = `
            <h1>oh okay, sorry for asking.</h1>
        `;
    });
});


document.getElementById('noBtn').addEventListener('click', function() {
    // Remove GIF border from page 3
    const gifContainer = document.querySelector('.gif-container');
    gifContainer.classList.remove('bordered');

    // Update the container to page 3
    document.querySelector('.container').classList.add('page3');
    document.querySelector('.container').classList.remove('page2', 'page4', 'page5'); // Remove classes for other pages

    // Remove the existing GIF and update the content
    document.querySelector('.gif-container').innerHTML = ''; // Remove the GIF
    document.querySelector('.question').innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1ianZjeGF6eHBwaHN6bGh2dG5ibzJxZ2tycnNwYjlzeXEwcmtxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Y2mP5A6WjLNac0F7QQ/giphy.gif" alt="GIF" class="gif">
        <h1>oh okay thank you!</h1>
    `;
});

