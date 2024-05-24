export const filterData = (data, filterBy, value) => {
  return data.filter(personaje => personaje['facts'][filterBy] === value);
};
  
export const sortData = (data, sortBy, sortOrder) => {
  
  if (!sortOrder) {
    return data;
  }

  return data.slice().sort((a, b) => {
    const aValue = String(a[sortBy]);
    const bValue = String(b[sortBy]);

    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
};

  
export const computeStats = (data) => {
  const validYears = data.map((item) => {
    const yearOfBirth = item.facts.yearOfBirth;

    if (yearOfBirth && !isNaN(yearOfBirth)) {
      return parseInt(yearOfBirth); 
    }
    return null; 
  }).filter((year) => year !== null); 

  const totalPeople = validYears.length;

  const totalYearSum = validYears.reduce((sum, year) => {
    sum += year; 
    return sum;
  }, 0);

  const averageYear = (totalYearSum / totalPeople);
  const averageYearInteger = parseInt(averageYear);
  return averageYearInteger;
};