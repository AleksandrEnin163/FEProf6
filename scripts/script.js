const objects_images = document.querySelectorAll('input');
const all_popups = document.querySelectorAll('.popup');
const popup_won = document.querySelector('#won');
const popup_lost = document.querySelector('#lost');
const popup_draw = document.querySelector('#draw');
const new_game_btns = document.querySelectorAll('.new_game');

function start(object) {
    let comp_move = Math.floor(Math.random() * 3);
    let user_move = parseInt(object, 10);

    if((comp_move === 0 && user_move === 1) || (comp_move === 1 && user_move === 2) || (comp_move === 2 && user_move === 0)) {
        popup_won.classList.remove('hide');
    } else if ((comp_move === 1 && user_move === 0) || (comp_move === 2 && user_move === 1) || ((comp_move === 0 && user_move === 2))) {
        popup_lost.classList.remove('hide');
    } else {
        popup_draw.classList.remove('hide');
    }
}

for (const iterator of objects_images) {
    iterator.addEventListener('click', () => start(iterator.name));
}

for (const button of new_game_btns) {
    button.addEventListener('click', () => {
        for (const popup of all_popups) {
            popup.classList.add('hide');
        }
    })
}