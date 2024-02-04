// -OBJECT LITERALS 
// -OBJECT COSNSTRUCTOR
// -OBJECT CREATE METHOD 
// -FUNCTION CONSTRUCTOR 
// -FUNCTION CONSTRUCTOR WITH PROTOYTYPE 
// -ES6 CLASS 
// -SINGLETON PATTERN




// // OBJECT TLITERALS
// var object ={
//     name :"kanha",
//     age:23
// }

// // OBJECT CONSTRUCTOR
// var obj=new Object()
// var obj1=Object()

// // OBJECT CREAET METHOD
//  var obje2=Object.create(null)


// //  Function constroctor
// function Person(name) {
//     this.name=name;
//     this.age=21;
// }
// var new1=new Person("kanha")


// // ES6 CLASS METHOD
// class Person1{
//   constructor(name){
//    this.name=name
//   }
// }
// var new2=new Person ("kanha")

// // SINGALTON METHOD
// var object2=new (function(){
//      this.name="kanha"
// })()



// -----------------------------------------------------------------------------
// PROTOTYPY CHAINING
// -prototype chaning built a new objects based on the existing one



// --------------------------------------------------------------------------
// CALL,APPLY AND BIND METHOD
// var emp1={name:"kanha",last:"garje"};
// function invite(greet1,greet2) {
//     console.log(greet1 + " " + this.name + " " + this.last + ", " + greet2)
// }
// invite.call(emp1,"hello","how are u")
// invite.apply(emp1,["hello","how are u"])
// var bind=invite.bind(emp1)
// bind("hello","how are u")




//------------------------------------------------------------------- 
// JSON-Is the text based data formate following the js object syntax,Used to passing the text across the network by .json extension
// Parsing-converting the string to the nativ object
//  JSON.parse(text)

//Stringify-converting the native object to string
// JSON.stringify(text)  




// -------------------------------------------------------------------------------------------------
// ARRAY SLICE METHOD
// -It is used to slice the elements and create the new object according to the information

// ARRAY SPLICE METHOD
// -It is the method which is used to delete the elements or add the elements in the array,
//  1st number indicates the position of the element and 2nd indicats the no. of elements which we have to delete
// -Splice method modify the orignal array and gives the deleted array

// DIFF BET THE SLICE AND SPLICE ELEMENTS
//   SLICE                                                            SPLICE
// -Slice does not modify the orignal array                       -Splice is modify the orignal array
// -Slice returns the subset of the array                         -Splice Splice return the deleted array
// -Slice Used to pick the element form array                     -Splice used to insert/delet element from array



// ------------------------------------------------------------------------------------------------------------
// LAMBDA FUNCTION/ ARROW FUNCTION
// -arrow function is shortest syntax for the function expression and it does not have its argument ,super.new.target



// FIRST CLASS FUNCTION
// -In js function are 1st class objects,Function which trated as another variable

// const handler=() =>  console.log("this is the 1st function")
// document.addEventListener("click",handler)



//1ST ORDER FUNCTION
// -The function does not accept another function as the argument and does not return the function as the return value 

// const firstorder=() => console.log("this is 1st order function")


// HIGHER ORDER FUNCTION
// -The function accept another function and return the another function variable