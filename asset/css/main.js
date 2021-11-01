var myInfo = {
    name: 'Phuc Pill',
    age: 18, 
    address: 'Long An',
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }
};

console.log(myInfo.getName());