import {myFilter, myMap, myReduce} from "./T1A";

const notes = [
    {
        id: 1,
        title: "Recipe",
        description: "Ingredients include 2 eggs...",
        pagesCount: 2,
        isMarked: false,
        access: [],
    },
    {
        id: 2,
        title: "Workouts",
        description: "3 sets of squats",
        pagesCount: 1,
        isMarked: true,
        access: [],
    },
    {
        id: 3,
        title: "Passwords",
        description: "VISA ...",
        pagesCount: 6,
        isMarked: true,
        access: [],
    },
    {
        id: 4,
        title: "To Do 2021",
        description: "1. Learn JS...",
        pagesCount: 3,
        isMarked: false,
        access: [],
    },
]

const mappedNote = myMap(notes, n => ({id: n.id, title: n.title}))

// result of console.log(mappedNote)
//     [
//         {id: 1, title: 'Recipe'},
//         {id: 2, title: 'Workouts'},
//         {id: 3, title: 'Passwords'},
//         {id: 4, title: 'To Do 2021'}
//     ]


const filteredNotes = myFilter(notes, n => n.isMarked)

// result of console.log(filteredNotes)
//    [
//         {id: 2, title: 'Workouts', description: '3 sets of squats', pagesCount: 1, isMarked: true, …},
//         {id: 3, title: 'Passwords', description: 'VISA ...', pagesCount: 6, isMarked: true, …}
//    ]


const numberOfPages = myReduce(notes, (accum, elem) => accum + elem.pagesCount , 0)

// result 12
