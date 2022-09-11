export function makeProgramList(data) {
  const programList = [];
  data.forEach((review) => {
    if (!programList.some((program) => program.programNo === review.programNo))
      programList.push(review);
  });
  return programList.map((program) => {
    return { name: program.programName, id: program.programNo };
  });
}

export const getRatingByOneDecimalPoint = (star) => {
  const number = Math.round(star * 10) / 10;
  if (number === parseInt(number)) return number + ".0";
  else return number;
};
