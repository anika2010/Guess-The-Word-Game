var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    charAt1=word.charAt(1);
    length_divideby2=Math.floor(word.length/2);
    charAt2=word.charAt(length_divideby2);
    length_minus1=(word.length)-1;
    charAt3=word.charAt(length_minus1);
    remove_1=word.replace(charAt1,"_");
    remove_2=remove_1.replace(charAt2,"_");
    remove_3=remove_2.replace(charAt3,"_");
    question_word="<p id='question'>Q ."+remove_3+"</p>";
    input_answer="<br>Answer <input type='text' id='answer_input'>";
    check_button="<br><br> <button class='btn btn-warning' onclick='check_answer()'>Check</button>";
    row=question_word+input_answer+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player-1";
answer_turn="player-2";
function check_answer(){
    get_answer=document.getElementById("answer_input").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player-1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;

        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }

    } 
    if(question_turn=="player-1"){
        question_turn="player-2";
        document.getElementById("player_question").innerHTML="Question Turn- "+player2_name;
    }
    else{
        question_turn="player-1";
        document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;  
    }
    if(answer_turn=="player-1"){
        answer_turn="player-2";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;
    }
    else{
        answer_turn="player-1";
        document.getElementById("player_answer").innerHTML="Answer Turn- "+player1_name; 
    }
    document.getElementById("output").innerHTML="";
}