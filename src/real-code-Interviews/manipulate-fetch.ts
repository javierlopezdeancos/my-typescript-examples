/**
Create a second function that returns the average age of the users.
Log the output of this function to the console.
*/

function average(data: any[]): number {
  return data.reduce((accumulator, { dob: { age } }) => accumulator + age / data.length, 0);
}

/**
Create a function that accepts the api results array as input. The result should be an array of strings where each string is a
concatenation of the first name and last name.
Log the output of this function to the console.
Example output:
[
  'Ernst Naezer',
  'Kamil Sulubulut',
  'Vijai Ramcharan'
]
*/

function resultsMap(data: any[]): string[] {
  return data.map(({ name: { first, last } }) => {
    return `${first} ${last}`;
  });

  /**
   * Option for of loop

    const output = [];

    for (const item of data) {
      const firstName = item.name.first
      const lastName = item.name.last

      output.push(`${firstName} ${lastName}`)
    }

    return output
  **/
}

function startFetch() {
  fetch('https://randomuser.me/api/?results=20')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const output = resultsMap(data.results);
      const ageAvegare = average(data.results);
      console.log(output);
      console.log('average', ageAvegare);
    });
}

startFetch();
