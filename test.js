const rand = (start, end) => {
  return start + Math.floor(Math.random() * end - start);
};

for (let i = 0; i < 10; i++) {
  console.log(rand(0, 5));
}
