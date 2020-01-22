var num= prompt ("Введите свой возрасть в цифрах");

if (num<=18 && 0<num){
    alert ("Вы еще молоды. Вам нужно учиться");
}else if (num<=50 && 18<num){
    alert ("Вам нужно работать");
}else if (num<=59 && 50<num){
    alert ("Вам скоро на пенсию");
}else if (num<=150 && 59<num) {

    alert("Вы пенсионер");
}else if (num==0){
   alert ("Тебя еще нет в плане");
}else{
   alert ("Вы уже померли"); 
}
 