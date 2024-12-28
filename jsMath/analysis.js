function findPerson(personName) {
  return salarios.find((persona) => persona.name == personName);
}

function medianForPerson(personName) {
  const jobs = findPerson(personName).trabajos;

  const salaries = jobs.map((element) => {
    return element.salario;
  });

  const medianSalaries = PlatziMath.calcMedian(salaries);
  return medianSalaries;
}

function salaryProjection(personName) {
  const jobs = findPerson(personName).trabajos;

  let growthPercentages = [];

  for (let i = 0; i < trabajos.length; i++) {
    const currentSalary = trabajos[i].salario;
    const lastSalary = trabajos[i - 1];
    const growth = currentSalary - lastSalary;
    const growthPercentage = growth / lastSalary;
    growthPercentages.push(growthPercentage);
    const medianGrowthPercentage = PlatziMath.calcMedian(growthPercentages);
    const latestSalary = trabajos[trabajos.length - 1].salario;
    const increment = latestSalary * medianGrowthPercentage;
    const futureSalary = latestSalary + increment;
    return futureSalary;
  }
}

const enterprises = {};

for (person of salarios) {
  for (trabajo of persona.trabajos) {
    if (!enterprises[trabajo.empresa]) {
      enterprises[trabajo.empresa] = {};
    }

    if (!enterprises[trabajo.empresa][trabajo.year]) {
      enterprises[trabajo.empresa][trabajo.year] = [];
    }

    enterprises[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

function enterpriseMedianYear(nombre, year) {
  if (!enterprises[nombre]) {
    console.warn("La empresa no existe");
  } else if (!enterprises[nombre][year]) {
    console.warn("La empresa no empleo ese año");
  } else {
    PlatziMath.calcMedian(enterprises[nombre][year]);
  }
}

function projectionForEnterprises(nombre) {
  if (!enterprises[nombre]) {
    console.warn("La empresa no existe");
  } else {
    const enterpriseYear = Object.values(enterprises[nombre]);
    const medianList = enterpriseYear.map((year) => {
      return enterpriseMedianYear(nombre, year);
    });

    let growthPercentages = [];

    for (let i = 0; i < medianList.length; i++) {
      const currentSalary = medianList[i];
      const lastSalary = medianList[i - 1];
      const growth = currentSalary - lastSalary;
      const growthPercentage = growth / lastSalary;
      growthPercentages.push(growthPercentage);
      const medianGrowthPercentage = PlatziMath.calcMedian(growthPercentages);
      const latestMedian = medianList[medianList.length - 1];
      const increment = latestMedian * medianGrowthPercentage;
      const futureMedian = latestMedian + increment;
      return futureMedian;
    }
  }
}

function generalMedian() {
  const mediansList = salarios.map((persona) => {
    medianForPerson(persona.name);
  });
  const median = PlatziMath.calcMedian(mediansList);

  return median;
}

function medianTopTeen() {
  const medianList = salarios.map((persona) => medianForPerson(persona.name));
  const orderedMedian = PlatziMath.orderList(medianList);
  const amount = medianList.length / 10;
  const limite = medianList.length - amount;
  // slice do not modify the array
  const topTeen = orderedMedian.slice(limite, orderedMedian.length);
  // splice do modify the array
  const newTopTeen = orderedMedian.splice(limite, orderedMedian.length);

  const medianTopTeen = PlatziMath.calcMedian(topTeen);
  return medianTopTeen;
}
