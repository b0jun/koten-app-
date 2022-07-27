import { useEffect, useRef } from 'react';
import BackgroundTimer from 'react-native-background-timer';

const useBackgroundInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (!delay && delay !== 0) {
      return;
    }
    BackgroundTimer.runBackgroundTimer(tick, delay);
    return () => BackgroundTimer.stopBackgroundTimer();
  }, [delay]);
};

export default useBackgroundInterval;
