const downloads = [
    {
        id: 1,
        title: 'Recipe',
        status: 'Done'
    },
    {
        id: 2,
        title: 'Workouts',
        status: 'Pending'
    },
    {
        id: 3,
        title: 'Passwords',
        status: 'Pending'
    },
    {
        id: 4,
        title: 'To Do 2021',
        status: 'Pending'
    },
    {
        id: 5,
        title: 'Books',
        status: 'Failed'

    }];

document.querySelector('.content').innerHTML = `<table class="todolist"></table>`

for (let el of downloads) {
    let row = document.createElement('tr')
    row.innerHTML = `<td>${el.title}</td> <td class="status">${el.status}</td>`
    document.querySelector('.todolist').appendChild(row)
}

const statuses = document.querySelectorAll('.status')

const changeTable = () => {

    statuses.forEach(s => s.innerHTML !== "Done" ? s.innerHTML = `Done` : s)
    console.log('Check started')
}

const withDelay = () => {
    setTimeout(changeTable, 3000)
}

const button = document.createElement('button')
button.innerHTML = 'refactor'
button.addEventListener('click', withDelay )
document.querySelector('.todolist').appendChild(button)




