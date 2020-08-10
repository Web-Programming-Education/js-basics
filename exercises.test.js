/* eslint-disable no-undef */
const exercises = require('./exercises');

test('returnValue: returns the parameter as is', () => {  
  expect(exercises.returnValue(1)).toBe(1);
  expect(exercises.returnValue("Hallo")).toBe("Hallo");
  expect(exercises.returnValue(true)).toBe(true);
});

test('undefinedVariable: returns a undefined variable', () => {
  expect(typeof exercises.undefinedVariable()).toBe("undefined");
  expect(exercises.undefinedVariable.toString()).toContain('let')
})

test('nullVariable: returns a null variable', () => {
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

test('numberToString: returns a number as string variable', () => {
  expect(typeof exercises.numberToString()).toBe("string");
  expect(exercises.numberToString.toString()).toContain('toString')
})

test('stringManipulation: replaces the word "float" with "number"', () => {
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

test('arrayIncludes: returns false because 5 is no element of the input array', () => {
  expect(exercises.arrayIncludes([1, 2, 3, 4, 6, 7])).toBe(false);
  expect(exercises.arrayIncludes.toString()).toContain('includes')
})

test('condition: returns the correct string based on the boolean variable', () => {
  expect(exercises.condition(true)).toBe("ist wahr");
  expect(exercises.condition(false)).toBe("ist falsch");
  expect(exercises.condition.toString()).toContain('if')
})

test('booleanExpressions: returns the correct string based on boolean expressions', () => {
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

test('objectManipulation: returns the array of object keys', () => {
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


test('json: returns a json string with additional x property', () => {
  expect(typeof exercises.json('{"y": 3}')).toBe("string");
  expect(exercises.json('{"y": 3}')).toBe('{"y":3,"x":5}');
})

test('functionCall: returns an array of object keys', () => {
  expect(exercises.functionCall()).toEqual(["name", "surname", "secret"]);
})

test('functionExpression: returns a function which caluclates any operation on 2 numbers', () => {
  let func = exercises.functionExpression()
  
  expect(func(10.2, 1.7, Math.pow)).toBe(100);
  expect(func(9.6, 2.1, Math.min)).toBe(2);
  expect(func(10.1, 1.6, function(x,y) { return x + y })).toBe(12);
})

test('callback: passes a callback function which calls a passed callback function to get the 2nd array element', () => {
  exercises.callback(function(fn) {
    fn([1,42,19], function(value) { expect(value).toBe(42) })
  })
})

test('lambda:  returns a lambda which caluclates any operation on 2 numbers', () => {
  let func = exercises.lambda()
  
  expect(func.toString()).toContain("=>")
  expect(func.toString()).not.toContain("{")
  expect(func(10.2, 1.7, Math.pow)).toBe(100);
  expect(func(9.6, 2.1, Math.min)).toBe(2);
  expect(func(10.1, 1.6, function(x,y) { return x + y })).toBe(12);
})

test('filter: returns only object keys wiht "name" in them', () => {
  expect(exercises.filter.toString()).toContain("filter")
  expect(exercises.filter()).toEqual(["name", "surname"]);
})

test('transform: returns all the secrets as array', () => {
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

test('transformImproved: returns all the secrets as array of arrays', () => {
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

test('transformImprovedFurther: returns all the secrets as object', () => {
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