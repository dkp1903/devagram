import { useState } from "react";

// Generic hook to control the input fields and update them
export default function useHandleChange(initialVal = "") {
  const [state, setState] = useState(initialVal);

  const changeState = (e) => {
    /* 
      To reset the state to empty string,
      there is no event object passed so 
      newTargetValue is set empty conditionally
      when there is no event object
    */
    let newTargetValue;
    if (e.target) newTargetValue = e.target.value;
    else newTargetValue = "";

    setState(newTargetValue);
  };

  return [state, changeState];
}
