class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    getpassword() {
      return this._password.replace(/./g, '*');
    }
  
    setpassword(newPassword) {
      const passwordRegex = /^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
      if (passwordRegex.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error('Invalid password format. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  }

const user=new User("Sandeep","San12345");
console.log(user.getpassword());

user.setpassword("Sandeep")
user.setpassword("san12345")
user.setpassword("12345")
user.setpassword("Sandeep12345")
console.log(user.getpassword());