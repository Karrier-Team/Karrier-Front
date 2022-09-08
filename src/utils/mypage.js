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
