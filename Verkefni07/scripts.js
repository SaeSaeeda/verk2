/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns `true` ef tala er innan bils, annars `false`.
 */

function isValidNum(numAsString, min, max) {
  if (isNaN(numAsString)){
    return false;
  }

  if (MIN_NUM_OF_CUPS> numAsString || numAsString>MAX_NUM_OF_CUPS){
    return false;
  }
  return true;
}

/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
 const guess = prompt(`Under which cup is the ball? choose a number between [${1}, ${numOfCups}], 
 \n Press ESC or cancel to cancel`)
 const choice= Number.parseInt(guess, 10);
  if(choice == null){
    return null;
  }
  if(choice== null){
    return null;
  }

  if (1> choice || choice > numOfCups){
    alert (`Invalid input, choose a number between [${1}, ${numOfCups}]`);
    getChoice(numOfCups);
  }
return choice;
}

  
/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spilum leik.
 */
function play() {
  alert(`You choose the amount of cup you wanna play with and we randomly put a ball under one of them,
  \n if you guess currectly you win otherwise and gain points you lose`)
  do {
    const numOfCups = prompt(`How many cups do you want to play? choose a number between [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}], 
    you get N-1 points for finding the ball among N number of cups
    press ESC or cancel to close this window. `)

    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    }

    if (!isValidNum(numOfCups)){
      console.error(numOfCups + 'is not a valid number! Try again')
      return;
    }
    const cup= randomNumber (1, numOfCups);

    const choice = getChoice(numOfCups);
    if(choice === null){
      return;
    }

    if(choice === cup){
      const pointsWon= numOfCups-1;
      points= won+1
      alert (`You have guessed correctly! Currently you have ${pointsWon} points!`);
    }

    else{
      alert ('You have guessed incorrectly, Take this L and try again')
    }
    played = played+1;
    }
    while (true)

}

/**
 * Birtir stöðu spilara.
 */
function games() {
  console.log(` you have played ${played} games`);
  if (played>0){
    console.log(`you have won ${won} games,  you have lost ${played-won} games, in total you have earned ${points} points`)
  }
}