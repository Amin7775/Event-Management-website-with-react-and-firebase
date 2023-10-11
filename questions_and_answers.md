<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Answer is A Because in js we dont need straight variable declaration . We can just write let greeting = "hello" or simply write greeting = "hello".  as we see above , there is 2 variables . greeting and greetign. They both are valid is js and so when we log greetign , we see the empty object which is inside greetign.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The answer is C because in js , it dosent matter if we are using Arithmetic operators on string or integers. If it is string , JS will add those two and show it. For example a=1 and b=a. answer will be 1a. Its not summing the strings but adding them together as it is instructed . It will only sum if both of the inputs are numbers. That is why C is the right answer. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The answer is A. food is an array and info is an object. in info there is a property favoriteFood which gets value from the object food. and then info.favoriteFood is updated to a new value. food is never updated. That is why when console.log(food) is used we will see the default values previously set on Array food.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>When a function is called but its parameters are not passed or called it doesnt not ignore it. Instead it still shows the uncalled variables . As the variable is not initialized/called , it will show "undefined" as a result </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>In programming , 0 is considered as false . So , when 0 from the nums array comes to if condition , the condition dosent start [It would have only started if the condition was (!num) in the case of 0]. So, the condition runs only 3 times and increments count to plus 1 every time. As "count" gets incremented 3 times, the answer is 3(C).</i>

</p>
</details>
