import React, { useState } from 'react';

function QnA() {
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState('');

    const addQuestion = () => {
        if (question) {
            setQuestions([...questions, question]);
            setQuestion('');
        }
    };

    return (
        <div>
            <h1>Q&A Forum</h1>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question"
            />
            <button onClick={addQuestion}>Submit</button>
            <ul>
                {questions.map((q, index) => (
                    <li key={index}>{q}</li>
                ))}
            </ul>
        </div>
    );
}

export default QnA;