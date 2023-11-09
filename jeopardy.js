// categories is the main data structure for the app look like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

function getCategoryIds() {
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

function getCategory(catId) {
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    let table = document.createElement('table');
    table.attr('id', 'jeopardy');
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    let tab = $("#jeopardy");
    tab.bind("click", function (e) {
        e.target.innerHTML;
    })
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    let table = $('#jeopardy');
    table.innerHTML = "";
    let cats = await axios.get("http://jservice.io/api/categories",
        {
            params: {
                count: 100
            }
        });
    //console.log(cats.data[0])
    let catPos = [];
    while (catPos.length < 6) {
        let num = Math.floor(Math.random() * 100) + 1;
        if (catPos.indexOf(num) === -1) catPos.push(cats.data[num]);
    }

    console.log(cats)

    let categories = [];
    //Pick 6 random Categories
    for (let i = 0; i < catPos.length; i++) {
       let data = await axios.get("http://jservice.io/api/category",
            {
                params: {
                    id: catPos[i].id
                }
            });
        categories.push(data);
    }

    //console.log(categories[0].data.clues[0]);
    let clue00 = [];
    let clue01 = [];
    let clue02 = [];
    let clue03 = [];
    let clue04 = [];
    let clue05 = [];    

    // for (let i = 0; i < 6; i++) {
    //     while (clue00.length < 6 && clue01.length < 6 && clue02.length < 6 && clue03.length < 6 && clue04.length < 6 && clue05.length < 6) {
    //         let num = Math.floor(Math.random() * 100) + 1;
    //         if (clue00.indexOf(categories[i].data.clues[num]) === -1 && clue00.length < 6 &&
    //             categories[0].data.clues[num].question !== undefined) clue00.push(categories[0].data.clues[num]);

    //         if (clue01.indexOf(categories[i].data.clues[num]) === -1 && clue01.length < 6 &&
    //             categories[1].data.clues[num].question !== undefined) clue01.push(categories[1].data.clues[num]);

    //         if (clue02.indexOf(categories[i].data.clues[num]) === -1 && clue02.length < 6 &&
    //             categories[2].data.clues[num].question !== undefined) clue02.push(categories[2].data.clues[num]);

    //         if (clue03.indexOf(categories[i].data.clues[num]) === -1 && clue03.length < 6 &&
    //             categories[3].data.clues[num].question !== undefined) clue03.push(categories[3].data.clues[num]);

    //         if (clue04.indexOf(categories[i].data.clues[num]) === -1 && clue04.length < 6 &&
    //             categories[4].data.clues[num].question !== undefined) clue04.push(categories[4].data.clues[num]);

    //         if (clue05.indexOf(categories[i].data.clues[num]) === -1 && clue05.length < 6 &&
    //             categories[5].data.clues[num].question !== undefined) clue05.push(categories[5].data.clues[num]);
    //     }

    // }

    //for(let i= 0; i<=5; i++){
        
        // if(clue00[i].question=== undefined){
        //     console.log(clue00[i])
        // }
        // if(clue01[i].question=== undefined){
        //     console.log(clue01[i])
        // }
        // if(clue02[i].question=== undefined){
        //     console.log(clue02[i])
        // }
        // if(clue03[i].question=== undefined){
        //     console.log(clue03[i])
        // }
        // if(clue04[i].question=== undefined){
        //     console.log(clue04[i])
        // }
        // if(clue05[i].question=== undefined){
        //     console.log(clue05[i])
        // }

            // console.log(clue00[i])
       
            // console.log(clue01[i])
       
            // console.log(clue02[i])
       
            // console.log(clue03[i])
        
            // console.log(clue04[i])
        
            // console.log(clue05[i])        
    
    //}
    
    // console.log(clue00[0].question);
    // console.log(clue02[1].question);
    // console.log(clue00[2].question);
    // console.log(clue02[3].question);
    // console.log(clue00[4].question);
    // console.log(clue02[5].question);


    // let clues = [...clue00, ...clue01, ...clue02, ...clue03, ...clue04, ...clue05];

    let headRow = document.createElement('tr');

    for (let i = 0; i < categories.length; i++) {
        let th = document.createElement('th');
        th.innerText = categories[i].data.title
        headRow.append(th);
    }
    table.append(headRow);

    // for (let i = 0; i <= 5; i++) {
    //     let tr = document.createElement('tr');

    //     for (let j = 0; j <= 5; j++) {
    //         let td = document.createElement('td');
    //         let data = "";
    //         data = `<td id="${i}${i}">${clue00[i].question}</td>
    //                  <td id="${i}${i + 1}">${clue01[i].question}</td>
    //                  <td id="${i}${i + 2}">${clue02[i].question}</td> 
    //                  <td id="${i}${i + 3}">${clue03[i].question}</td> 
    //                  <td id="${i}${i + 4}">${clue04[i].question}</td> 
    //                  <td id="${i}${i + 5}">${clue05[i].question}</td>`
    //         tr.innerHTML = data;
            
    //         table.append(tr);
    //     }

    // }

}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO

$(document).ready(function () {
    setupAndStart()
})