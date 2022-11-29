
const  arrayQuestion = [] ;
const  arrayAnswer   = [] ;
const arrDelay       = [] ;
var num = 0

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

    if (JSON.stringify(arrayQuestion) == JSON.stringify(arrayAnswer))   {
        simonSays();
    }
    else {
        document.getElementById("demo2").innerHTML = "NOOO!!!!";
    }
}

function answer(num)    {

        var  arrayAnswerLength = arrayAnswer.length;
        var arrayQuestionLength = arrayQuestion.length;

        arrayAnswer.push(num)
        //document.getElementById("demo2").innerHTML = arrayAnswer;
        console.log(arrayAnswer);

        //insert audio here

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
                    setTimeout(() => {; setTimeout(()=>{document.getElementById("button"+ arrDelay[i]).classList.remove('playing') ;  }, 400 ); document.getElementById("button"+ arrDelay[i]).classList.add('playing');}, 700 * (k +1));
                    
                    console.log(arrDelay[i]);
                    return arrDelay[i];
                }

                //arrDelay.forEach(setInterval(document.getElementById("demo3").innerHTML = (arrDelay ), 2000));
                //play note for note with pause in between
                return i;
        }


        function myPlay(num)   {
            var audio = new Audio ("sample" + num + ".mp3");
        }

