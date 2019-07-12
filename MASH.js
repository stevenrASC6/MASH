

// console.log (MASH());
let home = [" mansion","n apartment"," shack"," house"];

function getHome(){
    if(process.argv.length<5){

    }  
    else{
        home.push (process.argv[2]); 
      }
    return home[Math.floor(Math.random()*home.length)];
}




function getChildrenCount (){

    if (Math.random()>0.5){
        return Math.floor(Math.random()*101);
    }
    else if(process.argv.length<5){
        return Math.floor(Math.random()*101); 
    }
    else{
       return process.argv[3];
    }
}

function getCar(){
    let car=["pogostick","sled","Tricycle","StopMotionVideo"]
    if(process.argv.length<5){

    }  
    else{
        car.push (process.argv[4]); 
      }
    return car[Math.floor(Math.random()*car.length)];   
}

function MASH (){
    return "You will live in a" + getHome() +", you will have " + getChildrenCount() + " kids, and you will drive a "+ getCar(); 
}

console.log (MASH());