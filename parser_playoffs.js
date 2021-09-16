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
    // Playoffs
    // Init des objets Rounds et compteurs de matchs par round
    var m_playoffs_elite = [];
    var m_playoffs_amateur = [];
    var wb1 = [];
    var wb2 = [];
    var wb3 = [];
    var wb4 = [];
    var gf = [];
    var lb1 = [];
    var lb2 = [];
    var lb3 = [];
    var lb4 = [];
    var lb5 = [];
    var cmpt_wb1 = 0;
    var cmpt_wb2 = 0;
    var cmpt_wb3 = 0;
    var cmpt_wb4 = 0;
    var cmpt_gf = 0;
    var cmpt_lb1 = 0;
    var cmpt_lb2 = 0;
    var cmpt_lb3 = 0;
    var cmpt_lb4 = 0;
    var cmpt_lb5 = 0;
    // On récupère tous les matchs des playoffs Elite
    for (var i = 0; i < matches.length; i++) {
        if (data[matches[i]].toor.stage.name === "Playoffs Elite") {
            m_playoffs_elite.push(data[matches[i]]);
        }
    }
    // On récupère tous les matchs des playoffs Amateur
    for (var i = 0; i < matches.length; i++) {
        if (data[matches[i]].toor.stage.name === "Playoffs Amateur") {
            m_playoffs_amateur.push(data[matches[i]]);
        }
    }
    // PLAYOFFS ELITE
    // On peuple les objets Rounds et Compteurs
    for (var i = 0; i < m_playoffs_elite.length; i++) {
        if (m_playoffs_elite[i].toor.round.name === "WB Round 1") {
            cmpt_wb1++;
            wb1.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "WB Round 2") {
            cmpt_wb2++;
            wb2.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "WB Round 3") {
            cmpt_wb3++;
            wb3.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "WB Round 4") {
            cmpt_wb3++;
            wb4.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "GF Round 1") {
            cmpt_wb3++;
            gf.push(m_playoffs_elite[i]);
        }
    }
    // PLAYOFFS AMATEUR
    // On peuple les objets Rounds et Compteurs
    for (var i = 0; i < m_playoffs_elite.length; i++) {
        if (m_playoffs_elite[i].toor.round.name === "LB Round 1") {
            cmpt_lb1++;
            lb1.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "LB Round 2") {
            cmpt_lb2++;
            lb2.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "LB Round 3") {
            cmpt_lb3++;
            lb3.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "LB Round 4") {
            cmpt_lb4++;
            lb4.push(m_playoffs_elite[i]);
        }
        if (m_playoffs_elite[i].toor.round.name === "LB Round 5") {
            cmpt_lb5++;
            lb5.push(m_playoffs_elite[i]);
        }
    }
    // PLAYOFFS ELITE
    // On affiche le WB1
    for (var i = 0; i < wb1.length; i++) {
        var _wb1 = document.getElementById('wb1');
        console.log(wb1[i]);
        _wb1.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(wb1[i].ebot[Object.keys(wb1[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb1[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb1[i].toor.equipes[0].name}</p>
                <span class="badge ${wb1[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb1[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb1[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb1[i].toor.equipes[1].name}</p>
                <span class="badge ${wb1[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb1[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le WB2
    for (var i = 0; i < wb2.length; i++) {
        var _wb2 = document.getElementById('wb2');
        _wb2.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
            <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(wb2[i].ebot[Object.keys(wb2[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb2[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb2[i].toor.equipes[0].name}</p>
                <span class="badge ${wb2[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb2[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb2[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb2[i].toor.equipes[1].name}</p>
                <span class="badge ${wb2[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb2[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le WB3
    for (var i = 0; i < wb3.length; i++) {
        var _wb3 = document.getElementById('wb3');
        _wb3.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(wb3[i].ebot[Object.keys(wb3[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb3[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb3[i].toor.equipes[0].name}</p>
                <span class="badge ${wb3[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb3[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb3[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb3[i].toor.equipes[1].name}</p>
                <span class="badge ${wb3[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb3[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le WB4
    for (var i = 0; i < wb4.length; i++) {
        var _wb4 = document.getElementById('wb4');
        _wb4.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(wb4[i].ebot[Object.keys(wb4[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb4[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb4[i].toor.equipes[0].name}</p>
                <span class="badge ${wb4[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb4[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${wb4[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${wb4[i].toor.equipes[1].name}</p>
                <span class="badge ${wb4[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${wb4[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le GF
    for (var i = 0; i < gf.length; i++) {
        var _gf = document.getElementById('GF');
        _gf.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(gf[i].ebot[Object.keys(gf[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${gf[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${gf[i].toor.equipes[0].name}</p>
                <span class="badge ${gf[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${gf[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${gf[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${gf[i].toor.equipes[1].name}</p>
                <span class="badge ${gf[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${gf[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // PLAYOFFS ELITE
    // On affiche le LB1
    for (var i = 0; i < lb1.length; i++) {
        var _lb1 = document.getElementById('lb1');
        console.log(wb1[i]);
        _lb1.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(lb1[i].ebot[Object.keys(lb1[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb1[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb1[i].toor.equipes[0].name}</p>
                <span class="badge ${lb1[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb1[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb1[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb1[i].toor.equipes[1].name}</p>
                <span class="badge ${lb1[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb1[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le LB2
    for (var i = 0; i < lb2.length; i++) {
        var _lb2 = document.getElementById('lb2');
        _lb2.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(lb2[i].ebot[Object.keys(lb2[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb2[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb2[i].toor.equipes[0].name}</p>
                <span class="badge ${lb2[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb2[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb2[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb2[i].toor.equipes[1].name}</p>
                <span class="badge ${lb2[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb2[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le LB3
    for (var i = 0; i < lb3.length; i++) {
        var _lb3 = document.getElementById('lb3');
        _lb3.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(lb3[i].ebot[Object.keys(lb3[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb3[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb3[i].toor.equipes[0].name}</p>
                <span class="badge ${lb3[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb3[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb3[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb3[i].toor.equipes[1].name}</p>
                <span class="badge ${lb3[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb3[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le LB4
    for (var i = 0; i < lb4.length; i++) {
        var _lb4 = document.getElementById('lb4');
        _lb4.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(lb4[i].ebot[Object.keys(lb4[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb4[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb4[i].toor.equipes[0].name}</p>
                <span class="badge ${lb4[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb4[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb4[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb4[i].toor.equipes[1].name}</p>
                <span class="badge ${lb4[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb4[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    // On affiche le LB5
    for (var i = 0; i < lb5.length; i++) {
        var _lb5 = document.getElementById('lb5');
        _lb5.innerHTML += `
        <div class="d-flex flex-column border-bottom-0 mb-4">
        <span class="align-middle p-0 badge badge-pill bg-dark">Début : ${moment.utc(lb5[i].ebot[Object.keys(lb5[i].ebot)[0]].players[0].created_at).format('HH:mm')}</span>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb5[i].toor.equipes[0].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb5[i].toor.equipes[0].name}</p>
                <span class="badge ${lb5[i].toor.equipes[0].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb5[i].toor.equipes[0].score}</span>
            </div>
            <div class="d-flex flex-row justify-content-between border rounded bg-white">
                <p class="${lb5[i].toor.equipes[1].resultat === "win" ? "text-success" : "text-danger" } p-0 m-0">${lb5[i].toor.equipes[1].name}</p>
                <span class="badge ${lb5[i].toor.equipes[1].resultat === "win" ? "bg-success text-white" : "bg-danger text-white" } my-0">${lb5[i].toor.equipes[1].score}</span>
            </div>
        </div>`
    }
    console.log(`Objet Playoffs Elite :`);
    console.log(m_playoffs_elite);
    console.log(`Objet Playoffs Amateur :`);
    console.log(m_playoffs_amateur);
    console.log(`WB1 = ${cmpt_wb1} | WB2 = ${cmpt_wb2} | WB3 = ${cmpt_wb3} | WB4 = ${cmpt_wb4} | GF = ${cmpt_gf}`);
    console.log(`WB1 = `);
    console.log(wb1);
    console.log(`WB2 = `);
    console.log(wb2);
    console.log(`WB3 = `);
    console.log(wb3);
    console.log(`WB4 = `);
    console.log(wb4);
    console.log(`GF = `);
    console.log(gf);

    console.log(`LB1 = ${cmpt_lb1} | LB2 = ${cmpt_lb2} | LB3 = ${cmpt_lb3} | LB4 = ${cmpt_lb4} | LB5 = ${cmpt_lb5}`);
    console.log(`LB1 = `);
    console.log(lb1);
    console.log(`LB2 = `);
    console.log(lb2);
    console.log(`LB3 = `);
    console.log(lb3);
    console.log(`LB4 = `);
    console.log(lb4);
    console.log(`LB5 = `);
    console.log(lb5);
});