enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "kamyar",
  age: 28,
  hobbies: ["reading", "learning"],
  role: Role.ADMIN,
};

console.log(person.age);

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
