import React from "react";

const Prototype = () => {
    
    // Prototype is Javascript Hidden Inbuild Methods
    
  // Before  Prototype

  const student = {
    name: "Suraj",
    lastName: "Yadav",
    birth: 2000,

    getFulname: function () {
      return this.name + "" + this.lastName;
    },
    getDOB: function () {
      let age = new Date().getFullYear() - this.birth;
      return age;
    },
  };

  console.log("student", student.getDOB());

  const student1 = {
    name: "Neeraj",
    lastName: "Yadav",
    birth: 2005,
    getFullname: function () {
      return this.name + "" + this.lastName;
    },
    getDOB: function () {
      let age = new Date().getFullYear() - this.birth;
      return age;
    },
  };
  // Its call Getter Function
  console.log("student", student1.getDOB());

  // After Prototype

  let users = {
    getFulname: function () {
      return this.name + "" + this.lastName;
    },
    getDOB: function () {
      let age = new Date().getFullYear() - this.birth;
      return age;
    },
  };

  const studen2 = {
    name: "Suraj",
    lastName: "Yadav",
    birth: 2000,
    getFullname: users.getFulname,
  };
  studen2.__proto__ = users;
    // Prefer this step for performance

  console.log("student2", studen2.getDOB());

  const student3 = {
    name: "Neeraj",
    lastName: "Yadav",
    birth: 2005,
    getAge: users.getDOB,
  };

    student3.__proto__ = users; 
    // Prefer this step for performance

  console.log("student3", student3.getDOB());

  return <div></div>;
};

export default Prototype;
