let carte = '';
let copie = 0;
let puce = '';
let page = '';
let calcul = 0;

let carte1 = document.getElementById('carte1');
carte1.addEventListener('click', function () {
    carte = document.getElementById('carte1');
    carte.src = 'carte ase de coeur.png';
    carte.alt = 'ase de coeur';
    puce = 1;
    compare();
})

let carte2 = document.getElementById('carte2');
carte2.addEventListener('click', function () {
    carte = document.getElementById('carte2');
    carte.src = 'carte dame de pique.png';
    carte.alt = 'dame de pique';
    puce = 2;
    compare();
})

let carte3 = document.getElementById('carte3');
carte3.addEventListener('click', function () {
    carte = document.getElementById('carte3');
    carte.src = 'carte trois de trèfle.png';
    carte.alt = 'trois de trèfle';
    puce = 3;
    compare();
})

let carte4 = document.getElementById('carte4');
carte4.addEventListener('click', function () {
    carte = document.getElementById('carte4');
    carte.src = 'carte dix de coeur.png';
    carte.alt = 'dix de coeur';
    puce = 4;
    compare();
})

let carte5 = document.getElementById('carte5');
carte5.addEventListener('click', function () {
    carte = document.getElementById('carte5');
    carte.src = 'carte trois de trèfle.png';
    carte.alt = 'trois de trèfle';
    puce = 3;
    compare();
})

let carte6 = document.getElementById('carte6');
carte6.addEventListener('click', function () {
    carte = document.getElementById('carte6');
    carte.src = 'carte dame de pique.png';
    carte.alt = 'dame de pique';
    puce = 2;
    compare();
})

let carte7 = document.getElementById('carte7');
carte7.addEventListener('click', function () {
    carte = document.getElementById('carte7');
    carte.src = 'carte cinq de carreau.png';
    carte.alt = 'cinq de carreau';
    puce = 5;
    compare();
})

let carte8 = document.getElementById('carte8');
carte8.addEventListener('click', function () {
    carte = document.getElementById('carte8');
    carte.src = 'carte cinq de carreau.png';
    carte.alt = 'cinq de carreau';
    puce = 5;
    compare();
})

let carte9 = document.getElementById('carte9');
carte9.addEventListener('click', function () {
    carte = document.getElementById('carte9');
    carte.src = 'carte ase de coeur.png';
    carte.alt = 'ase de coeur';
    puce = 1;
    compare();
})

let carte10 = document.getElementById('carte10');
carte10.addEventListener('click', function jeu10() {
    carte = document.getElementById('carte10');
    carte.src = 'carte dix de coeur.png';
    carte.alt = 'dix de coeur';
    puce = 4;
    compare();
})


function compare() {
    if(copie === 0) {
        copie = puce;
        page = carte;
    } else {
        setTimeout(function () {
            if(copie === puce) {
                calcul += puce;
                if(puce === 1) {
                    document.getElementById('masque1').style.display = "block";
                    document.getElementById('masque9').style.display = "block";
                }
                if(puce === 2) {
                    document.getElementById('masque2').style.display = "block";
                    document.getElementById('masque6').style.display = "block";
                }
                if(puce === 3) {
                    document.getElementById('masque3').style.display = "block";
                    document.getElementById('masque5').style.display = "block";
                }
                if(puce === 4) {
                    document.getElementById('masque4').style.display = "block";
                    document.getElementById('masque10').style.display = "block";
                }
                if(puce === 5) {
                    document.getElementById('masque7').style.display = "block";
                    document.getElementById('masque8').style.display = "block";
                }
                if(calcul === 15) {
                    document.getElementById('para').style.display = "block";
                    document.getElementById('but').style.display = "inline-block";
                    calcul = 0;
                }
                copie = 0;
            } else {
                page.src = 'photo dessous carte.png';
                page.alt = 'dessout carte de jeux';
                carte.src = 'photo dessous carte.png';
                carte.alt = 'dessout carte de jeux';
                copie = 0;
            }
        }, 500)
    }
}

let recommencer = document.getElementById('but');
recommencer.addEventListener('click', function () {
    document.getElementById('masque1').style.display = "none";
    document.getElementById('masque2').style.display = "none";
    document.getElementById('masque3').style.display = "none";
    document.getElementById('masque4').style.display = "none";
    document.getElementById('masque5').style.display = "none";
    document.getElementById('masque6').style.display = "none";
    document.getElementById('masque7').style.display = "none";
    document.getElementById('masque8').style.display = "none";
    document.getElementById('masque9').style.display = "none";
    document.getElementById('masque10').style.display = "none";
    document.getElementById('para').style.display = "none";
    document.getElementById('but').style.display = "none";
    carte1.src = 'photo dessous carte.png';
    carte1.alt = 'dessout carte de jeux';
    carte2.src = 'photo dessous carte.png';
    carte2.alt = 'dessout carte de jeux';
    carte3.src = 'photo dessous carte.png';
    carte3.alt = 'dessout carte de jeux';
    carte4.src = 'photo dessous carte.png';
    carte4.alt = 'dessout carte de jeux';
    carte5.src = 'photo dessous carte.png';
    carte5.alt = 'dessout carte de jeux';
    carte6.src = 'photo dessous carte.png';
    carte6.alt = 'dessout carte de jeux';
    carte7.src = 'photo dessous carte.png';
    carte7.alt = 'dessout carte de jeux';
    carte8.src = 'photo dessous carte.png';
    carte8.alt = 'dessout carte de jeux';
    carte9.src = 'photo dessous carte.png';
    carte9.alt = 'dessout carte de jeux';
    carte10.src = 'photo dessous carte.png';
    carte10.alt = 'dessout carte de jeux';
})