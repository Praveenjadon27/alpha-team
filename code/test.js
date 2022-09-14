const obj1 = {
    name : "kapil",
    getName : function(){
    console.log(`my name is - ${this.name}`);
    }
    }
    console.log(obj1.getName());