
const  arrayQuestion = [] ;
const  arrayAnswer   = [] ;
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







             
            }
            
            




return arrayQuestion;




}
function checkAnswer()    {

    document.getElementById("demo2").innerHTML = arrayAnswer;

    if (JSON.stringify(arrayQuestion) == JSON.stringify(arrayAnswer))   {
        simonSays();
    }
    else {
        document.getElementById("demo2").innerHTML = "tarado";
    }
}

function answer(num)    {

        var  arrayAnswerLength = arrayAnswer.length;
        var arrayQuestionLength = arrayQuestion.length;

        arrayAnswer.push(num)
        document.getElementById("demo2").innerHTML = arrayAnswer;
        console.log(arrayAnswer);

        if (arrayAnswerLength == arrayQuestionLength -1)  {
              
checkAnswer();
               }
               else{}
        }


        function simonPlay(arrayQuestion)     {

                // loop function returning each number of the array
                //play note for note with pause in between

        }


        function myPlay(num)   {
            var audio = new Audio ("sample" + num + ".mp3");
        }

