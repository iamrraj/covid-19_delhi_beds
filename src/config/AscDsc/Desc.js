const compareByDesc = (key) => {
  return function (a, b) {
    if (a[key] < b[key]) return 1;
    if (a[key] > b[key]) return -1;
    return 0;
  };
};

export default compareByDesc;
