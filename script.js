/*SISTE TEAM OPPGAVE: COOL CAR, BRO
Man kjører en bil - på veien dukker det opp flere tilfeldige ting du kan velge å enten
legge til på bilen eller la det vær. Noen ting øker kulhetsfaktoren på bilen, andre senker den.
Noen ganger møter man også på en kompis langs veien - han må du hilse på før du kan kjøre videre.

Du har (minst) tre måter å hilse på - kompisen er bare fornøyd med én av måtene å bli hilst på.
Dette er tilfeldig fra kompis til kompis og fra møte til møte hvilken hilsen som er riktig. 
Du må hilse riktig før du kan kjøre videre.
Har du høy kulhet på bilen får du en kul hilsen tilbake fra kompisen når du hilser riktig, 
har du lav kulhet får du en lite kul hilsen tilbake. 

Andre ting kan også dukke opp underveis - bruk fantasien! 
Kanskje kommer det en aggressiv bestemor - 
du velger å ignorere henne og det ender med at hun klasker til bilen med vesken sin og senker kulhetsfaktoren din 

Målet er å fylle kulhet-o-meteret helt opp - 
da kommer det en win screen med gratulasjoner (eller kanskje en bossfight dersom man har kjørt over x antall ekorn...;))


På denne oppgaven kan det være lurt å snuse på å bruke objekter og arrays 
- ikke fokuser så mye på utseendet 
- få logikken på plass først og deretter evt CSS 
(f.eks bruke knapper og tekst på skjermen som beskriver hva som skjer i første omgang)
Lykke til og kos dere med kodinga!*/

// Måter å hilse på: tut, rop, vink/blinke med lys
let app = document.getElementById("app");
let coolness = 40;
let greetings = {
	honk: {
		actionName: "Honk",
		action: "honk()",
	},
	shout: {
		actionName: "Shout",
		action: "shout()",
	},
	blink: {
		actionName: "Blink",
		action: "blink()",
	},
};

let people = [
	{
		name: "angryMan",
		preferredGreeting: "shout",
	},
	{
		name: "Borat",
		preferredGreeting: "honk",
		pic: "images/Borat.png",
		response: "audio/Borat_sound.mp3",
	},
	{
		name: "coolMan",
		preferredGreeting: "blink",
	},
];

// let randomGreeting = random key fra greetings

updateView();
function updateView() {
	let html = ``;

	html += /*HTML*/ `
		<div style="height: 30px;border: 1px solid black; width: 400px; background-color: white">
		<div id="barID" style="height: 30px;border: 1px solid black;"></div>
		</div>
		<div class="road">
		<div class="light" id="light"></div>
		<img  id="Spawn-borat" src="images/Borat.png">
		
    </div>
   	<button onclick="${greetings.honk.action}">${greetings.honk.actionName}</button>
   	<button onclick="${greetings.shout.action}">${greetings.shout.actionName}</button>
   	<button onclick="${greetings.blink.action}">${greetings.blink.actionName}</button>
  `;

	app.innerHTML = html;
	displayGraph("barID", coolness);
	checkVictory();
	Lossgame();
	spawnBorat();
}

function honk() {
	let honk = new Audio("audio/mixkit-classic-car-horn-1565.wav");
	honk.play();

	coolness += 10;
	updateView();
}

function shout() {
	let shout = new Audio("audio/audio-shout.mp3");
	shout.play();
	coolness -= 10;
	updateView();
}

function blink() {}

function displayGraph(barID, number) {
	var color;
	if (number <= 20) {
		color = "red";
	} else if (number > 20 && number <= 60) {
		color = "yellow";
	} else {
		color = "green";
	}

	var bar = document.getElementById(barID);
	bar.style.width = number + "%";
	bar.style.backgroundColor = color;
}

function checkVictory() {
	if (coolness >= 100) {
		location.reload();
		window.alert("You won the game!");
	}
}
function Lossgame() {
	if (coolness <= 0) {
		window.alert("You lost the game!");
	}
}

function spawnBorat() {
	let spawnedborat = document.getElementById("SpawnBorat");
	const delayInMiliseconds = 5000;
	spawnedborat.style.display = "block";
}
setTimeout(spawnBorat, 3000);
