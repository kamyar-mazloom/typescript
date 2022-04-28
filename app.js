var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "kamyar",
    age: 28,
    hobbies: ["reading", "learning"],
    role: Role.ADMIN
};
console.log(person.age);
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
