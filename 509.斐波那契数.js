var fib = (N) => {
  // 递归
  // if (N === 0 || N === 1) {
  //   return N
  // }
  // return fib(N - 1) + fib(N - 2)

  // 递推
  let cache = [];
  for (let i = 0; i <= N; i++) {
    if (i === 0 || i === 1) {
      cache[i] = i;
    } else {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
  }
  return cache[N];
};
