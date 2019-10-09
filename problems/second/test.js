const assert_equal = (actual, expect) => actual === expect;
const should_return = (f, actual, expect) => assert_equal(f(actual), expect);

function test(f) {
  should_return(f,[1, 4, 4, 4, 0, 4, 3, 3, 1], [1, 12, 0, 4, 6, 1])
  && should_return(f, [1, 1, 7, 7, 3], [2, 14, 3])
  && should_return(f, [-5, -5, 7, 7, 12, 0], [-10,14,12,0])
  && should_return(f, [3, 3, 3, 3, 1], [12, 1])
  && should_return(f, [2, 2, -4, 4, 5, 5, 6, 6, 6, 6, 6, 1], [4, -4, 4, 10, 30, 1])
  && should_return(f, [1, 1, 1, 1, 1, 3], [5, 3])
  && should_return(f, [1, -1, -2, 2, 3, -3, 4, -4], [1, -1, -2, 2, 3, -3, 4, -4])
}
