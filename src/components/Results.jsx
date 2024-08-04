import React, {useState} from 'react'

export default function Results(props) {

  const {restartTest} = props  

  const [fadeOut, setFadeOut] = useState(false);

  const handleReset = () => {
    setFadeOut(true);
    setTimeout(() => {
      setFadeOut(false);
      restartTest();
    }, 500); // Match the duration of the CSS animation
  };

  return (
    <div className={`results-container ${fadeOut ? 'fade-out' : ''}`}>
        <div className='test-results-container'>
            <span className='WPM'>100 WPM</span>
            <div>
                <span>Accuracy</span>
                <span>-</span>
            </div>
            <div>
                <span>Errors</span>
                <span>-</span>
            </div>
            <div className='reset-container' onClick={handleReset}>
                <i className="fa-solid fa-rotate reset"></i>
            </div>
        </div>
    </div>
  )
}
