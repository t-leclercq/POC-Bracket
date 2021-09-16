function readJsonFileToText(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readJsonFileToText("matches.json", function(text){
    // Parsing du texte en JSON
    var data = JSON.parse(text);
    console.log(`Objet brut :`);
    console.log(data);
    // Tableau d'indexage
    var matches = [];
    // Création de l'index
    for (var x in data) {
        matches.push(x);
    }
    // Tri de l'index
    matches.sort(function (a, b) {    
        return a == b ? 0 : (a > b ? 1 : -1); 
    }); 
    console.log(`Index des matchs ID :`)
    console.log(matches)
    console.log(`1er match indexé (dont l'id est ${data[matches[0]].toor.id_match}) :`);
    console.log(data[matches[0]]);
    // GROUPES
    // Init des objets Rounds et compteurs de matchs par round
    var m_groupes = [];
    var r1_m_groupes = [];
    var cmpt_r1_groupes = 0;
    var r2_m_groupes = [];
    var cmpt_r2_groupes = 0;
    var r3_m_groupes = [];
    var cmpt_r3_groupes = 0;
    for (var i = 0; i < matches.length; i++) {
        if (data[matches[i]].toor.stage.name === "Groupes") {
            m_groupes.push(data[matches[i]]);
        }
    }
    // GROUPES
    // On peuple les objets Rounds et Compteurs
    for (var i = 0; i < m_groupes.length; i++) {
        if (m_groupes[i].toor.round.name === "Round 1") {
            cmpt_r1_groupes++;
            r1_m_groupes.push(m_groupes[i]);
        }
        if (m_groupes[i].toor.round.name === "Round 2") {
            cmpt_r2_groupes++;
            r2_m_groupes.push(m_groupes[i]);
        }
        if (m_groupes[i].toor.round.name === "Round 3") {
            cmpt_r3_groupes++;
            r3_m_groupes.push(m_groupes[i]);
        }
    }
    // GROUPES
    // On affiche le R1
    for (var i = 0; i < r1_m_groupes.length; i++) {
        var mr1_p = document.getElementById('mr1_p');
        mr1_p.innerHTML += `
        <div class="d-flex flex-column border-bottom-0">
            <div class="d-flex flex-row justify-content-between border rounded bg-white mb-1">
                <p class="${r1_m_groupes[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${r1_m_groupes[i].toor.equipes[0].name}</p>
                <span class="badge ${r1_m_groupes[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${r1_m_groupes[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${r1_m_groupes[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${r1_m_groupes[i].toor.equipes[1].name}</p>
                <span class="badge ${r1_m_groupes[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${r1_m_groupes[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le R2
    for (var i = 0; i < r2_m_groupes.length; i++) {
        var mr2_p = document.getElementById('mr2_p');
        mr2_p.innerHTML += `
        <div class="d-flex flex-column border-bottom-0">
            <div class="d-flex flex-row justify-content-between border rounded bg-white mb-1">
                <p class="${r2_m_groupes[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${r2_m_groupes[i].toor.equipes[0].name}</p>
                <span class="badge ${r2_m_groupes[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${r2_m_groupes[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${r2_m_groupes[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${r1_m_groupes[i].toor.equipes[1].name}</p>
                <span class="badge ${r2_m_groupes[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${r2_m_groupes[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le R3
    for (var i = 0; i < r3_m_groupes.length; i++) {
        var mr3_p = document.getElementById('mr3_p');
        mr3_p.innerHTML += `
        <div class="d-flex flex-column border-bottom-0">
            <div class="d-flex flex-row justify-content-between border rounded bg-white mb-1">
                <p class="${r3_m_groupes[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${r3_m_groupes[i].toor.equipes[0].name}</p>
                <span class="badge ${r3_m_groupes[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${r3_m_groupes[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${r3_m_groupes[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${r3_m_groupes[i].toor.equipes[1].name}</p>
                <span class="badge ${r3_m_groupes[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${r3_m_groupes[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    console.log(`Objet Groupes :`);
    console.log(m_groupes);
    console.log(`R1 = ${cmpt_r1_groupes} | R2 = ${cmpt_r2_groupes} | R3 = ${cmpt_r3_groupes}`);
    console.log(`R1 = `);
    console.log(r1_m_groupes);
    console.log(`R2 = `);
    console.log(r2_m_groupes);
    console.log(`R3 = `);
    console.log(r3_m_groupes);

});