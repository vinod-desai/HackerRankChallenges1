// https://www.hackerrank.com/challenges/jumping-on-the-clouds/

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let steps = 0;
  const len = c.length;

  for (let i = 0; i < len - 1; ) {
    let nextStep = c[i + 1],
      next2Step = c[i + 2];
    if (c[i] === 1) {
      i += 1;
    } else if (nextStep === 0 && next2Step === 0) {
      steps++;
      i += 2;
    } else {
      steps++;
      i += 1;
    }
  }

  /* for (let i = 0; i < len - 1;) {
        let nextStep = c[i + 1],
            next2step = c[i + 2];

        if (c[i] === 1) {
            i += 1;
        } else {
            if (nextStep === 0 && next2step === 0) {
                steps++;
                i += 2
            } else {
                steps++;
                i += 1;
            }
        }

    } */
  return steps;
}
