export default {
  // we get the context object from vue automatically
  addPet: (context, payload) => {
    // the commit function is provided by Vue and it is used to trigger a mutation which is going to update the state
    context.commit('appendPet', payload);
  },
};
