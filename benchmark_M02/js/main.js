/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  {
    title: "Marketing Intern",
    location: "US, NY, New York",
  },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  {
    title: "Bill Review Manager",
    location: "US, FL, Fort Worth",
  },
  {
    title: "Accounting Clerk",
    location: "US, MD,",
  },
  {
    title: "Head of Content (m/f)",
    location: "DE, BE, Berlin",
  },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  {
    title: "HP BSM SME",
    location: "US, FL, Pensacola",
  },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  {
    title: "Installers",
    location: "US, FL, Orlando",
  },
  {
    title: "Account Executive - Sydney",
    location: "AU, NSW, Sydney",
  },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  {
    title: "Hands-On QA Leader",
    location: "IL, Tel Aviv, Israel",
  },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  {
    title: "Visual Designer",
    location: "US, NY, New York",
  },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  {
    title: "Marketing Assistant",
    location: "US, TX, Austin",
  },
  {
    title: "Front End Developer",
    location: "NZ, N, Auckland",
  },
  {
    title: "Engagement Manager",
    location: "AE,",
  },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  {
    title: "Customer Service",
    location: "GB, LND, London",
  },
  {
    title: "H1B SPONSOR FOR L1/L2/OPT",
    location: "US, NY, New York",
  },
  {
    title: "Marketing Exec",
    location: "SG,",
  },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  {
    title: "Customer Service Associate",
    location: "CA, ON, Toronto",
  },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  {
    title: "Software Applications Specialist",
    location: "US, KS,",
  },
  {
    title: "Craftsman Associate",
    location: "US, WA, Everett",
  },
  {
    title: "Completion Engineer",
    location: "US, CA, San Ramon",
  },
  {
    title: "I Want To Work At Karmarama",
    location: "GB, LND,",
  },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

// memorizzare in costanti gli input del form di richiesta dati
const inputTitle = document.querySelector("#job-title");
const inputLocation = document.querySelector("#job-location");
const searchButton = document.querySelector(".search-btn");

// memorizza in una costante il container per i risultati
const cardsContainer = document.querySelector(".results-wrapper");

// funzione per renderizzare il numero di posizioni lavorative trovate
const displayMatchNumber = (matchCount) => {
  const matchNumberContainer = document.querySelector(".results-count");

  // pulisce il container delle numero dei risultati trovati in una precedente ricerca
  matchNumberContainer.innerHTML = "";

  const matchNumberParagraph = document.createElement("p");
  matchNumberParagraph.classList.add("message");

  matchNumberParagraph.innerHTML = `Sono state trovate <strong>${matchCount} posizioni</strong> corrispondenti alla tua ricerca`;

  matchNumberContainer.appendChild(matchNumberParagraph);
};

// funzione per renderizzare le posizioni lavorative trovate all'interno di card
const displayMatchCards = (matchFounds) => {
  for (match of matchFounds) {
    const resultCard = document.createElement("div");
    resultCard.classList.add("result-card");

    const jobContainer = document.createElement('div');
    jobContainer.classList.add("job-container")

    const goToJob = document.createElement('div');
    goToJob.classList.add('go-to-job');

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");

    const cardLocation = document.createElement("p");
    cardLocation.classList.add("card-location");

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    
    const jobDescription = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ';

    cardTitle.innerText = match.title;
    cardLocation.innerText = match.location;
    cardDescription.innerText = jobDescription.repeat(6);
    goToJob.innerHTML = '<ion-icon name="play-outline" href="#"></ion-icon>'

    resultCard.append(jobContainer, goToJob);
    jobContainer.append(cardTitle, cardLocation, cardDescription);

    cardsContainer.appendChild(resultCard);
  }
};

// funzione per effettuare la ricerca delle posizioni lavorative
const searchJobsMatch = (event) => {
  // pulisce il container delle posizioni lavorative trovate in una precedente ricerca
  cardsContainer.innerHTML = "";

  // evita il refresh automatico della pagina alla submit del form
  event.preventDefault();

  // formattare gli input dell'utente
  const searchTitle = inputTitle.value;
  searchTitle
    .trim()
    .toLowerCase();

  let searchLocation = inputLocation.value;
  searchLocation
    .trim()
    .toLowerCase();

  // validazione degli input in base alla lunghezza
  const invalidSearchTitle = searchTitle.length < 3;
  const invalidSearchLocation = searchLocation.length < 2;

  if(invalidSearchTitle || invalidSearchLocation) {
    alert('Devi inserire almeno 3 caratteri per la posizione lavorativa e 2 per la posizione geografica');
  };
  
  if (searchLocation.length < 3) {
    searchLocation += ",";
    // console.log(`searchLocation < 3 char : ${searchLocation}`);
  };

  // inizializza un array vuoto per i risultati trovati
  const matchJobs = [];

  for (job of jobs) {
    const jobTitle = job["title"].toLowerCase();
    const jobLocation = job["location"].toLowerCase();

    // inizializza le condizioni per la ricerca
    const matchTitle = jobTitle.includes(searchTitle) && !invalidSearchTitle;
    const matchLocation = jobLocation.includes(searchLocation) && !invalidSearchLocation;    

    if (matchTitle && matchLocation) {
      // console.log(`Posizione trovata : ${job['title']} \n${job['location']}`);
      matchJobs.push(job);
    };
  };

  // inizializza la costante per il numero delle posizioni trovate
  const matchCount = matchJobs.length;
  // console.log(`Num. posizioni trovate : ${matchCount}`);

  // inizializza l'oggetto con i risultati (come debug via console)
  const resultsObject = {
    result: matchJobs,
    count: matchCount,
  };

  console.log(resultsObject);

  // renderizza il messaggio con il numero di risultati trovati
  displayMatchNumber(matchCount);

  // renderizza le cards con i risultati trovati
  displayMatchCards(matchJobs);
};

// resta in ascolto sull'evento click al tasto submit per avviare la ricerca
searchButton.addEventListener("click", searchJobsMatch);