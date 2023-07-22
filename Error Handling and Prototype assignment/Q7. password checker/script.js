class User {
    constructor(u, p) {
        this.username = u;
        this.password = p;
    }

    // Getter method for password
    getPassword() {
        return this.password.replace(/./g, '*');
    }

    // Setter method for password
    setPassword(newPassword) {
        const regex = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
        if (regex.test(newPassword)) {
            this.password = newPassword;
        } else {
            console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        }
    }
}

const user = new User("mithun", "Password123");
console.log(user.getPassword());

user.setPassword("myPassword");
console.log(user.getPassword());

user.setPassword("MyPassword");
console.log(user.getPassword());

user.setPassword("myPassword123");
console.log(user.getPassword());