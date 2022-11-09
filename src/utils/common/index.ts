const convertStoM = (time: number) => {
  let minutes: string | number = Math.floor(time / 60);
  let seconds: string | number = time - minutes * 60;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};

const insertComma = (price: string) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { convertStoM, insertComma };
