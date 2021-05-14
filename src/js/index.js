// -- Variables Globales --
const body = document.querySelector('body');
const root = document.getElementById('root');
let arrayData = [
    {
        name: 'Canserbero',
        music: 'Pensando en tí'
    }
];

// Fecha y hora
let hoy = new Date();
let fecha = hoy.getDate() + '/' +  +"0"+( hoy.getMonth() + 1 ) + '/' + '21';

function myTime() {
    let d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}


setInterval(myTime, 50);

const content = () => {
    let content = document.createElement('div');
    content.setAttribute('class', 'content');
    root.appendChild(content);
};

const navbar = () => {
    let content = document.querySelector('.content');
    
    let navbar = document.createElement('nav');
    content.appendChild(navbar);

    navbar.innerHTML = navbarHTML();
};  

const footer = () => {
    let content = document.querySelector('.content');

    let footer = document.createElement('footer');
    content.append(footer);

    footer.innerHTML = `
        <i class="fas fa-caret-left"></i>
        <i class="fas fa-circle"></i>
        <i class="fas fa-square"></i>
    `;
};



// -- Funciones HTML de la app interna --
const navApp = () => {
    let content = document.querySelector('.content');

    let navApp = document.createElement('div');
    
    navApp.innerHTML = `
        <h1 style="
            color: #fff;
            font-family: font_1;
            font-size: 35px;
        ">
            App | Music
        </h1>

        <div style="
            width: 45px;
            height: 45px;
            background-color: #303030;
            background-image: url(https://i.ibb.co/W2wVGJB/1.png);
            background-size: cover;
            background-position: center;
            border-radius: 50%;
        "></div>
    `;
    
    content.append(navApp);

    navApp.style.cssText = `
        width: 100%;
        height: 60px;
        background-color: #202020;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
    `;
};

// -- Barra de carga --
const barraDeCarga = () => {
    let barraDeCarga = document.createElement('div');
    barraDeCarga.style.cssText = `
        width: 100%;
        height: 2.5px;

        background: rgb(107,0,0);
        background: -moz-linear-gradient(282deg, rgba(107,0,0,1) 0%, rgba(255,0,146,1) 100%);
        background: -webkit-linear-gradient(282deg, rgba(107,0,0,1) 0%, rgba(255,0,146,1) 100%);
        background: linear-gradient(282deg, rgba(107,0,0,1) 0%, rgba(255,0,146,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#6b0000",endColorstr="#ff0092",GradientType=1);
        
        transition: 0.5s;
    `;

    const content = document.querySelector('.content');
    content.append(barraDeCarga);
};

// -- Portada --
const portada = () => {
    let content = document.querySelector('.content');
    
    let portada = document.createElement('div');
    portada.style.cssText = `
        width: 100%;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 15px;
        padding-bottom: 10px;
        background-image: url(https://i.ibb.co/fdjTr0r/canserbero.png);
        background-position: center;
        background-size: cover;
    `;

    portada.innerHTML = `
        <div style="
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #303030;
            background-size: cover;
            background-position: center;
            background-image: url(https://e.rpp-noticias.io/xlarge/2020/01/20/094809_889412.jpg);
        ">  </div>

        <span style="
            color:#fff;
            font-weight: bolder;
            font-size: 17px;
        ">
            ${
                arrayData[0].name
                    +  " | "  +
                arrayData[0].music
            }
        </span>
    `;
    
    content.append(portada);
};

// ---- Funciones del reproductor (Botones) ----
const playerCaja = () => {
    let content = document.querySelector('.content');

    let playerCaja = document.createElement('div');
    playerCaja.setAttribute('style', `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 6px 0;

        background: linear-gradient(0, #000, transparent);
        background-color: #202020;
    `);

    playerCaja.innerHTML = playerCajaHTML();

    content.append(playerCaja);
};

const titlePlaylist = () => {
    let content = document.querySelector('.content');

    let titlePlaylist = document.createElement('div');
    titlePlaylist.setAttribute('style', `
        width: 100%;
        color: #fff;
        text-align: center;
        font-weight: bolder;
        font-size: 20px;
        background-color: #000;
        padding: 10px 0 ;
        border-radius: 0 0 30px 30px;
        box-shadow: 0 1px 10px 0 #000;
        border-bottom: 2px solid rgba(252, 69, 69, 0.5);

 
    `);
    titlePlaylist.innerHTML = "PlayList";
    
    content.append(titlePlaylist);
};


// -- HTML de la (caja contenedora de botones) --
function playerCajaHTML() {
    return(`
<div>

	    <!-- Pause Button -->
    <div id="playpausebtn">

        <i class="fas fa-play" style="display:none;" onclick="playy(this);"></i>
        <i class="fas fa-pause" onclick="pausee(this)"></i>

    </div>

	    <!-- Seek Slider -->
    <input id="seekslider" type="range" min="0" max="100" value="0" step="1">
	   
        <!-- Mute Button -->
    <div id="mutebtn">

        <i class="fas fa-volume-up" onclick="upp(this);"></i>
        <i class="fas fa-volume-mute" style="display:none;" onclick="mutee(this);"></i>

    </div>
	    <!-- Div Content Time -->

        <!-- Volume Slider -->
        <input id="volumeslider" type="range" min="0" max="100" value="100" step="1">

</div>


	<div id="tirbox">
		    <!-- Time Box -->
		<span id="curtimetext">00:00</span> / <span id="durtimetext">00:00</span>
	</div>
	
	    
        <!-- Music Changer
    <div id="change"> Change </div>
        -->

    `);
};




// -- HTML del (nav) --
function navbarHTML() {
    return(`
    <!-- notificaciones -->
    <div class="notificaciones">
        <i id="face" class="fab fa-facebook"></i>
        <i id="whas" class="fab fa-whatsapp"></i>
    </div>

    <!-- internet -->
        <div class="internet" style="color: #fff; font-size: 10px; font-weight: bolder;">
         
        </div>

    <!-- Signal and time -->
    <div class="signal">

        <i class="fas fa-signal"></i>
        <i class="fas fa-battery-full"></i>
        <span id="time">  </span>

    </div>
    `);
};

// Crear Contenedor Principal
content();

// Crear Barra de notificaciones Principal
navbar();

// Crear Barra de Navegación Principal
footer();

// -- NavApp interna --
navApp();

// -- barraDeCarga --
barraDeCarga();

// -- portada de la App --
portada();

// --- Botones de reprodución (Caja contenedora) ---
playerCaja();

// -- Titulo de playlist --
titlePlaylist();







// --- Funciones extras ---

// Internet ficticio e.e
function aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a)) + " mb";
}function internet() {
    document.querySelector('.internet').innerHTML = aleatorio(1, 10);
}setInterval(internet, 1000);



// -- Funciones para pause y play
function pausee(e) {
    e.style.display = "none";
    document.querySelector('.fa-play').style.display = "inline-flex";
};

function playy(e) {
    e.style.display = "none";
    document.querySelector('.fa-pause').style.display = "inline-flex";
};


// -- Funciones para mute y unmute
function upp(e) {
    e.style.display = "none";
    document.querySelector('.fa-volume-mute').style.display = "inline-flex";
};

function mutee(e) {
    e.style.display = "none";
    document.querySelector('.fa-volume-up').style.display = "inline-flex";
};