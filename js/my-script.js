/**
 * Created by Web App Develop-PHP on 10-Dec-17.
 */
////        var paragraphElement=document.getElementsByTagName('a');
////        for(var key in paragraphElement){
////            document.write(paragraphElement[key].innerHTML+'<br/>');
////        }
//
//        var paragraphElement=document.getElementsByTagName('p');
//        for(var key=0; key<paragraphElement.length; key++){
//            document.write(paragraphElement[key].innerHTML+'<br/>');
//        }








////        Array
//        var data=[];
//
//        data[0]=10;
//        data[1]=20;
//        data[2]=30;
//
//        data['name']='Moshiur';
//        data['city']='Dhaka';
//        data['country']='Bangladesh';
//
//
////        document.write(data[2]);
////        document.write(data['city']);
//
//
//        for(var a in data){
//            document.write(data[a]+'<br/>');
//        }
//
//single array
//        var data=['Moshiur','Dhaka','Bangladesh']
//        document.write(data[1])

//var data=['Moshiur','Dhaka','Bangladesh']
//document.write(data.length);

//Function

//function demo(){
//    var firstName='Rubel';
//    var lastName='Khan';
//    var fullName=firstName+' '+lastName;
//
//    document.write(fullName);
//}
//    demo();


//function demo(firstName,lastName){
//
//    var fullName=firstName+' '+lastName;
//
//    document.write(fullName);
//}
//demo('Imran','Hossain');
//document.write('<br/>');
//demo('Sharif','Hossain');
//document.write('<br/>');
//demo('Shohag','Hossain');
//document.write('<br/>');
//demo('Raqib','Hossain');




//        form
// var btnElement = document.getElementById('btn');
// btnElement.onclick = function () {
//     var firstNameValue = document.getElementById('firstName').value;
//     var lastNameValue = document.getElementById('lastName').value;
//     var fullName = firstNameValue+' '+lastNameValue;
//
//     document.getElementById('fullName').value = fullName
// };




var addElement = document.getElementById('add');
addElement.onclick = function () {
    var firstNumberValue =Number(document.getElementById('firstNumber').value) ;
    var SecondNumberValue =Number(document.getElementById('secondNumber').value) ;
    var result1 = firstNumberValue+SecondNumberValue;

    document.getElementById('result').value = result1;
};




