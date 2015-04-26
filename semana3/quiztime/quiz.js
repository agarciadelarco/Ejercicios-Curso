var user = {}
var responses = []

function question1() {
	var name = prompt('What is your name?');
	user.name = name
}

question1();

function question2() {

  	var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

  	if (firstQuestion.toLowerCase() === 'yes') {
    	firstQuestion = true
  	} else if (firstQuestion.toLowerCase() === 'no') {
    	firstQuestion = false
  	} else {
    	alert("Please answer either Yes or No");
    	return question2();
  	}
  	responses.push(firstQuestion);
}

question2();

function question3() {
  	var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  	js = js.toLowerCase();
  	switch (js) {
  		case 'java':
  			js = false;
  		break;
  		case 'livescript':
  			js = true;
  		break;
  		case 'javalive':
  			js = false;
  		break;
  		case 'scriptyscript':
  			js = false;
  		break;
  		default:
  			alert('Please, choose from the list.');
  			return question3();
  		break;
  	}
  	responses.push(js);
}

question3();

function question4() {
	var beatles = prompt('Name the four Beatles');
	beatles = beatles.toLowerCase();
	var names = ['john', 'paul', 'george', 'ringo'];
	var answers = [];
	for ( var i = 0; i < names.length; i++ ){
		if (answers.length < 3){
			answers.push(beatles);
			prompt('Give me another one');
		}else{
			for ( var j = 0; j < answers.length; j++ ){
				if( names.indexOf(answers[j]) != -1 ){
				beatles = true;
				}else{
				beatles = false;
				}
			}
		}
	}
	responses.push(beatles);
}

question4();

function question5(){
	var ozzy = prompt('When was Ozzy Osbourne born?');
	if ( ozzy < 1948 ){
		alert('Too early!');
		ozzy = false;
	}else if ( ozzy > 1948 ){
		alert('Too late!')
		ozzy = false;
	}else{
		alert('You\'re right!')
		ozzy = true;
	}
	responses.push(ozzy);
}

question5();

function evaluate(responsesArray) {
	var sumTrues = 0;
	var sumFalses = 0;
	for ( var k = 0; k < responses.length; k++ ){
		if (responses[k] === true){
			sumTrues += 1;
		}else{
			sumFalses += 1;
		}
	}
	user.sumTrues = sumTrues;
	user.sumFalses = sumFalses;
}

function showResults() {
	alert(user.name + ' has ' + user.sumTrues + ' correct answers and has failed ' + user.sumFalses + ' questions.')
}

evaluate(responses);
showResults();