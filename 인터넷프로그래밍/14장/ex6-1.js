var person = 
{
    name : "limhuiseong",
    age : 20,
    sayHello : function()
    {
        document.write(this.name + "님 안녕하세요!")
    }
};

document.write("이름:" + person.name);
document.write("나이:" + person.age);
person.sayHello;