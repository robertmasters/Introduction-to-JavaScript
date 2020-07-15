/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge = 19;
if (votingAge>18){
    console.log(true);
}

// or

console.log (votingAge>18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


let x = 0;
let y = 3;
if (x<y){
    x=x+2;
} else{
    x = y;
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


let n = "503";
console.log(Number(n));


//Task d: Write a function to multiply a*b 



function mult(a,b){
    return a*b;
}
console.log(mult(2,3));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogyears(human){
    return human*7;
}



console.log(dogyears(2));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(pounds, years){
    //declaring the variables
    let dog = '';
    //if else: used to find out if dog is puppy or if not
    if (years<1){
         dog = 'puppy';
    } else if (years>=1){
        dog= 'adult';
    }

    //calculations for adult dogs
    if (dog==='adult'){
        // up to 5 lbs - 5% of their body weight
        if(pounds<=5){
            let bodyWeight = pounds*.05;
        }
        // 6 - 10 lbs - 4% of their body weight 
        else if (pounds<=10){
            bodyWeight = pounds*.04;
        }
        // 11 - 15 lbs - 3% of their body weight 
        else if (pounds<=15){
            bodyWeight = pounds*.03;
        }        
        // > 15lbs - 2% of their body weight 
        else if (pounds>15){
            bodyWeight = pounds*.02;
        }
    }



    if (dog==='puppy'){
        //calculations for puppy
        let month = 1/12;
        //.083 = 1 month in decimal form
        // 2 - 4 months human months 10% of their body weight
        if (years>= month*2 && years<=month*4){
            bodyWeight = pounds*.1;
            console.log('yo: '+bodyWeight);
        }
        // 4 - 7 months 5% of their body weight 
        else if (years> month*4 && years<=month*7){
            bodyWeight = pounds*.05;
            console.log('yo: '+bodyWeight);
        }

        // 7 - 12 months 4% of their body weight
        else if (years> month*7 && years<=month*12){
            bodyWeight = pounds*.04;
            console.log('yo: '+bodyWeight);
        } else {
        console.log('no: '+bodyWeight);
        }
    }
    return bodyWeight;

}

console.log("adult: " + dogFeeder(15,3)); // test adult
console.log("Puppy: " + dogFeeder(15,.2)) // test puppy




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 



  function rps(hand){
    let computer = Math.floor(Math.random() * Math.floor(3));
    console.log("computer: " +computer);
    let cp=" ";
    if (computer===0){
        cp = "rock";
    } else if(computer===1){
        cp = "paper";
    } else if (computer===2){
        cp = "sissors";
    }
    console.log("cp: "+ cp + " vs you: "+hand);
    //rock beats sissors
    if (hand=== "rock" && cp ==="sissors"){
        return "you win";
        //rock looses to paper
    } else if (hand ==="rock" && cp==="paper"){
        return "you loose";
        //paper beats rock
    } else if (hand === "paper" && cp === "rock"){
        return "you win";
        //paper looses to sissors
    } else if (hand === " paper" && cp ==="sissors"){
        return "you loose";
        //sissors beats paper
    } else if (hand === "sissors" && cp === "paper"){
        return "you win";
        //sissors looses to rock
    } else if (hand === " sissors" && cp ==="rock"){
        return "you loose";
    }
    
    //tie
    if (cp===hand){
        return "tie";
    }
}

console.log(rps("rock"))

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function kmToMiles(km){
    miles = km*0.621371;
    return miles;
}

console.log(kmToMiles(2));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(feet){
    feet = feet*30.48;
    return feet;
}

console.log(feetToCm(2));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(num){
    for (let i = num;i>0;i--){
        console.log(i+" bottles of soda on the wall, "+i+ " bottles of soda, take one down pass it around "+ (i-1) + " bottles of soda on the wall");
    }
    return ":)";
}

console.log(annoyingSong(10));


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  function gradesOfDoom(mark){
    //90s should be A 
    if (mark>89){
        return 'A';
    }
    //80s should be B 
    else if (mark>79){
        return 'B';
    }
    //70s should be Cs 
    else if (mark>69){
        return 'C';
    }
    //60s should be D 
    else if (mark>59){
        return 'D';
    }
    //and anything below 60 should be F
    else if (mark<60){
        return 'F';
    }
  }

  console.log(gradesOfDoom(99))//test A
  console.log(gradesOfDoom(87))//test b
  console.log(gradesOfDoom(70.2))//test c
  console.log(gradesOfDoom(60))//test d
  console.log(gradesOfDoom(-3))//test f
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function vowelsInString(vowelsWithin){
    let count = 0;  //used to count the number of vowels that are insisde of the string
    let vowels = 'aeiou'; // going to be used to compare strings

    for (let i=0; i< vowelsWithin.length;i++){ // .length shows me all the characters in the string vowelWithin.
        if(vowels.indexOf(vowelsWithin[i].toLowerCase()) > -1) { // indexOf shows me the index number of the string and if the character is not found then it displays a -1, so all values greater than -1 will be within the string vowelWithin.
            count ++;
        }
    }
    return count;
}

console.log(vowelsInString('Where are you now'));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object




function rps(hand){
    let computer = Math.floor(Math.random() * Math.floor(3)); // allows me to get only 3 options 0,1,2 at random each time.
    console.log("computer: " +computer);
    let cp=" ";
    if (computer===0){
        cp = "rock";
    } else if(computer===1){
        cp = "paper";
    } else if (computer===2){
        cp = "sissors";
    }
    console.log("cp: "+ cp + " vs you: "+hand);
    //rock beats sissors
    if (hand=== "rock" && cp ==="sissors"){
        return "you win";
        //rock looses to paper
    } else if (hand ==="rock" && cp==="paper"){
        return "you loose";
        //paper beats rock
    } else if (hand === "paper" && cp === "rock"){
        return "you win";
        //paper looses to sissors
    } else if (hand === "paper" && cp ==="sissors"){
        return "you loose";
        //sissors beats paper
    } else if (hand === "sissors" && cp === "paper"){
        return "you win";
        //sissors looses to rock
    } else if (hand === "sissors" && cp ==="rock"){
        return "you loose";
    }
    
    //tie
    if (cp===hand){
        return "tie";
    }
}

let hand = window.prompt("Enter either rock, paper, or sissors"); // stored user input into variable hand, window.prompt() prompts user with a message and give user an area to store the input.

console.log(rps(hand))
