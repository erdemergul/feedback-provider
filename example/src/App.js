import React from 'react'

import FeedbackProvider from 'feedback-provider'
import 'feedback-provider/dist/index.css'

const App = () => {
  return (
    <>
      <FeedbackProvider screenId={"xHarekatı > HT hareket tarzı > sdfasdf> asdasd > asdfasfgsdfg> Harekatın kontrolü"} sequenceNumberProp={1} size="35px" description="This is a description" />
      <div>  </div>
      <FeedbackProvider screenId={"Planlama Programı"} sequenceNumberProp={2} size="35px" description="This is a loooooooooooooooooooooooooong asdfasdfa sdfasdf  asdf asdf  description" />
      <div>  </div>
      <FeedbackProvider screenId={"Faktörler"} sequenceNumberProp={3} size="35px" />
      <div>  </div>
      <FeedbackProvider screenId={"Faraziye"} sequenceNumberProp={4} size="35px" />
      <div>  </div>
      <FeedbackProvider screenId={"Bilgi ihtiyacı"} sequenceNumberProp={5} size="35px" />
    </>);
}

export default App
