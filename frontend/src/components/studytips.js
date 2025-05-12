import React from 'react';

function StudyTips() {
    const tips = [
        "Set specific goals for each study session.",
        "Take regular breaks to improve focus.",
        "Use active learning techniques such as summarizing or teaching.",
        "Stay organized with a study schedule.",
        "Practice past exam papers."
    ];

    return (
        <div>
            <h1>Study Tips</h1>
            <ul>
                {tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudyTips;