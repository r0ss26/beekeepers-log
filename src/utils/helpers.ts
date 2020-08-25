export function daysSinceLastCollection(colony): number {
  let daysSinceLastCollection: number;
  if (colony && colony.collections.length) {
    daysSinceLastCollection =
      Math.floor((new Date().valueOf() -
        new Date(colony.collections[0].date).valueOf()) /
      (1000 * 3600 * 24));
  } else {
    daysSinceLastCollection =
      Math.floor((new Date().setHours(23,59,59,999).valueOf() - new Date(colony.created).valueOf()) /
      (1000 * 3600 * 24));
  }
  return daysSinceLastCollection;
}

export function calculateOverproduction(colony) {
  return ((colony.bees / colony.hives) * daysSinceLastCollection(colony) * 0.26);
}

// TODO
// use pipes for numbers
// display over production on hives to be built
// form validation