var answ = new manageRightAnswers();
answ.setAnswers([]);

$(function(){
    var wrong="<div class='wrong'><span class='text-red'>Обнаружены ошибки</span> [<span class='pseudolink' onclick='showRight()'>показать правильные ответы</span>]</div>",
        correct="<div class='correct'>Всё верно!</div>";

    $('.check').on('click', function(){
        var answers=[],
            errors=0;

        $('select').each(function(){
            var right=$('option[value="true"]',this).text(),
                selected=$(this).find('option:selected').val();
            answers.push(right);
            if(selected!='true') errors+=1;
        });

        // сохранить правильные ответы
        answ.setAnswers(answers);

        var btn_check =  $('.check'),
            checkResults = function(){
                console.log('str 24');
                removeResults();
                if(errors){
                    console.log('errors');
                    $(btn_check).after(wrong);
                }else{
                    console.log('no errors');
                    $(btn_check).after(correct);
                }
                $(btn_check).after(' <span id="clear-results" class="pseudolink" onclick="removeResults()">Сбросить результаты</span>');
        };
        checkResults();
    });
});
// сохранить и извлечь правильные ответы
function manageRightAnswers(){
    var answers=[];
    return{
        setAnswers:function(answ){
            answers=answ;
        },
        getAnswers:function() {
            console.log(answers);
            return answers;
        }
    }
}
function removeResults(){
    $('.correct').remove();
    $('.wrong').remove();
    $('#clear-results').remove();
    $('#right-results').remove();
}
function showRight(){
    var answers_block='<div id="right-results" class="box">';
    $(answ.getAnswers()).each(function(index,element){
        answers_block+='<div>'+element+'</div>';
    });
    answers_block+='</div>';
    $('.wrong').after(answers_block);
}
