var quizdata= [
    {

        question:'which gframework is related js',
        a:'.net',
        b:'flask',
        c:'django',
        d:'react',
        correct:'a'
    
    },
    {

        question:'which is not a programming language',
        a:'html',
        b:'c',
        c:'java',
        d:'python',
        correct:'a'
    
    },
    {

        question:'which  is not a framework',
        a:'react',
        b:'js',
        c:'angular',
        d:'django',
        correct:'b'
    
    },
    {

        question:'css stands for',
        a:'Casscading style sheets',
        b:'cascading steel style',
        c:'cast styling sheets',
        d:'casscading sheet styles',
        correct:'a'
    
    }
]
var quiz=document.getElementById('quiz')
var answer=document.querySelectorAll('.answer')
var question=document.getElementById('question')
var option_a=document.getElementById('a_value')
var option_b=document.getElementById('b_value')
var option_c=document.getElementById('c_value')
var option_d=document.getElementById('d_value')
var submitbtn=document.getElementById('submit')

var currentquestion=0
var quizscore=0
loadquiz()
function loadquiz(){

    deselect()
    question.innerHTML=quizdata[currentquestion].question
    option_a.innerText=quizdata[currentquestion].a
    option_b.innerText=quizdata[currentquestion].b
    option_c.innerText=quizdata[currentquestion].c
    option_d.innerText=quizdata[currentquestion].d

}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{

    var selectedoption;
    answer.forEach(answer=>{
        if (answer.checked)
        {
            selectedoption=answer.id
        }
    })
    if(selectedoption==quizdata[currentquestion].correct)
    {
        quizscore=quizscore+1
    }
    currentquestion=currentquestion+1
loadquiz()
}
)