

// console.log (MASH());

function randomizer (num){
    return Math.floor(Math.random()*num)
}

let home = [" mansion","n apartment"," shack"," house"];

function getHome(){
    if(process.argv[2] != ""){

    }  
    else{
        home.push (process.argv[2]); 
      }
    return home[randomizer(home.length)];
}

console.log (getHome());
console.log (process.argv);
console.log (home.length);

function getChildrenCount (){

    if (Math.random()>=0.5){
        return randomizer(101);
    }
    else if(process.argv.length<5){
        return randomizer(101); 
    }
    else{
       return process.argv[3];
    }
}

function getCar(){
    let car=["pogostick","sled","Tricycle","StopMotionVideo movement"]
    if(process.argv[4] = ""){

    }  
    else{
        car.push (process.argv[4]); 
      }
    return car[randomizer(car.length)];   
}

function getSpouse(){
    let spouse=["Toph","Dexter's mom","one of the airbuds","A StopMotionVideo creator"]
    if(process.argv[5] = ""){

    }  
    else{
        spouse.push (process.argv[5]); 
      }
    return spouse[randomizer(spouse.length)];   
}

function getSalaryCount (){

    if (Math.random()>=0.5){
        return randomizer(100000);
    }
    else if(process.argv.length<9){
        return randomizer(100000); 
    }
    else{
       return process.argv[6];
    }
}


function getAgeCount (){

    if (Math.random()>=0.5){
        return randomizer(101);
    }
    else if(process.argv[7] = ""){
        return randomizer(101); 
    }
    else{
       return process.argv[7];
    }
}

function getCareer(){
    let career=["WeWork employee","as the person who puts the velcro on computer chargers","shoe shiner","StopMotionVideo creator"]
    if(process.argv[8] = ""){

    }  
    else{
        career.push (process.argv[8]); 
      }
    return career[randomizer(career.length)];   
}

function name(){
    let playerName = ["Moon", "Jamal", "MoMo", "Steve", "Mo", "Ahmed", "Chris","Chris T.", "Zach", "Marcus", "Axel", "Brian", "Swp", "Zhul", "Joel", "Labeeb", "Tre", "Nathaniel", "Fillip", "Kevin", "Joe", "Max", "Jaylen", "Cavin", "Cameron"," Jaden", "Micheal", "Marvins", "Jen"];
    return playerName[randomizer(playerName.length)];
 }
 








function MASH (){
    return "Your name is " + name() +",you will live in a" + getHome() +", you will have " + getChildrenCount() + " kids, you will drive a "+ getCar() + ". You will be married to "+ getSpouse() + " and will die at the ripe age of "+ getAgeCount()+ ". You will make "+ getSalaryCount() + " as a "+ getCareer()+".";
}

console.log (MASH());

