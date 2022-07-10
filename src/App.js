import React, { useState } from 'react';
import questions from './components/data';
export default function App() {
	
	const [Question, setQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
			
		}

		const nextQuestion = Question + 1;
		if (nextQuestion <questions.length) {
			setQuestion(nextQuestion);
     
		} else {
			setShowScore(true);
		}
	};
	return (
		<>
		<h1> Quizz-app</h1>
		<div className='app'>
		
			{showScore ? (
				<div className='score-container'>
					<h3>Your Total  score {score} out of {questions.length}</h3>
					
					
				</div>
			) : (
				<>
					<div className='question-container'>
						<div className='question-number'>
							<span>Question {Question + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[Question].questionText}</div>
					</div>
					<div className='answer-container'>
						{questions[Question].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</>
	);
}