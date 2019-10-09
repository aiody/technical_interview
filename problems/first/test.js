const assert_equal = (actual, expect) => actual === expect;
const should_return = (f, actual, expect) => assert_equal(f(actual), expect);

function test(f) {
  should_return(f,'anallana', true)
  && should_return(f, 'cood', false)
  && should_return(f, 'x', true)
  && should_return(f, 'level', true)
  && should_return(f, 'Noon', true)
  && should_return(f, 'a toyota', true)
  && should_return(f, 'Dammit Im Mad', true)
}
