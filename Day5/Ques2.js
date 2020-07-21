class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.courses = [];
    }

    
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
        this.luCoins = 0;
     
       
    }

    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);        
        return this;
    }
}

class Admin extends Moderator{
    
    addCourse(user,course){
        
        user.courses.push(course);
        console.log(user);
    }

    deleteCourse(user,course){
        var filteredAry = user.courses.filter(function(e) { return e !== course })
        console.log(filteredAry);
    }
 }


let user1 = new User('ABC',25,'abc@gmail.com')
let mod = new Moderator('Narendra modi',24,'narendra@gmail.com');
let admin = new Admin();

console.log(user1.login());

console.log(user1.logout());

console.log(mod.addCoins());
console.log(mod.addCoins());

console.log(mod.removeCoins());

console.log(admin.addCourse(user1,"CSS"));
console.log(admin.addCourse(user1,"JavaScript"));
console.log(admin.addCourse(user1,"Java"));
console.log(admin.deleteCourse(user1,"JavaScript"));