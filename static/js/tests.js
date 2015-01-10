// создать псевдокласс с геттерами и сеттерами
var answ = new manageRightAnswers();
answ.setAnswers([]);
/**
 * Блок для сохраннения и извлечения правильных ответов
 */
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
/**
 * Удалить блоки с результатами
 */
function removeResults(){
    $('.correct').remove();
    $('.wrong').remove();
    $('#clear-results').remove();
    $('#right-results').remove();
}
/**
 * Показать правильные ответы
 * Вызывается кликом по ссылке "показать правильные ответы"
 */
function showRight(){
    var answers_block='<div id="right-results" class="box">';
    $(answ.getAnswers()).each(function(index,element){
        answers_block+='<div>'+element+'</div>';
    });
    answers_block+='</div>';
    $('.wrong').after(answers_block);
}
//-------------------------------
/**
 * Проверить результаты, выбранные из списков
 */
function checkSelects(){
    var answers=[], errors=0;
    $('select').each(function(){
        var right=$('option[value="true"]',this).text(),
            selected=$(this).find('option:selected').val();
        answers.push(right);
        if(selected!='true') errors+=1;
    });
    // построить блок с результатами
    buildResults(answers,errors);
}
/**
 * Проверить ответ (текстовое поле)
 */
function checkFieldValue(value){
    var answer=$.trim($('#answer-field').val().toLowerCase());
    //console.log('answer: '+answer+', value: '+value);
    buildResults([value],(answer==value)? 0:1);
}
/**
 * Построить результаты
 * @param answers - все правильные ответы
 * @param errors - счётчик ошибок
 */
function buildResults(answers,errors){
    var wrong="<div class='wrong'><span class='text-red'>Обнаружены ошибки</span> [<span class='pseudolink' onclick='showRight()'>показать правильные ответы</span>]</div>",
        correct="<div class='correct'>Всё верно!</div>",
        // Кнопка, по которой клацали для проверки
        btn_check =  $('.check');
    // сохранить правильные ответы
    answ.setAnswers(answers);
    removeResults(); //console.log('str 24');
    // Определитьс с корректностью результата и отобразить его
    $(btn_check).after((errors)? wrong:correct);
    // и отобразить!
    $(btn_check).after(' <span id="clear-results" class="pseudolink" onclick="removeResults()">Сбросить результаты</span>');
}