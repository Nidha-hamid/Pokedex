function useDebounce(cb, delay = 2000) {
  //gives modified callback, that can be passed in original callback. The modified callback will be called after delay time.
  let timerId;
  return  function (...args){
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  }
  
}

export default useDebounce;
