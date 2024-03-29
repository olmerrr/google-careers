// const axios = require("axios");
// const url = "http://localhost:3000/jobs";

// const fetchJobsSync = () => {
//   axios.get(url).then((response) => console.log(response.data));
// };
// fetchJobsSync();

// const fetjJobsAsync = async () => {
//   const response = await axios.get(url);
//   console.log(response.data);
// };

// fetjJobsAsync();

// slice method - означает выреж мне часть массива от заданого(первого аргумента) параметра до конца(или второго аргумента не включительно) массива и создай копию
// const cars = ["cherry", "bmw", "audi", "ford"];
// const newCars = cars.slice(1, 3);
// console.log(newCars);
// slice method

// Set - collection uniqueness data
// const arr = ['apple', 'banana', 'apple'];
// const unicArr = new Set(arr)
// console.log(unicArr);
// const numbers = [1, 3, 5, 6, 7, 4, 2, 8, 11];
// console.log(numbers.filter((number) => number > 6));
// filter - return true/false

const jobs = [
  { title: "Angular Dev", organization: "Microsoft" },
  { title: "Vue Dev", organization: "Google" },
  { title: "React Dev", organization: "Faceboock" },
];

// const chosenSpecialist = jobs.filter((job) => job.organization === "Google");
// console.log(chosenSpecialist);

// reactive
// const { ref, computed } = require("vue");

// let a = ref(1);
// let b = ref(4);

// console.log(a.value);
// console.log(b.value);
// let c = computed(() => a.value + b.value);
// console.log(c.value);

// more reactive
const { computed, reactive, toRefs } = require("vue");
// const name = ref("Yaroslav");
// const title = computed(() => name.value + " the Great");
// name.value = "Max Payne";
// console.log(title.value);

const person = reactive({
  firstName: "Yaroslav",
  lastName: "Dombrovskiy",
});

const { firstName, lastName } = toRefs(person);

// let title = computed(() => `${firstName.value} ${lastName.value} the Great!`);
// const titleLength = computed(() => title.value.length);

// console.log(title.value);
// console.log(titleLength.value);

const refPerson = toRefs(person);
console.log(person.firstName);
