const obj1 = {
    name : "kapil",
    getName : function(){
    console.log(`my name is - ${this.name}`);
    }
    }
    console.log(obj1.getName());
    
const obj2 = {
    name : "AlmaBetter",
    getName : () => {
    console.log(`my name is - ${this.name}`);
    }
    }
    console.log(obj2.getName());
