

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

class Premium {
    constructor(naveen,duration){
        this.naveen=naveen;
        this.duration=duration;
    }
    package(){
        console.log(`${this.naveen.name} is subscribed to the premium package of ${this.duration} days` );
    }
}

let user=new User('Naveen','naveen@gmail.com',784512888);
let naveen=new Premium(user,90);


naveen.package();