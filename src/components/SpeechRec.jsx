import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function SpeechRec () {

  const startListening = () => SpeechRecognition.startListening({continuous:true, language: 'en-IN'})
  const {transcript, browserSupportSpeechRecognition} = useSpeechRecognition()
  if (!browserSupportSpeechRecognition){
    return null
  }
  return (
    <>
      <div>
        <p>
            {transcript}
        </p>

        <button 
        onClick={startListening}
        className=''> Start Listening</button>
        <button
        onClick={SpeechRecognition.stopListening}
        className=''>Stop Listening</button>
      </div>
    </>
    
  )
}

export default SpeechRec
