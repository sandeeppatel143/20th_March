function getPerson(obj) {
    try {
      if (!obj.hasOwnProperty("Name") || !obj.hasOwnProperty("Age")) {
        throw new Error("Invalid parameter type");
      }
      return `"Name: ${obj.Name}, Age: ${obj.Age}"`;
    } catch (error) {
      return error.message;
    }
  }
  console.log(getPerson({Name:"Sandeep", Age:20}))
  console.log(getPerson({Name:"Sandeep"}))
  console.log(getPerson(["Name","Age"]))
