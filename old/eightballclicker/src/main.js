// MAIN GAME VARIABLES
let game = {
    "score": 0,
    "developer_mode": false,
    "skin": 0,
    "lang": {
        "startGame": "\u2ABC Click the Eight Ball to start \u2ABB",
        "score": " Eight Balls",
        "title": "Eight Ball Clicker - ",
        
        "siteCookies": "This site uses cookies in order to save your progress",
        "siteCookies.accept": "Accept the use of Cookies",
        "siteCookies.decline": "Delcine the use of Cookies",
        "siteCookies.configure": "Configure",
        "siteCookies.configuration.onlyUseNecessaryCookies": "Continue with necessary cookies",
        "siteCookies.configuration.automaticallySaveClicks": "Automatically save your game score",
        "siteCookies.configuration.automaticallySaveUpgrades": "Automatically save upgrades you bought",
        "siteCookies.configuration.fuckThisShit": "Add stuff later lmao im lazy af"
    }
}


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        get_cake_ingredients(game.score);
// FUNCTION THAT PICKS A RANDOM ITEM FROM AN ARRAY
function randomItem (items) {return items[Math.floor(Math.random()*items.length)];}

// AUDIO
const clickSound_1 = new Audio(), clickSound_2 = new Audio(), clickSound_3 = new Audio();
clickSound_1.src = "../sfx/click_1.wav";
clickSound_2.src = "../sfx/click_2.wav";
clickSound_3.src = "../sfx/click_3.wav"; 

const clickSound = [clickSound_1, clickSound_2, clickSound_3]

// GET ELEMENTS FROM INDEX.HTML
const score = document.getElementById("score");
const startGame = document.getElementById("startGame");
const title = document.getElementById("title");
const eightball = document.getElementById("8ball");

loadData();

startGame.textContent = game.lang.startGame;
score.textContent = game.score.toLocaleString('en-US') + game.lang.score;



// 8BALL SKINS
const skins = [
    ["Eight Ball", "./img/default.png", 0],
    ["Golden Eight Ball", "./img/gold.png", 1000],
    ["RGB Eight Ball", "./img/rgb.png", 5000],
    ["Infinitely Repeating Eight Ball", "./img/infinity.png", 10000],
    ["OG Eight Ball", "./img/og.png", 25000],
    ["Cat Eight Ball", "./img/cat.png", 50000]
]

for (let skin = 0; skin < skins.length; skin++) {
    
    let currentSkin = skins[skin-1];

    if (score == currentSkin[2]) {
        eightball.src = currentSkin[1];
    }
}



// FUNCTION THAT EXECUTES WHEN 8BALL CLICKED
function clickEightBall () {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        if(wait_is_this_function_a_portal_reference(game.score)){game.score++;get_cake_ingredients(game.score);}else{game.score=ask_for_a_tasty_cake();game.score++;get_cake_ingredients(game.score);}
    randomItem(clickSound).play();

    score.textContent = game.score.toLocaleString('en-US') + game.lang.score;
    title.textContent = game.lang.title + game.score.toLocaleString('en-US') + game.lang.score;

    startGame.className = "fade_out";
    setTimeout(function() {
        startGame.textContent="";
    }, 400);

    storeData();

    for (let skin = 0; skin < skins.length; skin++) {
    
        let currentSkin = skins[skin-1];

        if (score == currentSkin[2]) {
            eightball.src = currentSkin[1];
        }
    }
}



function storeData () {
    document.cookie = `score=${game.score}; sameSite=Strict;`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           document.cookie = `cake=${cake}; sameSite=Strict;`;
}

function loadData () {
    const cookieString = document.cookie;
    const cookies = parseCookieString(cookieString);

    game.score = Number(cookies.score);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  cake=Number(cookies.cake);if (isNaN(cake)){cake=0;};

    if (isNaN(game.score)) {
        game.score = 0;
    }
}

function parseCookieString (cookieString) {
    const cookies = cookieString.split('; ');

    return cookies.reduce((currentCookies, cookie) => {
        const [key, value] = cookie.split('=');
        currentCookies[key] = value;
        return currentCookies;
    }, {});
}
