class User {
    public name: string;
    private email: string;
// PRIVATE MAKES IT ONLY ACCESSABLE INSIDE THE CLASS USER (CAN STILL BE USED ON LINE 9 BUT NOT ANY LINE AFTER 13)
    protected age: number;
// PROTECTED IS THE SAME AS PRIVATE, BUT EXTENDS TO SUBCLASSES (MEMBER)

    constructor(name: string, email: string, age?: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + this.name);
    };

    payBill() {
        console.log(this.name + ' has paid their bill');
    }
};

// let ellis = new User('Ellis', 'ellis@test.com');


class Member extends User {
    id: number;

    constructor(id: number, name: string, email: string, age?: number) {
        super(name, email, age);
        this.id = id;
    };

    payBill() {
        super.payBill();
    };
};

let ellis: User = new Member(1, 'Ellis', 'ellis@test.com', 24);
ellis.payBill();