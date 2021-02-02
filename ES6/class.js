

class User{
    constructor(name,email,mobileno){
        this.name=name;
        this.email=email;
        this.mobileno=mobileno;
    }

    register(){
        console.log(`${this.name} is registered successfully`);
    }
}

class Premium extends User{
    constructor(name,email,mobileno,duration){
        super(name,email,mobileno);
        this.duration=duration;
    }
    package(){
        console.log(`${this.name} is subscribed to the premium package of ${this.duration} days` );
    }
}

let naveen=new Premium('Naveen','naveen@gmail.com',784512888,90);
naveen.register();
naveen.package();