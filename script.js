
let fileData = []

const create_tournaments = (data) => {
    console.log("Json loaded:")
    console.log(data)

    const tournamentContainer = document.getElementById("tournament-container")
    tournamentContainer.innerHTML = ""

    for (let i = 0; i < data.length; i++) 
    {
        const tournament = data[i];

        let tBuffer = document.createElement("div");
        tBuffer.className = "tournament";

        let tHeader = document.createElement("div");
        tHeader.style.backgroundImage = `url(images/games/${tournament.image})`
        tHeader.className = "tournament-header";
        tBuffer.appendChild(tHeader);

        let tDivider = document.createElement("div");
        tDivider.className = "divider";
        tDivider.style.backgroundColor = tournament.color;
        tBuffer.appendChild(tDivider);

        let tBody = document.createElement("div");
        tBody.className = "tournament-body";
        tBody.style.background = `linear-gradient(${tournament.color}60,${tournament.color}00 50%), rgba(0,0,0,.2)`;
        tBuffer.appendChild(tBody);
        

        let tGroup1 = document.createElement("div");
        tGroup1.className = "tournament-group";
        tBody.appendChild(tGroup1);

        let tGroup2 = document.createElement("div");
        tGroup2.className = "tournament-group";
        tBody.appendChild(tGroup2);

        let tGroup3 = document.createElement("div");
        tGroup3.className = "tournament-group";
        tBody.appendChild(tGroup3);

        let tGroup4 = document.createElement("div");
        tGroup4.className = "tournament-group";
        tBody.appendChild(tGroup4);


        let tGameName = document.createElement("h1");
        tGameName.innerHTML = tournament.game;
        tGameName.className = "tournament-game-name";
        tGameName.style.color = tournament.color
        tGroup1.appendChild(tGameName);

        let tDescription = document.createElement("p");
        tDescription.innerHTML = tournament.description;
        tDescription.className = "tournament-desc";
        tGroup1.appendChild(tDescription);


        let tPrizeLabel = document.createElement("p");
        tPrizeLabel.innerHTML = "Prize:"
        tPrizeLabel.className = "tournament-prize-label"
        tGroup2.appendChild(tPrizeLabel);

        let tPrizeValue = document.createElement("p");
        tPrizeValue.innerHTML = `$${tournament.prize}`
        tPrizeValue.className = "tournament-prize-value"
        tGroup2.appendChild(tPrizeValue);


        let tHostName = document.createElement("p");
        tHostName.innerHTML = tournament.host;
        tHostName.className = "tournament-host-name"
        tGroup3.appendChild(tHostName);

        let tDate = document.createElement("p");
        tDate.innerHTML = tournament.date
        tDate.className = "tournament-date"
        tGroup3.appendChild(tDate);


        let tJoinButton = document.createElement("button");
        tJoinButton.innerHTML = "Join"
        tJoinButton.className = "tournament-join-button"
        tJoinButton.onclick = () => {
            fileData[i]["joined"]++;
            create_tournaments(fileData);
            alert("Joined Tournament!");
        }
        tGroup4.appendChild(tJoinButton);

        let tPlayers = document.createElement("p");
        tPlayers.innerHTML = `${tournament.joined} / ${tournament.spots} players remaining`
        tPlayers.className = "tournament-players"
        tGroup4.appendChild(tPlayers);

        tournamentContainer.appendChild(tBuffer)
    }
}

const load_data = (data) => {
    fileData = data
    create_tournaments(fileData)
}

const formSubmit = () => {
    const gameInput = document.getElementById("game-input");
    const fileInput = document.getElementById("file-input");
    const colorInput = document.getElementById("color-input");
    const descInput = document.getElementById("desc-input");
    const moneyInput = document.getElementById("money-input");
    const dateInput = document.getElementById("date-input");
    const playersInput = document.getElementById("players-input");
    const submitButton = document.getElementById("host-submit");

    let buffer = {
        "game":gameInput.value,
        "image":fileInput.value,
        "color":colorInput.value,
        "description":descInput.value,
        "prize":moneyInput.value,
        "host":"You",
        "date":dateInput.value,
        "joined":0,
        "spots":playersInput.value
    };

    fileData.push(buffer);
    create_tournaments(fileData);
}

$( document ).ready(function() {
    console.log( "ready!" );
    $.getJSON("tournaments.json", load_data);

    const hostSubmit = document.getElementById("host-submit");
    hostSubmit.onclick = formSubmit;

});

