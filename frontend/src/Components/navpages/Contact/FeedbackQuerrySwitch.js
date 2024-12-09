import React, { useState } from 'react';
import './FeedbackQuerry.css';  // Import the external CSS file
import ClearIcon from '@mui/icons-material/Clear';
const FeedbackQuerySwitch = () => {
    const [isFeedback, setIsFeedback] = useState(true); // State to toggle between feedback and query
    const [items, setItem] = useState([])
    const toggleForm = () => {
        setIsFeedback(prevState => !prevState); // Toggle state
    };
    const [feedbackInput, setfeedbackInput] = useState()
    const handleChange = (e) => {
        setfeedbackInput(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setfeedbackInput("")
        setItem(prevItems => [...prevItems, feedbackInput])
        console.log(items)
    }
    const handleClearBtn=()=>{
        setItem([])
    }
    return (
        <div className="container">
            {/* Toggle Button */}
            <button
                className="toggle-button"
                onClick={toggleForm}
            >
                Switch to {isFeedback ? 'Query' : 'Feedback'}
            </button>

            {/* Conditional Heading */}
            <h2>{isFeedback ? 'Give Your Feedback' : 'Submit Your Query'}</h2>

            <form className="form" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label htmlFor="message" className="input-label">
                        {isFeedback ? 'Your Feedback' : 'Your Query'}
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        placeholder={isFeedback ? 'Write your feedback here...' : 'Write your query here...'}
                        className="textarea"
                        value={feedbackInput}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="submit-button"
                >
                    {isFeedback ? 'Submit Feedback' : 'Submit Query'}
                </button>
            </form>
            <div className='previous-item'>
                <div>
                    {isFeedback === true ? <h2>Previous Feedback</h2> : <h2>Previous Querry</h2>}
                    {items.length !== 0 ? <ClearIcon className='clearIcon' onClick={handleClearBtn} /> : <p></p>}
                </div>
                {items.map((item, index) =>
                    <p className='previtem' key={index}>{item}</p>
                )}
            </div>
        </div>
    );
};

export default FeedbackQuerySwitch;
