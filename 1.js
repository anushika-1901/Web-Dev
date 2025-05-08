// alert('Hello world')
// var bankAccount=1000;
// var deposit=100;
// var balance=bankAccount+deposit;
// console.log(balance)

// var hot=false;
// var temp=80;
// if(temp>60){
//     console.log('Temp is greater than 60');
// }

// console.log(hot)


// var ham=0;
// var cheese=0;
// var report='blank';
// if(ham>=10 && cheese>=10){
//     report='The sale is very good';
// }
// else if(ham==0 && cheese==0){
//     report='There was not any sale';
// }
// else{
//     report='No sale'
// }
// console.log(report)



// var i=0;
// while(i<10){
//     console.log(i);
//     i=i+1;
// }


// for(var i=1;i<10;i++){
//     if(i==7){
//         break;
//     }
//     console.log(i);
// }

// for(var i=1;i<20;i++){
//     if(i==15){
//         continue;
//     }
//     console.log(i);
// }


// var i=0;
// while(i<10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// for(var i=0;i<5;i++){
    // console.log('Number is :'+i);
// }


// var word='abcdefghijklmnop';
// for(var i=0;i<word.length;i=i+2){
//     console.log(word[i]);
// }


// for(var i=0;i<5;i++){
//     console.log('Hello');
// }

// var firstName=prompt('Enter the first name :');
// var lastName=prompt('Enter the last name :');
// var age=prompt('Enter the age :');
// var height=prompt('Enter the height :');
// var petName=prompt('enter the pet name :');
// alert('Thank you so much for the information');

// var nameCond=null;
// var ageCond=null;
// var petCond=null;
// var heightCond=null;

// if (firstName[0]==lastName[0]){
//     nameCond=true;
// }
// else{
//     nameCond=false;
// }
// if(age>20 && age<30){
//     ageCond=true;
// }
// else{
//     ageCond=false;
// }
// if(height>=170){
//     heightCond=true;
// }
// else{
//     heightCond=false;
// }
// if(petName[petName.length-1]==='y'){
//     petCond=true;
// }
// else{
//     petCond=false;
// }
// if(nameCond && ageCond && heightCond && petCond){
//     console.log('Welcome spy, you did not find any bug');
// }
// else{
//     console.log('Nothing to see here');
// }


// function hello(){
//     console.log('Hello world')
// }


// function hello(name='Anushika'){
//     console.log('Hello'+name);
// }

// function helloWorld(name){
//     console.log('Hello'+name);
// }


// function sum(a,b){
//     console.log(a+b);
// }

// function formal(name='sam',greeting='Mr.'){
//     return 'Hello '+ greeting+ name;
// }

// function timeFive(num){
//     return num*5;
// }



// var v='GLOBAL V';
// var stuff='global stuff';
// function fun(stuff){
//     console.log(v)
//     stuff='Reassign stuff again';
//     console.log(stuff)
// }
// console.log(stuff)
// fun()
// console.log(stuff)



// function sleepIn(weekday,vacation){
//     return (!weekday || vacation)
// }


// function monkeySmiling(aSmile,bSmile){
//     return ((aSmile && bSmile) || (!aSmile && !bSmile))
// }

// function stringTimes(str,n){
//     var i=0;
//     var result=''
//     while(i<n){
//         result=result+str;
//         i++;
//     }
//     return result;
// }


// function luckySum(a,b,c){
//     if(a==13){
//         return 0;
//     }
//     if(b==13){
//         return a;
//     }
//     if(c==13){
//         return a+b;
//     }
//     return a+b+c;
// }

// function caught_speeding(speed,is_birthday){
//     if(is_birthday){
//         speed=speed-5;
//     }
//     if(speed<=60){
//         return 0;
//     }
//     if(speed>=61 && speed<=80){
//         return 1;
//     }
//     if(speed>=81){
//         return 2;
//     }
// }


// function makeBricks(small,big,goal){
//     return goal%5>=0 && goal%5-small<=0 && small+5*big>=goal;
// }



//roster web app using JavaScript 
// var roster=[];
// function addNew(){
//     var newname=prompt("Enter the name :");
//     roster.push(newname);
// }

// function remove(){
//     var remname=prompt("Enter the name to be removed")
//     var index=roster.indexOf(remname);
//     roster.splice(index,1);
// }
// function display(){
//     console.log(roster);
// }


// var start=prompt('Would you like to start the roster app?');
// var request='empty';
// if(start==='y'){
//     while(request!=='quit'){
//         request=prompt('Please select an action add,remove,display or quit  :');
//         if(request==='add'){
//             addNew();
//         }
//         else if (request==='display'){
//             display();
//         }
//         else if (request==='remove'){
//             remove();
//         }
//         else{
//             alert('Not recognized');
//             request='quit';
//         }
//     }
// }
// alert('Thanks for using the web app');



var headOne=document.querySelector("#one")
var headTwo=document.querySelector("#two")
var headThree=document.querySelector("#three")
console.log('connected');
headOne.addEventListener('dblclick',function(){
    headOne.textContent='Hello';
    headOne.style.color='yellow';
})

headTwo.addEventListener('mouseover',function(){
    headTwo.textContent='I am on hover';
    headTwo.style.color='red';
})
headThree.addEventListener('click',function(){
    headThree.textContent='Clicked';
    headThree.style.color='green';
})