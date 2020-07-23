export default {
  // we have access to the state
  appendPet: (state, { species, pet }) => {
    state[species].push(pet);
  },
};
