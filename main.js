
let according = document.querySelector('.Objective');
let mainAccording = document.querySelectorAll('.main-according')


mainAccording.forEach(according => {
    const dowmIcon = according.querySelector('.down-word-icon')
    const answer = according.querySelector('.Answer')

    according.querySelector('.question').addEventListener('click', () => {
        // console.log(according)

        // dowm_icon.classList.toggle('icon-Active')
        // answer.classList.toggle('show-answer')

        if (dowmIcon.classList.contains('icon-Active')) {
            dowmIcon.classList.remove('icon-Active')
            answer.style.maxHeight = null

        } else {
            dowmIcon.classList.add('icon-Active')
            answer.style.maxHeight = answer.scrollHeight + 'px'

        };

    });
});

function Show_more() {
    // alert()
    // according.classList.add('obj-active')

    if (according.classList.contains('obj-active')) {

        according.classList.remove("obj-active")
        more_Less.innerText = "+" + "Show More"
        heading_show.classList.remove('heading_show')

    } else {
        according.classList.add("obj-active")
        more_Less.innerText = "-" + "More Less"

    }
}



