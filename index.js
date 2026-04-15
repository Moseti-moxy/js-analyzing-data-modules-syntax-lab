


function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3: Loop through args
  for (const userArray of args) {
    // Step 4: Merge Arrays using spread operator
    combinedObject.users.push(...userArray);
  }

  // Step 5: Get today's date
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}
const group1 = ['Eugene','Mark']
const group2 = ['charlie', 'diana'];
const group3 = ['eve'];


console.log(combineUsers(group1, group2, group3));

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
