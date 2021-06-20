const healthAttributes = require("./health-attributes");

test('func decorateWithHealthAttributes decorates person object with bmi index above 40', () => {
  const person = {
    Gender: "Female", HeightCm: 167, WeightKg: 82
  }
  const decoratedPerson = healthAttributes(person);
  expect(decoratedPerson.BmiIndex).toBe(49.1);
  expect(decoratedPerson.BmiCategory).toBe("Very severely obese");
  expect(decoratedPerson.HealthRisk).toBe("Very high risk");
  
});

test('func decorateWithHealthAttributes decorates person object with bmi index between 35 and 39.9', () => {
    const person = {
      Gender: "Female", HeightCm: 201, WeightKg: 80
    }
    const decoratedPerson = healthAttributes(person);
    expect(decoratedPerson.BmiIndex).toBe(39.8);
    expect(decoratedPerson.BmiCategory).toBe("Severely obese");
    expect(decoratedPerson.HealthRisk).toBe("High risk");
    
  });

  test('func decorateWithHealthAttributes decorates person object with bmi index between 30 and 34.9', () => {
    const person = {
      Gender: "Female", HeightCm: 100, WeightKg: 30
    }
    const decoratedPerson = healthAttributes(person);
    expect(decoratedPerson.BmiIndex).toBe(30);
    expect(decoratedPerson.BmiCategory).toBe("Moderately obese");
    expect(decoratedPerson.HealthRisk).toBe("Medium risk");
    
  });

  test('func decorateWithHealthAttributes decorates person object with bmi index between 25 and 29.9', () => {
    const person = {
      Gender: "Female", HeightCm: 120, WeightKg: 30
    }
    const decoratedPerson = healthAttributes(person);
    expect(decoratedPerson.BmiIndex).toBe(25);
    expect(decoratedPerson.BmiCategory).toBe("Overweight");
    expect(decoratedPerson.HealthRisk).toBe("Enhanced risk");
    
  });


  test('func decorateWithHealthAttributes decorates person object with bmi index between 18.5 and 24.9', () => {
    const person = {
      Gender: "Female", HeightCm: 440, WeightKg: 82
    }
    const decoratedPerson = healthAttributes(person);
    expect(decoratedPerson.BmiIndex).toBe(18.64);
    expect(decoratedPerson.BmiCategory).toBe("Normal weight");
    expect(decoratedPerson.HealthRisk).toBe("Low risk");
    
  });

  test('func decorateWithHealthAttributes decorates person object with bmi index equal to 18.4', () => {
    const person = {
        Gender: "Female", HeightCm: 451, WeightKg: 83
      }
      const decoratedPerson = healthAttributes(person);
      expect(decoratedPerson.BmiIndex).toBe(18.4);
      expect(decoratedPerson.BmiCategory).toBe("Underweight");
      expect(decoratedPerson.HealthRisk).toBe("Malnutrition risk");
    
  });

  test('func decorateWithHealthAttributes decorates person object with bmi index below 18.4', () => {
    const person = {
      Gender: "Female", HeightCm: 450, WeightKg: 82
    }
    const decoratedPerson = healthAttributes(person);
    expect(decoratedPerson.BmiIndex).toBe(18.22);
    expect(decoratedPerson.BmiCategory).toBe("Underweight");
    expect(decoratedPerson.HealthRisk).toBe("Malnutrition risk");
    
  });