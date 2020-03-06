const sameContentArr = (a1, a2) => {
  if (a1.length !== a2.length) { return false; }

  return a1.every((n, i) => n === a2[i]);
};

export default sameContentArr;
