import React from 'react'

export default function Typing() {
  return (
    <div className='typing-container'>
        <div className='test-container'>
            <div className='words-container'>

            </div>
            <div className='inputs-container'>
                <form>
                    <input type="text"/>
                </form>
                <span>
                    <p>1:00</p>
                </span>
                <button>RESET</button>
            </div>
        </div>
    </div>
  )
}
