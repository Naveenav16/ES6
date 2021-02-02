
function Example(){

    var color="green";
    let x=20;
    const y=30;

    //var is a global scope
    if(true){
        var color="red";
        console.log(`Example of var is ${color}`);
    }
    console.log(color);
  
    //let value
    x=200;

    console.log(`We can change the value of let ${x}`);

    //const value

    y=300;

    console.log(`We can change the value of let ${y}`);
}




Example();