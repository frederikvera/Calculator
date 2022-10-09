//Udregning: BMI er = Vægt / med (Højde * Højde)
// bmi = weight / (height*height)
//- tips ligger i bunden af siden som forklarer nogle ting af koden.

let chart = document.getElementById('chart').getContext('2d');
let bmiChart = new Chart(chart, {
    type: 'bar', //forskellige former af charts
    data: {
        labels:['Your BMI', 'Adjusted BMI', 'Denmark', 'Spain', 'USA', 'Kuwait', 'United Kingdom'],
        datasets:[{
            label: 'Your BMI in comparison to other countries',
            data: [
                0,
                23.0,
                25.3,
                26.7,
                28.5,
                30.0,
                27.3,

            ],

            backgroundColor:[
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(140, 159, 64, 0.2)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {}
});
// her er vores nr 2 bar som er den vi adjustere selv. Man kan se at det er 2nd bar da den er på index dat[1]
function updateData(barvalues) {
    document.getElementById("input-value").innerText = barvalues
    console.log(barvalues)
    bmiChart.data.datasets[0].data[1] = barvalues;
    bmiChart.update();
};





// hvad er window.onload : se i tips 1
window.onload = () => {
    let button = document.querySelector("#btn");

    // Her klikkes der for at udregne bmi
    button.addEventListener("click", calculator);
};

//Selve JS programeringen til at udregne bmi har jeg fået inspiration af fra nettet på denne side:
//https://www.geeksforgeeks.org/design-a-bmi-calculator-using-javascript/
// Jeg har ikke kunne ændre så meget i selve udregningen da det er den kode der skal til for at få udregningen til at virke.
//  Jeg har ændret lidt i selve udregningen og de steder jeg kunne. Alle grafer og indsætning af forskellige
//grafer er min kode, og er ikke blevet inspireret af nogen.
// feks er variablerne også meget lignende, men da koden skal være på engelsk giver det selvfølelig kun mening at kalde
//height for heigh og weight for weight.

function calculator() {
    // Parse int retunere brugerens svar som et rigtig tal i stedet for en string
    //se tips 2 om parse
    let height = parseInt(document
        .querySelector("#height").value);

    //Samme ting sker her, så vi skal parse int med vægt også
    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");


    //tips 3
    if (height === null || isNaN(height))
        result.innerHTML = "Indsæt HØJDE i CM!";

    else if (weight === null || isNaN(weight))
        result.innerHTML = "Indsæt VÆGT i KG";
// altså det vi gør ovenover er at tjekke om brugeren rent faktis
// skirver et tal, og hvis ikke skal programet ikke køre, og skal indtastes igen

    // Hvis brugerens input er int så køre videre. /else
    else {

        // Vi sætter et max på 3 decimal tal
        //Vi bruger bmi formlen til at udregne din bmi
        // Højde skal divideres med 100 for at få et ordenligt tal.
        let bmi = (weight / ((height/100 * height/100))).toFixed(3);

        // ikke brugt kode nedeunder. -
       /* function updateYourBmi(bmi) {
            console.log(bmi.value)
            bmiChart.data.datasets[6].data[6] = bmi.value;
            bmiChart.update();
        }
        updateYourBmi(bmi) */
        //ikke brugt kode her til----

        // Nu indeler vi i diverse bmi klasser
        // result.innerhtml retunere svaret til html
        if (bmi < 18.6) result.innerHTML =
            `Du er for tynd, din BMI er : <span>${bmi}</span>`; //hvad gør span????

        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Du er normal, din BMI er : <span>${bmi}</span>`;

        else result.innerHTML =
                `Du er for tyk, din BMI er : <span>${bmi}</span>`;
        console.log(bmi)

        //BMI resultat bar, altså det du selv indsætter i værdierne bliver til en bar-
        //dette er vores førte bar som kan ses på indedx 0
        bmiChart.data.datasets[0].data[0] = bmi;
        bmiChart.update();

    }
}








/* tips :
1. Onload
Onload eventet sker når et objekt er blevet loaded, onload er best practice til at køre et element i bodyen til at køre et
script når selve hjemmesiden er loaded- feks billeder, scripts, css filer osv...

2. Parse int
https://www.freecodecamp.org/news/parseint-in-javascript-js-string-to-int-example/
Retunere en tal string til en rigtig Int som kan udregnes med.
3. isNan
IsNan er en function som prøver at konvetere den sidste parameter i dette
tilfælde " " brugerens output, den prøver så at konvetere det til et tal, hvis det er et tal
så er vores return True, og hvis ikke et tal så er den false.

Inspiration til selve calculatoren : https://www.geeksforgeeks.org/design-a-bmi-calculator-using-javascript/
 */