const composeRefs = (...refs) => {
  return (el) => {
    refs.forEach((ref) => {
      ref.value = el;
    });
  };
};
export {
  composeRefs as c
};
