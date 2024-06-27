

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


  setTimeout(() => {
    document.querySelector('.birthday-message').style.opacity = 1;
  }, 7500); // 7500 milliseconds = 3 seconds

  setTimeout(() => {
    document.querySelector('.birthday-message').style.opacity = 0;
  }, 10000); // 10000 milliseconds = 15.5 seconds (7.5 seconds + 8 seconds)

  setTimeout(() => {
    document.querySelector('.paragraph').style.opacity = 1;
  }, 11000); // 11000 milliseconds = 3 seconds