/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;


freelancerGenerator() {
  const name = sample(NAMES);
  const occupation = sample(OCCUPATIONS);
  const rate = 20 + (Math.floor(Math.random() * 180))

return {name, occupation, rate};
}

freelancerAvgRate() {
const total = freelancers.reduce((total, freelancer) => total+ freelancer.rate, 0);
return total / freelancers.length;

}

function sample(array) {
return array[Math.floor(Math.random() * array.length)]
}

function FreelancerRow({name, occupation, rate}) {
const $tr = document.createElement("tr");
$tr.innerHTML = `
<td>${name}</td>  
<td>${occupation}</td>
<td>${rate}</td>
`;
return $tr;
}

function FreelancerRows() {
const $tbody = document.createElement("tbody");
const $freelancers = freelancers.map(FreelancerRow);
$tbody.replaceChildren(...$freelancers);
return $tbody;
}

function AverageRate() {
  const $p = document.createElement("p");
  $p.textContent = `The average rate is $${AverageRate.toFixed(2)}`;
  return $p;
}

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}
 render();