
   /* function myFunction(){
        document.getElementById("prop").innerHTML = "None use";
    }

    function myFunction(){
        document.getElementById("dem").innerHTML = "How was school today";
    }

    function displayDate(){
        document.getElementById('dis').innerHTML = Date();
    }

    {
        let x = ` "John"`;

        let y = 50;
        let z = x  + " " + "is" + "  "  + y;

        document.getElementById('v').innerHTML =   x  + " " + "is" + "  "  + y;
        alert(z)
    }
    
    {
        let x = "Prosper";
        x = x.toUpperCase()
        let y = "ertwfeghghehejekeqqqqqqqqqqq";
        let w = "thehghwjsjkwedd"
        let t = "Jonathan, Prosper, Chinedu"
        t = t.slice (9)
        w = w.at(4)
        y = y.length
        let z = x + " " + "is" + " "  + y + " " + "Year old" + " " + w + " " + t;
        alert(z)
    }

    //Break a javescript string using +
    {
        document.getElementById('string').innerHTML = 
        "Hello   " +
        "Daniel  " + 
        "What you did \"yesterday\" was wrong.  " +
        "And i'm not happy about it " +
        "i love you riri";
    }

    var myvar = 9;
    myvar = 20;
    
    
    console.log(myvar);


    var Name= 'John';
    var lastName= "John";
    let age= 50;
    Name = Name.toUpperCase;
    const myobject=  {firstName:"John", lastName:"Doe", age:50 };

    const sur_name=["Jonathan, John, Judith, Chiboy, Aka, chidma, chiboy" ] 

    const bank_account={ firstName: "Jonathan", lastName: "Prosper", Email: "jonathan@gmail.com" }


    let num = 45;
    num *= 10;
    //alert(num)
{
    let num_ = 15;
    let num = 15;
}

{
    let num_ = 15;
    let num = 15;
    //alert(num_===num)
}

{
    let prosper = true;
    let jonathan = false;
    let num = 7;
    let num_ = 5;
    let amala = prosper ? num: num_
    //alert(amala)
}

{
    let v = 3;
    let o = "sign in successful";
    let q = "sign in failed";
    //alert(v > 8 ? o:q)
}

{
    let v = 4;
    let y = 4
    let f = 6
    //alert(v==f)
}

{
   
    
}


const tree ={
    proptree: "fruit",
    proptree2: "leaves",
    proptree3: "green",
    proptree5: "roots",

    Totaltree: function (){
        return this.proptree
    },

    Totaltree2: function(){
       return  this.proptree2
    },

    Totaltree3: function(){
        return  this.proptree3
     },


     Totaltree4: function(){
        return  this.proptree4
     },
}
   document.getElementById("tree").innerHTML = tree.Totaltree();
   document.getElementById("tree4").innerHTML = tree.Totaltree2();
   document.getElementById("tree3").innerHTML = tree.Totaltree3();
   document.getElementById("tree5").innerHTML = tree.Totaltree4()*/


/*--------------Object constructor--------------------*/

   function Animal(Name, Nick, age, color){
    this.Name = Name;
    this.NickName =  Nick;
    this.age = age;
    this. color = color;
   }

   const son = new Animal("Dog", "Bingo", 50, "white");

   document.getElementById("Json").innerHTML=  "My" +  " " + son.Name +  " "  +  son.NickName + " is "  +  " " + son.age + ", " + "has a color of " + son.color;


  /*------------object literal--------*/
{
  const Animal = {
    Name: "Dog",
    NickName: "Bingo",
    age: 50,
    color: "white",
    AnimalName: function() {
      return  "My" + " " + this.Name + " " + this.NickName + " is" + " " + this.age + " "  + "has a color of " + this.color;
    }
  };
  

  document.getElementById("cost").innerHTML = Animal.AnimalName();
}