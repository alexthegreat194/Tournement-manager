
$( document ).ready(function() {
    console.log( "ready!" );
    $.getJSON("tournaments.json", function(data)
    {
        console.log("Json loaded:")
        console.log(data)

        const tournamentContainer = document.getElementById("tournament-container")
        console.log(data[0])

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
            tBuffer.appendChild(tDivider);

            let tBody = document.createElement("div");
            tBody.className = "tournament-body";
            tBuffer.appendChild(tBody)
            

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
            tGroup4.appendChild(tJoinButton);

            let tPlayers = document.createElement("p");
            tPlayers.innerHTML = `${tournament.joined} / ${tournament.spots} players remaining`
            tPlayers.className = "tournament-players"
            tGroup4.appendChild(tPlayers);

            tournamentContainer.appendChild(tBuffer)
        }
    });
});

