/* eslint-disable no-undef */
const exercises = require('./exercises');

test('returnValue: returns the parameter as is', () => {  
  expect(exercises.returnValue(1)).toBe(1);
  expect(exercises.returnValue("Hallo")).toBe("Hallo");
  expect(exercises.returnValue(true)).toBe(true);
});

test('undefinedVariable: returns a number variable', () => {
  expect(typeof exercises.undefinedVariable()).toBe("undefined");
  expect(exercises.undefinedVariable.toString()).toContain('let')
})

test('nullVariable: returns a number variable', () => {
  expect(typeof exercises.nullVariable()).toBe("object");
  expect(exercises.nullVariable.toString()).toContain('const')
  expect(exercises.nullVariable.toString()).toContain('null')
})

test('numberVariable: returns a number variable', () => {
  expect(typeof exercises.numberVariable()).toBe("number");
  expect(exercises.numberVariable.toString()).toContain('const')
})

test('numberUsageSimple: returns half of the sum of a and b', () => {
  expect(exercises.numberUsageSimple.toString()).toContain('+')
  expect(exercises.numberUsageSimple()).toBe(3.875);
})

test('numberUsageMath: returns the maximum of a and b', () => {
  expect(exercises.numberUsageMath.toString()).toContain('max')
  expect(exercises.numberUsageMath()).toBe(1237);
})

test('stringVariable: returns a string variable', () => {
  expect(typeof exercises.stringVariable()).toBe("string");
  expect(exercises.stringVariable.toString()).toContain('const')
})

test('numberToString: returns a string variable', () => {
  expect(typeof exercises.numberToString()).toBe("string");
  expect(exercises.numberToString.toString()).toContain('toString')
})

test('stringManipulation: returns a string variable', () => {
  expect(exercises.stringManipulation("In Javascript heißt der Datentyp für alle Zahlen 'float'")).toBe(57);
  expect(exercises.stringManipulation.toString()).toContain('replace')
  expect(exercises.stringManipulation.toString()).toContain('length')
})

test('stringToArray: returns the third word of the input text', () => {
  expect(exercises.stringToArray("In Javascript heißt der Datentyp für alle Zahlen 'float'")).toBe("heißt");
  expect(exercises.stringToArray.toString()).toContain('split')
})

test('arrayVariable: returns a array variable', () => {
  expect(typeof exercises.arrayVariable()).toBe("object");
  expect(Array.isArray(exercises.arrayVariable())).toBe(true);
  expect(exercises.arrayVariable()).toHaveLength(2);
})

test('arrayIncludes: returns the third word of the input text', () => {
  expect(exercises.arrayIncludes([1, 2, 3, 4, 6, 7])).toBe(false);
  expect(exercises.arrayIncludes.toString()).toContain('includes')
})

test('condition: returns the correct string based on the boolean variable', () => {
  expect(exercises.condition(true)).toBe("ist wahr");
  expect(exercises.condition(false)).toBe("ist falsch");
  expect(exercises.condition.toString()).toContain('if')
})

test('booleanExpressions: returns the correct string based on the boolean variable', () => {
  expect(exercises.booleanExpressions(true, false)).toBe("param1 ist wahr und param2 falsch");
  expect(exercises.booleanExpressions(false, true)).toBe("nicht ganz...");
})

test('equality: returns the results of sometimes confusing type conversion equalities', () => {
  expect(exercises.equality()).toEqual([false, true, false, true, true, false, false, false]);
})

test('objectVariable: returns a object variable', () => {
  const object = exercises.objectVariable();
  const objectProps = Object.entries(object)
  
  expect(typeof object).toBe("object");
  expect(objectProps).toHaveLength(5);
  expect(objectProps.some(([, value]) => typeof value === "string")).toBeTruthy();
  expect(objectProps.some(([, value]) => typeof value === "number")).toBeTruthy();
  expect(objectProps.some(([, value]) => typeof value === "boolean")).toBeTruthy();
  expect(objectProps.some(([, value]) => Array.isArray(value))).toBeTruthy();
  expect(objectProps.some(([, value]) => typeof value === "object")).toBeTruthy();
})

test('objectManipulation: returns a array variable', () => {
  const testObject = {
    someChildObject: {
      x: 1,
      y: 2
    },
    someOtherProp: "unused"
  }

  const result = exercises.objectManipulation(testObject)
  
  expect(result).toEqual(['x', 'y']);
})


test('json: returns a array variable', () => {
  expect(typeof exercises.json('{"y": 3}')).toBe("string");
  expect(exercises.json('{"y": 3}')).toBe('{"y":3,"x":5}');
})

test('functionCall: returns a array variable', () => {
  expect(exercises.functionCall()).toEqual(["name", "surname", "secret"]);
})

test('filter: returns a array variable', () => {
  expect(exercises.filter.toString()).toContain("filter")
  expect(exercises.filter()).toEqual(["name", "surname"]);
})

test('transform: returns a array variable', () => {
  const testObject = { 
    name: "Max",
    details: { 
      job: "Software developer",
      secretSalary: 65000,
      secretIBAN: "DE59 2309 2304 5849 2101" 
    } 
  }
  
  expect(exercises.transform.toString()).toContain("map")
  expect(exercises.transform(testObject)).toEqual([65000, "DE59 2309 2304 5849 2101"]);
})

test('transformImproved: returns a array variable', () => {
  const testObject = { 
    name: "Max",
    details: { 
      job: "Software developer",
      secretSalary: 65000,
      secretIBAN: "DE59 2309 2304 5849 2101" 
    } 
  }
  
  expect(exercises.transformImproved(testObject)).toEqual([["secretSalary", 65000], ["secretIBAN", "DE59 2309 2304 5849 2101"]]);
})

test('transformImprovedFurther: returns a array variable', () => {
  const testObject = { 
    name: "Max",
    details: { 
      job: "Software developer",
      secretSalary: 65000,
      secretIBAN: "DE59 2309 2304 5849 2101" 
    } 
  }
  
  const res = exercises.transformImprovedFurther(testObject)

  expect(res).toHaveProperty("secretSalary", 65000)
  expect(res).toHaveProperty("secretIBAN", "DE59 2309 2304 5849 2101");
})