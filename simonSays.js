
const  arrayQuestion = [] ;
const  arrayAnswer   = [] ;
const arrDelay       = [] ;


function simonSays()  {
          

            
            {
                num =   Math.floor(Math.random() * (5-1));
                arrayQuestion.push(num + 1);
                document.getElementById("demo").innerHTML = arrayQuestion;
                console.log(arrayQuestion);
          

                //EMPTY ARRAYANSWER
               
                arrayAnswer.length=0;

                document.getElementById("demo2").innerHTML = arrayAnswer;
                

                simonPlay(...arrayQuestion);





             
            }
            
            




return arrayQuestion;




}
function checkAnswer()    {

    //document.getElementById("demo2").innerHTML = arrayAnswer;
    var sound = new Audio("ERROR.m4a");
    if (JSON.stringify(arrayQuestion) == JSON.stringify(arrayAnswer))   {
        simonSays();
    }
    else {
        document.getElementById("demo2").innerHTML = "NOOO!!!!";
        sound.play();
    }

}

function answer(num)    {

        var  arrayAnswerLength = arrayAnswer.length;
        var arrayQuestionLength = arrayQuestion.length;
        var sound=  new Audio("beep" + num + ".m4a");
        arrayAnswer.push(num)
        //document.getElementById("demo2").innerHTML = arrayAnswer;
        console.log(arrayAnswer);

        //insert audio here
        sound.play();
       
        if (arrayAnswerLength == arrayQuestionLength -1)  {
              
checkAnswer();
               }
               else{}
        }


        function simonPlay(...arrDelay)     {

                // loop function returning each number of the array
              
                arrDelay = arrayQuestion;

                for (let i = 0; i < arrDelay.length; i++)   {  

               

                    delay(i);
                }


                function delay(i)    {
                     var k = i;
                     var sound=  new Audio("beep" + arrDelay[i] + ".m4a");
                   setTimeout(() => {; setTimeout(()=>{document.getElementById("button"+ arrDelay[i]).classList.remove('playing') , sound.play();}, 400 );              document.getElementById("button"+ arrDelay[i]).classList.add('playing');}, 700 * (k +1)); 
                   //  setTimeout(() => {; setTimeout(()=>{document.getElementById("button"+ arrDelay[i]).style.filter = "brightness(400%)" ;  }, 400 );        document.getElementById("button"+ arrDelay[i]).style.filter = "brightness(100%)";}, 700 * (k +1));  
                    console.log(arrDelay[i]);
                    return arrDelay[i];
                } 

                //arrDelay.forEach(setInterval(document.getElementById("demo3").innerHTML = (arrDelay ), 2000));
                //play note for note with pause in between
                return i;
        }


        function myPlay(num)   {
            var audio = new Audio ("sample" + num + ".m4a");
        }
        
