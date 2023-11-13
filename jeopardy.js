$(document).ready(function () {
    // catsToDisplay is the main data structure for the app; it looks like this:

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

    let categories = [];


    /** Get NUM_catsToDisplay random category from API.
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

    /** Fill the HTML table#jeopardy with the catsToDisplay & cells for questions.
     *
     * - The <thead> should be filled w/a <tr>, and a <td> for each category
     * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
     *   each with a question for each category in a <td>
     *   (initally, just show a "?" where the question/answer would go.)
     */

    async function fillTable() {

        let banner = document.getElementById('banner');
        let btn = document.getElementById('btn');
        let table = $('#jeopardy');
        table.innerHTML = "";
        let catIndices = [];
        //Pick 6 random indices from totalCats and save info of correspondingcCategory names and IDs
        while (catIndices.length < 6) {
            let num = Math.floor(Math.random() * 99) + 1;
            if (catIndices.indexOf(5) === -1 && categories.data[num].clues_count >= 6) catIndices.push(categories.data[num]);
        }

        //Pick 6 category info to display based on category IDs from catIndices
        let catsToDisplay = [];
        try {
            for (let i = 0; i < catIndices.length; i++) {
                let catsInfo = await axios.get("http://jservice.io/api/category",
                    {
                        params: {
                            id: catIndices[i].id
                        }
                    });
                catsToDisplay.push(catsInfo);

            }
        } catch (error) {
            console.error(error);
        }
        //console.log(catsToDisplay);
        //JSON.stringify(sessionStorage.setItem("catsToDisplay", catsToDisplay));   


        let clue00 = [];
        let clue01 = [];
        let clue02 = [];
        let clue03 = [];
        let clue04 = [];
        let clue05 = [];

        for (let i = 0; i < 6; i++) {
            while (clue00.length < 6) {
                let randomClueIndex = Math.floor(Math.random() * (catsToDisplay[0].data.clues_count - 1)) + 1;
                if (clue00.indexOf(catsToDisplay[0].data.clues[randomClueIndex].question) === -1 //Check for duplicates
                    && catsToDisplay[0].data.clues[randomClueIndex].question.length
                    && catsToDisplay[0].data.clues[randomClueIndex].question !== "=" // Skip question that has only equal sign
                    && catsToDisplay[0].data.clues[randomClueIndex].answer.length
                    && catsToDisplay[0].data.clues[randomClueIndex].answer !== "="
                    && clue00.length < 6) clue00.push(catsToDisplay[0].data.clues[randomClueIndex]);

            }
            while (clue01.length < 6) {
                let randomClueIndex = Math.floor(Math.random() * (catsToDisplay[1].data.clues_count - 1)) + 1;

                if (clue01.indexOf(catsToDisplay[1].data.clues[randomClueIndex]) === -1
                    && catsToDisplay[1].data.clues[randomClueIndex].question.length
                    && catsToDisplay[1].data.clues[randomClueIndex].question !== "="
                    && catsToDisplay[1].data.clues[randomClueIndex].answer.length
                    && catsToDisplay[1].data.clues[randomClueIndex].answer !== "="
                    && clue01.length < 6) clue01.push(catsToDisplay[1].data.clues[randomClueIndex]);

            }
            while (clue02.length < 6) {
                let randomClueIndex = Math.floor(Math.random() * (catsToDisplay[2].data.clues_count - 1)) + 1;

                if (clue02.indexOf(catsToDisplay[2].data.clues[randomClueIndex]) === -1
                    && catsToDisplay[2].data.clues[randomClueIndex].question.length
                    && catsToDisplay[2].data.clues[randomClueIndex].question !== "="
                    && catsToDisplay[2].data.clues[randomClueIndex].answer !== "="
                    && catsToDisplay[2].data.clues[randomClueIndex].answer.length

                    && clue02.length < 6) clue02.push(catsToDisplay[2].data.clues[randomClueIndex]);

            }
            while (clue03.length < 6) {
                let randomClueIndex = Math.floor(Math.random() * (catsToDisplay[3].data.clues_count - 1)) + 1;

                if (clue03.indexOf(catsToDisplay[3].data.clues[randomClueIndex]) === -1
                    && catsToDisplay[3].data.clues[randomClueIndex].question.length
                    && catsToDisplay[3].data.clues[randomClueIndex].question !== "="
                    && catsToDisplay[3].data.clues[randomClueIndex].answer.length
                    && catsToDisplay[3].data.clues[randomClueIndex].answer !== "="
                    && clue03.length < 6) clue03.push(catsToDisplay[3].data.clues[randomClueIndex]);

            }
            while (clue04.length < 6) {
                let randomClueIndex = Math.floor(Math.random() * (catsToDisplay[4].data.clues_count - 1)) + 1;

                if (clue04.indexOf(catsToDisplay[4].data.clues[randomClueIndex]) === -1
                    && catsToDisplay[4].data.clues[randomClueIndex].question.length
                    && catsToDisplay[4].data.clues[randomClueIndex].question !== "="
                    && catsToDisplay[4].data.clues[randomClueIndex].answer.length
                    && catsToDisplay[4].data.clues[randomClueIndex].answer !== "="
                    && clue04.length < 6) clue04.push(catsToDisplay[4].data.clues[randomClueIndex]);

            }
            while (clue05.length < 6) {
                let randomClueIndex = Math.floor(Math.random() * (catsToDisplay[5].data.clues_count - 1)) + 1;

                if (clue05.indexOf(catsToDisplay[5].data.clues[randomClueIndex]) === -1
                    && catsToDisplay[5].data.clues[randomClueIndex].question.length
                    && catsToDisplay[5].data.clues[randomClueIndex].question !== "="
                    && catsToDisplay[5].data.clues[randomClueIndex].answer.length
                    && catsToDisplay[5].data.clues[randomClueIndex].answer !== "="
                    && clue05.length < 6) clue05.push(catsToDisplay[5].data.clues[randomClueIndex]);
            }
        }

        let headRow = document.createElement('tr');
        for (let i = 0; i < catsToDisplay.length; i++) {
            let th = document.createElement('th');
            th.innerText = catsToDisplay[i].data.title
            headRow.append(th);
        }
        table.append(headRow);

        for (let i = 0; i <= 5; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j <= 5; j++) {
                let data = "";
                data = `<td data-state="hidden" data-Q="${clue00[i].question.replace('<i>', '').replace('</i>', '')}" data-A="${clue00[i].answer.replace('<i>', '').replace('</i>', '')}">?</td>
                        <td data-state="hidden" data-Q="${clue01[i].question.replace('<i>', '').replace('</i>', '')}" data-A="${clue01[i].answer.replace('<i>', '').replace('</i>', '')}">?</td>
                        <td data-state="hidden" data-Q="${clue02[i].question.replace('<i>', '').replace('</i>', '')}" data-A="${clue02[i].answer.replace('<i>', '').replace('</i>', '')}">?</td>
                        <td data-state="hidden" data-Q="${clue03[i].question.replace('<i>', '').replace('</i>', '')}" data-A="${clue03[i].answer.replace('<i>', '').replace('</i>', '')}">?</td>
                        <td data-state="hidden" data-Q="${clue04[i].question.replace('<i>', '').replace('</i>', '')}" data-A="${clue04[i].answer.replace('<i>', '').replace('</i>', '')}">?</td>
                        <td data-state="hidden" data-Q="${clue05[i].question.replace('<i>', '').replace('</i>', '')}" data-A="${clue05[i].answer.replace('<i>', '').replace('</i>', '')}">?</td>`

                tr.innerHTML = data;
                table.append(tr);
            }
        }
        document.addEventListener("click", handleClick)
    }

    /** Handle clicking on a clue: show the question or answer.
     *
     * Uses .showing property on clue to determine what to show:
     * - if currently null, show question & set .showing to "question"
     * - if currently "question", show answer & set .showing to "answer"
     * - if currently "answer", ignore click
     * */

    function handleClick(evt) {

       
        if (evt.target.parentNode.parentNode.id === "jeopardy") {
            if (evt.target.getAttribute("data-state") === "hidden") {
                evt.target.innerText = evt.target.getAttribute("data-Q");
                evt.target.setAttribute("data-state", "unveiled");
            } else if (evt.target.getAttribute("data-state") === "unveiled") {
                evt.target.innerText = evt.target.getAttribute("data-A");
                evt.target.setAttribute("data-state", "")
            };
        } else if (evt.target.id === "btn") {
           
            showLoadingView();
            document.removeEventListener("click", handleClick);
            setTimeout(setupAndStart, 2100);

        }
    }

    /** Wipe the current Jeopardy board, show the loading spinner,
     * and update the button used to fetch data.
     */

    function showLoadingView() {
        let banner = document.getElementById('banner');
        let btn = document.getElementById('btn');
        let table = document.getElementById('jeopardy');
        document.getElementById('btn');
        categories = [];
        banner.style.display = 'none';
        btn.style.display = 'none';
        table.style.display = 'none';

        document.body.style.backgroundImage = "url('jeopardy.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

    }

    /** Remove the loading spinner and update the button used to fetch data. */

    function hideLoadingView() {

        let banner = document.getElementById('banner');
        let btn = document.getElementById('btn');
        let table = document.getElementById('jeopardy');

        document.body.style.backgroundImage = '';
        document.body.style.background = '';
        document.body.style.backgroundUrl = '';

        banner.style.display = 'block';
        btn.style.display = 'block';

    }

    /** Start game:
     *
     * - get random category Ids
     * - get data for each category
     * - create HTML table
     * */

    async function setupAndStart() {
        document.querySelector('body').innerHTML = '';

        try {

            //categories = JSON.parse(sessionStorage.getItem("categories")) || [];//Get data from session variable
            categories = await axios.get("http://jservice.io/api/categories",
                {
                    params: {
                        count: 100
                    }
                });
            //JSON.stringify(sessionStorage.setItem("categories", categories));// Store data in session variable
        } catch (error) {
            console.error(error);
        }

        let body = document.querySelector('BODY');
        body.innerHTML = '';

        let heading = document.createElement('DIV');
        heading.setAttribute("id", "heading");
        let banner = document.createElement('DIV');
        banner.setAttribute("id", "banner");
        banner.innerText = 'Jeopardy!';
        let btn = document.createElement('BUTTON');
        btn.setAttribute("id", "btn");
        btn.innerText = 'START';
        let table = document.createElement('TABLE');
        table.setAttribute("id", "jeopardy");
        heading.appendChild(banner);
        heading.appendChild(btn);
        document.body.appendChild(heading);
        document.body.appendChild(table);
        hideLoadingView();
        heading = null;
        banner = null;
        btn = null;
        table = null;
        fillTable();
    }

    /** On click of start / restart button, set up game. */

    // TODO

    /** On page load, add event handler for clicking clues */

    // TODO
    setupAndStart();

})
