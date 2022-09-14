const person2 = {
    name: "AlmaBetter",
    hobbies: ["cricket", "coding", "teaching"],
    getHobbies: function () {
    this.hobbies.forEach((x) => {
    console.log(`${this.name} like - ${x}`);
    });
    },
    };
    console.log(person1.getHobbies());

    const person2 = {
        name: "AlmaBetter",
        hobbies: ["cricket", "coding", "teaching"],
        getHobbies: function () {
        this.hobbies.forEach((x) => {
        console.log(`${this.name} like - ${x}`);
        });
        },
        };