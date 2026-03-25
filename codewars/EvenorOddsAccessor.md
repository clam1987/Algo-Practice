# Even or Odds Accessor Problem

Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

## For example:

```
evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd'
```

# Solution:

Since JavaScript functions cannot be invoked through parentheses, one must use the built-in Proxy constructor to catch and redefine our goal for this problem. We essentially set up our valid function to evaluate whenever the function is invoked correctly and we pass that into our argument for the proxy to target when a valid function is invoked. Secondly, we need to setup a getter to grab the properties whenever we call `evenOrOdd` with square brackets. If you take a look at the syntax, it's actually trying to access a `evenOrOdd` as an object so we just need to get the key as the value. Once that is achieved, we check if it's a number and evaluate if it's even or odds. And Viola, solution found!

Resource:
[Proxy Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

```
const evenOrOdd = new Proxy(validEvenOrOdd, {
  get: (_, prop) => {
    const num = Number(prop);
    return num % 2 === 0 ? "Even" : "Odd";
  },
  apply: (target, _, args) => target(...args),
});

function validEvenOrOdd(n) {
  const valid_num = Number(n);
  return valid_num % 2 === 0 ? "Even" : "Odd";
};
```
