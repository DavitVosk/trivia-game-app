import _ from 'lodash'

export const getSafeIntolerant = (
  fn,
  defaultVal,
  tolerableValues = [],
  additionalIntolerableValues = []
) => {
  // don't tolerate below three values by default
  const intolerableValues = _.difference(
    [false, undefined, null, ...additionalIntolerableValues],
    tolerableValues
  );
  try {
    const result = fn();
    if (intolerableValues.includes(result)) {
      throw "intolerable";
    }
    return fn();
  } catch (e) {
    if (e === "intolerable") {
      // console.log("detected one of intolerable values: ", intolerableValues);
      // console.log("hence picking default value: ", defaultVal);
    }
    return defaultVal;
  }
};
