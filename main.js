// // הדפסת HELLO WORLD 5 םעמים לCONSOLE 

// function hello (){
//   console.log("hello world")
// }
//   var i = 0 
//   while(i<5){
//     (hello())
//     i++
//   }

// צרו פונקצייה שמקבלת שני מספרים ממשיים ומחזירה מינימום בצע קריאה מהדף והדפס את הערך המתק
// function max (num1,num2){
// var num1 = +prompt("enter num")
// var num2 = +prompt("enter num")
// if (num1<num2){
//   return console.log(num2)

// }
// else {
//   return console.log(num1)

// }
// }
// max()

// צרו פונקציה שמקבלת שני מספרים ממשים ומחזירה את סכומם בעזרת return. בצע קריאה מהדף והדפס את הערך המתקבל

// function sum (num1,num2){
// var num1 = +prompt("enter num")
// var num2 = +prompt("enter num")
// if (num1=>num2){
//   return  console.log(num1+num2)
// }
// else{
//   return console.log (num1+num2)
// }
// }
 
// sum()

// פונקציות	צרו פונקציה שמקבלת מספר שלם חיובי num כארגומנט ומחשבת את הסכום 1+2+···+num ומחזירה אותו בעזרת return.
// בדוק באמצעות קריאה מהדף והדפסת הערך המוחזר. לדוגמא עבור ארגומנט של 4 היא תחזיר 1+2+3+4 (10)	

// צרו את המחרוזת ISRAEL ל-console

// function printIsrael(){
//   console.log("israel")
// }
// printIsrael()


// בסיסי	צרו את את שמך הפרטי באנגלית ל-console	

// function printName(){
//   console.log("lior aytegev")
// }
// printName()

// צרו מספר שלם ל-console
// function num(){
//   console.log(5)
// }
// console.log(num())

// צרו מספר שלם ל-console חמש פעמים
// i = 0
// function num(){
//   while(i<5){
//     console.log(4)
//     i++
//   }
  
// }
// num()

// 	הגדר 4 משתנים והכנס אליהם ארבעה מספרים שלמים. יש להגדיר משתנה avg ולהכניס אליו את חישוב הממוצע.
// יש להגדיר משתנה sum ולהכניס אליו את חישוב הסכום. יש להדפיס ל-console את הממוצע והסכום בעזרת המשתנים sum, avg.	


// var num1 = +prompt("enter number")
// var num2 = +prompt("enter number")
// var num3 = +prompt("enter number")
// var num4 = +prompt("enter number")


// function sumAndAvg(){
//  var sum = num1 + num2+ num3 +num4
//   var avg = sum / 4
//   console.log(sum,avg)
  
// }
// sumAndAvg()

// הגדר משתנים שמיצגים אורך ורוחב של מלבן בסנטימטר (מספרים שלמים) והדפס בעזרתם את השטח (אורך*רוחב) ל-console

// var len = 5
// var height = 4
// function shetah (){
//   var sum = len * height
//   console.log(sum)
// }
// shetah()

// בסיסי	צרו תכנית אשר מגדירה שני משתנים num1, num2 עם ערכים. התכנית מחליפה בין הערכים. בדוק באמצעות הדפסה לפני ואחרי.
// לדוגמא אם הערך של num1 לפני ההחלפה הוא 1, והערך של num2 לפני ההחלפה הוא 2, אז אחרי ההחלפה הערך של num1 יהיה 2 והערך ל-num2 יהיה 1	

// var num1 = 5
// var num2 =  4

// function changeNumber (){
//   var helper = num1
//   num1=num2
//   num2= helper
// console.log(num1,num2)
// }

// changeNumber ()

// צרו תכנית אשר קולטת מהמשתמש שני מספרים למשתנים num1 , num2 ומדפיסה את המשתנים ל-console


//  function getNumber(){
//   var num1 = +prompt("enter a numbr")
//   var num2 = +prompt("enter a number")
//   console.log(num1,num2)
//  }
//  getNumber()

// משתנים וסוגיהם	צרו תכנית אשר קולטת מהמשתמש מספר ממשי ומספר שלם ומדפיסה את המשתנים ל-console	

// function getNums(){
//   var realNum = +prompt("enter real number")
//   var fullNum = +prompt("enter full number")
// }
// getNums()

// משתנים וסוגיהם	צרו תכנית אשר מבצעת השמה של המחרוזת 'a' לתוך משתנה a1 והשמה של המחרוזת '1' לתוך משתנה a2, ואחר כך מדפיסה את המשתנים ל-console	

// function hasama(){
//   var a1 = "a"
//   var a2 = "1"
//   console.log(a1,a2)

// }
// hasama()

// משתנים וסוגיהם	צרו תכנית אשר מבצעת השמה של true למשתנה a מסוג bool ומדפיסה אותו ל-console	

// function printTrue(){
//   var a = 5
//   var b = 4
//   console.log(a>b)
// }
// printTrue()

// function trueAndFalse(){
//   var a = 1
//   var b = 2
//   console.log(a<b,b>a)
//   console.log(a>b,b<a)
//   console.log(a<b,b==a)
//   console.log(a==b,b>a)
// }
// trueAndFalse()

// צרו תכנית אשר קולטת מהמשתמש שלושה מספרים ממשים, מציבה את מכפלתם למשתנה mul ומדפיסה אותו ל-console.
// לדוגמא עבור המספרים 2,3,4 התוצאה תהיה 2*3*4 (24)
// 

// function getMul(){
//   var a = +prompt("enter number")
//   var b = +prompt("enter a number")
//   var c = +prompt("enter number")
//   var mul = a*b*c
//   console.log(mul)

// }
// getMul()

// צרו תכנית אשר קולטת מהמשתמש שני מספרים ממשים הראשון first והשני second.
// התכנית מחשבת second % first ושמה את התוצאה בתוך משתנה result ומדפיסה אותו ל ל-console. בצע עבור מספר ראשון 7 ומספר שני 2
// // 

// function getModulus(){
//   var first = 7
//   var second = 2
//   var modulu = first % second
//   console.log(modulu)
// }
// getModulus()

// אופרטורים (השמה ומתמטיים)	צרו תכנית אשר קולטת מהמשתמש מספר שלם ומגדילה את ערכו ב1 בעזרת ++ ומדפיסה את התוצאה ל-console	

// function plusOne(){
//   var a = +prompt("enter a number")
//   console.log(++a)
// }
// plusOne()

// אופרטורים (השמה ומתמטיים)	צרו תכנית אשר קולטת מהמשתמש מספר שלם ומגדילה את ערכו פי 3 בעזרת אופרטור =* . הדפס את המשתנה לאחר הפעולה ל-console	

// function getMul(){
//   var i = +prompt("enter a number ")
//   console.log(i*3)
// }
// getMul()

// אופרטורים (השמה ומתמטיים)	צרו תכנית שמקבלת רדיוס, מחשבת היקף ושטח ומדפיסה ל-console	

// function getRadius(){
// var r = +prompt("enter a number")
// var scope =2*3.14*r
// var area = 3.14**r
// console.log(area,scope)
//  }
//  getRadius()

// אופרטורים (השמה ומתמטיים)	צרו תכנית אשר קולטת מהמשתמש שלושה שחקנים: עבור כל שחקן היא קולטת מהמשתמש את שם השחקן וגיל השחקן (מספר שלם).
// התכנית מדפיסה ל-console את שמות השחקנים ומדפיסה ל-console את הגיל הממוצע.	

// function getNameAndAvg(){
  
//   var name = prompt("enter your name")
//   var age = +prompt("enter your age")
//   var sumAge = sumAge+=age
//   var sumName = sumName  += name
//   var avg = sumAge/3
//   while (i<3){
//     i=0
//     console.log(sumName,avg)
//     ++i
//   }
// }
// getNameAndAvg()

// לולאות while	צרו תכנית שמדפיסה את המספרים 2,1,....100 כל אחד בשורה	

// function getNum(){
//   var i = 0
//   while (i<=100){
//     console.log(i)
//     i++
//   }
// }
// getNum()

// צרו תכנית שקולטת 5 מספרים מהמשתמש, מחשבת סכום וממוצע ומדפיסה למסך את הערכים שלהם. בצע בעזרת לולאה

// function getNum(){
//   var i = 0
//   var sum = 0 
//   while(i<5){
//     var user = +prompt("enter a number")
//     sum += user
//     i++
//   }
//   console.log(sum,sum/5)
// }
// getNum()

// לולאות while	צרו תוכנית שמדפיסה את כל המספרים השלמים הזוגיים מ2-50.	

// function getEven(){
//   var i = 2
//   while (i<50){
//     if(i%2==0){
//       console.log(i)
//     }
//     i++
//   }
// }
// getEven()

// לולאות while	צרו תוכנית שמדפיסה את כל המספרים השלמים מ1-50 בקפיצות של 3 כלומר 1,4,7,...	

// function getNum(){
//   var i = 1
//   while(i<=50){
//     if (i%3==1){
//       console.log(i)
//     }
//     i++
//   }
// }
// getNum()

// לולאות while	צרו תוכנית המקבלת מהמשתמש מספר שלם ומחשבת עצרת. לדוגמא עבור 4 נקבל : 1*2*3*4 כלומר 24	

// function fak() {
//   var num =+prompt("enter num")
//   var sum =1
//   while (1<=num) {
//     sum *= num 
//     num--
    
//   }
//   console.log(sum)

// }
// fak()

// צרו תכנית אשר קולטת מהמשתמש חמישה מספרים ממשים ומחשבת את המנימום והמקסימום מבינהם ומדפיסה אותו.
// אפשר להשתמש ב- Number.MAX_SAFE_INTEGER , Number.MIN_SAFE_INTEGER

