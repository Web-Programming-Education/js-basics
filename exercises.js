/**
 * Funktionen sind der elementare Baustein dieser Aufgaben.
 * Jede Funktion stellt eine Aufgabe dar.
 * 
 * Funktionen können Parameter haben, welche innerhalb der runden Klammern angegeben werden.
 * Funktionen können beliebig viele Javascript-Anweisungen innerhalb der geschweiften Klammern enthalten
 * Funktionen können mit dem Schlüsselwort `return` einen Wert zurückgeben, welchen der Aufrufer der Funktion auslesen kann.
 * 
 * Bsp:
 * ```
 * function name(parameter1, parameter2) {
 *   return parameter1
 * }
 * ```
 * 
 * Die so definierte Funktion hat den Namen "name", 
 * erhält 2 Parameter eines beliebigen Datentyps (es kann auch keiner angegeben werden)
 * und gibt den Wert des ersten Parameters "parameter1" zurück
 * 
 * Der Aufruf dieser Funktion erfolgt so: `name(1323, 1654)`
 * Es werden 2 Parameter angegeben der Rückgabewert wäre 1323
 * 
 * Die folgende Funktion `returnValue` hat einen Parameter `someValue` und tut aktuell nichts
 * Aufgabe: Gib den Wert des Parameters wieder zurück, um eine erste, nicht sehr hilfreich aber funktionsfähige Funktion zu schrieben. 
 */
function returnValue(someValue) {
  // TODO: Gib `someValue` zurück
  return someValue;
}

/**
 * Bevor wir uns später im Detail mit Funktionen beschäftigen, 
 * betrachten wir zunächst die elementaren Datentypen und -strukturen in Javascript (JS).
 * 
 * Der Parameter `someValue` in der vorigen Aufgabe ist 
 * innerhalb der Funktion vergleichbar mit einer Variablen:
 * Jeweils durch den Namen der Variable oder des Parameters, wird der Wert referenziert.
 * 
 * In der folgenden Funktion wird eine Variable zurückgegeben.
 * Diese ist jedoch noch nicht deklariert.
 * 
 * Variablen werden mit `let variablenName` oder mit `const variablenName` deklariert,
 * je nachdem, ob deren Wert änderbar sein soll (`let`) oder nicht (`const`),
 * und ob die Variable direkt durch Zuweisung eines Wertes definiert werden kann.
 * (Mit `const` deklarierte Variablen müssen zugleich definiert werden)
 * 
 * Eine undefinierte, aber deklarierte Variable hat den Wert `undefined`.
 * Die ist zugleich der erste primitive Datentyp in Javascript.
 * 
 * Aufgabe: Deklariere die änderbare 
 * Variable "variable" ohne ihr einen Wert zuzuweisen.
 * 
 * Referenz: 
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Variablen
 * * https://developer.mozilla.org/de/docs/Glossary/undefined
 */
function undefinedVariable() {
  // TODO: deklariere die Variable `variable` mit `let`, weiße ihr aber keinen Wert zu
  let variable;

  return variable;
}


/**
 * Einer Variablen nicht direkt einen Wert zuzuweisen
 * wird beim Einsatz mancher Kontrollstrukturen benötigt.
 * 
 * In den meisten Fällen geben wir einer Variablen aber direkt einen Wert
 * und definieren sie dadurch.
 * 
 * In diesem Fall ist es ratsam das Schlüsselwort `const` zu verwenden,
 * außer die Variable muss zwingend im weiteren Programmverlauf neu zugewiesen werden.
 * Sich ändernde Variable führen zu einem schwerer Nachvollziehbaren Programmablauf.
 * Aus diesem Grund nutzen wir ab jetzt, wann immer möglich,
 * `const` für die Deklaration und Definition von Variablen.
 * 
 * Der zweite primitive Datentyp und "Spezialfall" neben `undefined` ist `null`.
 * Im Unterschied zu `undefined` bedeutet die Zuweisung von `null`, 
 * dass wir explizit ausdrücken wollen, dass einen Variable leer ist.
 * 
 * Aufgabe: Definiere die konstante, nicht änderbare 
 * Variable "variable" mit dem Wert `null`, dem zweiten primitiven Datentyp in JS
 * 
 * Referenz: 
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Variablen
 * * https://developer.mozilla.org/de/docs/Glossary/null
 */
function nullVariable() {
  // TODO: Definiere eine Variable mit Zahlenwert
  const variable = null;
  
  return variable;
}

/**
 * Als nächstes arbeiten wir mit Zahlen.
 * 
 * Aufgabe: Definiere die konstante, nicht änderbare 
 * Variable "variable" mit einem Zahlenwert, dem dritten primitiven Datentyp in JS
 * 
 * Referenz: 
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Variablen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen#Number_type
 */
function numberVariable() {
  // TODO: Definiere eine Variable mit Zahlenwert
  const variable = 5;
  
  return variable;
}

/**
 * Der Datentyp "number" umfasst in Javascript nicht nur ganze Zahlen wie 2, 15, 400
 * sondern auch Kommazahlen, die überlicherweise als "floats" bezeichnet werden 
 * und in vielen anderen Programmiersprachen ein eigener Datentyp sind: 0.76, 1.2 140.00121212
 * 
 * Zahlen können wie in anderen Programmiersprachen mathematisch kombiniert werden.
 * 
 * Aufgabe: Addiere die Zahlenvariablen a und b, teile das Ergebnis durch 2 
 * und weise es der Variablen c zu.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Ausdruecke_und_Operatoren#Arithmetische_Operatoren_Rechenzeichen
 */
function numberUsageSimple() {
  const a = 5;
  const b = 2.75;

  // TODO: Definiere die Variable c, nutzen dabei die Variablen c, um das gewünscht Ergebnis zu erhalten.
  const c = (a + b) / 2;

  return c;
}

/**
 * Neben den einfachen mathematischen Operationen kann das Objekt `Math` genutzt werde,
 * um z.B. Zahlen zu runden, Minimum und Maximum zu bestimmen oder die Quadratwurzel zu berechnen
 * 
 * Die Funktionen werden per Dot-Notation aufgerufen: `Math.<Funktionsname>`
 * 
 * Aufgabe: Finde die Funktion zum Berchnen des Maximums 
 * (Tipp: Der Code-Editor hilft dir dabei sobald du den Punkt nach Math eingetippt hast)
 * und rufe Sie mit den beiden Variablen a und b auf.
 * Gib das Ergebnis zurück.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Numbers_and_dates#Math_Objekt
 */
function numberUsageMath() {
  const a = 349;
  const b = 1237;

  // TODO: Gib das Maximum der beiden Zahlen a und b als Funktionsergebnis zurück.
  return Math.max(a, b)
}

/**
 * "Strings" dienen der Darstellung von Text 
 * Indem beliebiger Text in `"` oder `'` eingeschlossen wird,
 * wird ein String definiert, der 4. primitive Datentyp
 * 
 * Die Wahl zwischen `"` und `'` ist großteils Geschmackssache,
 * da beide Methoden Vor- und Nachteile haben.
 * Bei Interesse gibt es in [dieser Diskussion](https://stackoverflow.com/questions/242813/when-should-i-use-double-or-single-quotes-in-javascript) Details dazu.
 * Wir verwenden im Folgenden doppelte Anführungszeichen `"`.
 * 
 * Aufgabe: Definiere die Variable "variable" mit einem beliebigen Text
 * 
 * Referenz: 
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Variablen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen#String_Datentyp
 */
function stringVariable() {
  // TODO: Definiere die Variable "variable" mit einem beliebigen Text
  const variable = "some string";
  
  return variable;
}

/**
 * Zahlen können in Strings umgewandelt werden.
 * 
 * Variablen aller Datentypen besitzen zu diesem Zweck die Funktion `toString`
 * 
 * Aufgabe: Konvertiere die Variable a, die eine Zahl darstellt,
 * in einen String und gib diesen zurück
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/toString
 */
function numberToString() {
  const a = 6

  // TODO: gibt die Zahl als Text zurück
  return a.toString()
}

/**
 * Strings selbst haben Funktionen für deren Auswertung/Manipulation,
 * z.B. 
 * * `replace`, um Teile des Textes zu ersetzen (Hinweis: der String selbst wird nicht verändert, 
 *    das Ergebnis muss einer neuen Variable zugewiesen werden)
 * * `substring`, um einen Ausschnitt des Textes zu erhalten 
 * * `includes`, um zu prüfen ob ein bestimmter Text enthalten ist
 * 
 * Außerdem kann die Länge eines Strings über das Property `length` abgfragt werden.
 * Properties sind Schlüssel-/Wertpaare und Werte können über die Dot-Notation ausgelesen werden.
 * Im Gegensatz zu Funkionen werden jedoch keine Klammern genutzt.
 * 
 * Die folgende Funktion erhählt einen String als Parameter.
 * Aufgabe: Ersetze in diesem String das Wort "float" durch "number"
 * Gib dann die Länge des Strings zurück.
 * 
 * Referenz:
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods
 */
function stringManipulation(text) {
  // TODO: Ersetze in diesem String das Wort "float" durch "number"
  const newText = text.replace("float", "number")
  // TODO: Gib dann die Länge des Strings zurück.
  return newText.length;
}

/**
 * Ein String kann in Einzelteile zerlegt werden (Funktion split).
 * Dadurch entsteht eine Liste von Teilstrings.
 * 
 * Listen werden in Progammiersprachen als "Arrays" bezeichnet und
 * sind meistens eigene Datentypen. (Spoiler: in JS nicht)
 * 
 * Auf die einzelnen Elemente eines Arrays wird mit eckigen Klammern und 
 * dem 0-basierten Index zugegriffen. Bsp: array[5] für das 6. Element.
 * 
 * Aufgabe: Trenne den Text des Parameters `text` in Wörter auf.
 * 
 * Referenz:
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Instance_methods
 */
function stringToArray(text) {
  // TODO: Trenne den Text in Wörter auf
  const wordArray = text.split(" ")
  // TODO: Gibt das 3. Wort zurück
  return wordArray[2]
}

/**
 * Um ein Array manuell anzulegen nutze eckige Klammern gefolgt von durch Komma getrennte Werte.
 * 
 * Aufgabe: Definiere eine Variable mit einem Array mit 
 * genau 2 Elementen eines beliebigen primitiven Datentyps
 * 
 * Hinweis: Die Testfunktion zu der folgenden Funktion,
 * siehe ([exercises.test.js](exercises.test.js), Test: arrayVariable), kann
 * im Vergleich zu den vorigen Datentyp-Aufgaben, nicht einfach den Datentyp prüfen, 
 * sondern muss eine spezielle Funktion: `Array.isArray`.
 * Damit wird geprüft, ob die Variable ein Array ist.
 * Ein weiterer Hinweis, das Arrays kein eigener Datentyp sind.
 * Warum, wird später deutlich
 * 
 * Referenz: 
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen#Indizierte_Collections_Arrays_und_typisierte_Arrays
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Array_Literal
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
function arrayVariable() {
  // TODO: Definiere eine Variable mit einem Array
  const variable = [1, 2];
  
  return variable;
}

/**
 * Auch Arrays können mit Funktionen bearbeitet und ausgewertet werden.
 * Um z.B. zu prüfen, ob ein Array einen bestimmten Wert enthält, wird
 * die Funktion `includes` (nicht contains oder search) genutzt.
 * 
 * Aufgabe: Gibt zurück, ob das Array die Zahl 5 enthält.
 * 
 * Refernez: 
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
function arrayIncludes(listOfNumbers) {
  // TODO: Erstelle eine Variable mit boolschem Wert, der angibt,
  // ob `listOfNumbers` die Zahl 5 als Listenelement enthält undg ibt das Ergebnis zurück
  return listOfNumbers.includes(5)
}

/**
 * Das Ergebnis der vorigen Operation (`includes`) ist der letzte der 5 primitiven Datentypen in JS:
 * 1. undefined
 * 2. null
 * 3. number (1, 43, 53)
 * 4. string ("", "asds", "asda asdlkg gfdl")
 * 5. **boolean** (true, false)
 * (6. Symbol - betrachten wir in dieser Einführung nicht)
 * 
 * Booleans stellen die Wahrheitswerte wahr/falsch dar.
 * Damit sind sie besonders in Kontrollstruktur relevant
 * Beispielsweise wird der Code innerhalb der ersten geschweiften Klammern der `if`-Verzweigung ausgeführt, 
 * wenn die Variable x den Wert `true` hat.
 * 
 * ```js
 * if (x) {
 *  y = "x ist wahr";
 * }
 * ```
 * 
 * Aufgabe:  
 * Überprüfe die Variable `isSomeBool` mit einer Bedingung, wie im obigen Beispiel.
 * Gib `"ist wahr"` zurück wenn `isSomeBool` wahr ist.
 * `if`-Verzweigungen können auch einen "sonst"-Fall haben.
 * Wie das geht kennst du entweder aus anderen Programmiersprachen oder kannst es leicht herausfinden. 
 * Gib in diesem Fall, also wenn `isSomeBool` falsch ist, `"ist falsch"` zurück.
 * 
 * Hinweis: es kann mehrere `return`-Anweisungen in einer Funktion geben. 
 * Alternativ kannst du eine Variable vor der Bedingung deklarieren und diese in den Verzweigungen zuweisen
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Datenstrukturen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Variablen
 * * https://developer.mozilla.org/de/docs/Glossary/Boolean
 */
function condition(isSomeBool) {
  // TODO: prüfen die Variable `isSomeBool` mit einer Bedingung
  if (isSomeBool) {
    return "ist wahr"
  } else {
    return "ist falsch"
  }
}

/**
 * Mehrere Wahrheitswerte können verknüpft werden.
 * 
 * Dafür werden sogenannte "boolesche Ausdrücke" verwendet:
 * 
 * `var1 && var2`: UND - Beide Werte (`var1` und `var2`) müssen wahr sein
 * `var1 || var2`: ODER - Mindestens ein Wert (`var1` oder `var2`) muss wahr sein
 * `!var1`: NICHT - Der Wert (`var1`) muss falsch sein
 * 
 * Mehrere dieser Ausdrücke lassen sich wiederum verknüpfen.
 * Die Auswertung erfolgt dabei anhand der [Operatorrangfolge](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), 
 * wobei `!` immer stärker bindet als `&&` und `&&` stärker als `||`.
 * Mit Klammern kann dieses Verhalten beeinflusst werden.
 * D.h.: 
 * 
 * ```js
 * false && !false || false      // wird zu true, da `!false` zuerst ausgewertet wird, dann `false && !false` true ist und `true || false` true bleibt.
 * false && (!false || true)     // wird zu false, da `!false` zuerst ausgewertet wird, dann `(!false || true)` true ist, aber `false && true` trotzdem false ist.
 * ```
 * 
 * Aufgabe: Verknüpfe die übergebenen Parameter innerhalb der `if`-Bedingung so, 
 * dass `param1` wahr und `param2` falsch sein muss.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Ausdruecke_und_Operatoren#Logische_Operatoren
 */
function booleanExpressions(param1, param2) {
  // TODO: schreibe die `if`-Bedingung, sodass `param1` wahr und `param2` falsch sein muss.
  if (param1 && !param2) {
    return "param1 ist wahr und param2 falsch"
  } else {
    return "nicht ganz..."
  }
}

/**
 * Im vorigen Fall war `isSomeBool` immer ein `boolean`.
 * 
 * Javascript ist eine dynamisch typisierte Sprache.
 * D.h. Datentypen werden erst zur Laufzeit beachtet.
 * Außerdem kann eine mit `let` definierte Variable 
 * über deren Lebendauer unterschiedliche Datentypen haben:
 * 
 * ```js
 * let x = 2
 * x = "ein text, aber keine Zahl"
 * x = true
 * ```
 * 
 * In statisch typisierten Programmiersprachen, wie Java und C#,
 * wäre dieses Beispiel ein (Compiler-)Fehler.
 * 
 * Durch diese dynamische Typisierung funktionieren auch Vergleiche auf Gleichheit in JS
 * anders als in anderen Programmiersprachen.
 * In diesen muss ein Vergleich aus zwei gleichen Datentypen bestehen.
 * 
 * In JS ist es möglich, aber oft nicht empfehlenswert, Variablen unterschiedlichen Typs zu vergleichen.
 * 
 * Bei Vergleichen mit `==` oder `!=` findet eine automatische Typkonvertierung statt
 * Bei Vergleichen mit `===` oder `!==` dagegen nicht. Diese Operatoren werden empfohlen,
 * um Fehler durch eine automatische Konvertierung zu vermeiden.
 * 
 * Siehe dazu auch: FIXME: Folien-Link
 * 
 * Aufgabe: Finde heraus, warum die automatische Typkonvertierung problematisch sein kann.
 * Die Funktion `console.log` schreibt beliebige Variablen auf die Konsole/Terminal
 * Du findest die Ausgabe, wenn du die Tests ausführst.
 * Vorher musst du die existierende Bedingung jedoch korrigieren,
 * sodass der Inhalt der `if`-Verzweigung asugeführt wird.
 *
 * Gib die Ergebnisse als Array zurück
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Ausdruecke_und_Operatoren#Vergleichsoperatoren
 * * https://developer.mozilla.org/de/docs/Glossary/array
 */
function equality() {
  const x = "abc"

  // @ts-ignore
  if (x == "xyz") {
    // @ts-ignore
    console.log("true == 'true': ", true == "true")
    // @ts-ignore
    console.log("'100' ==  100: ", "100" ==  100)    // true oder false?
    // @ts-ignore
    console.log("'100' === 100: ", "100" === 100)   // ?
    // @ts-ignore
    console.log("'' ==  false: ", "" ==  false)  // ?
    // @ts-ignore
    console.log("0 == false: ", 0 == false)  // ?
    // @ts-ignore
    console.log("0 === false: ", 0 === false)  // ?
    // @ts-ignore
    console.log("true ==  'true': ", true ==  "true") // ?
    // eslint-disable-next-line
    console.log("NaN ==  NaN: ", NaN ==  NaN)
  }

  /* TODO: Gib die Ergebnisse der Vergleiche in er obigen Reihenfolge als Array von booleans zurück */
  return [ false, true, false, true, true, false, false, false]
}

/**
 * Die Ergebnisse der vorigen Aufgabe per Array zurückzugeben ist mühsam und verwirrend.
 * Ein Fehler in der Reihenfolge führt zu einem falschen Ergebnis.
 * 
 * Eigentlich wollen wir mehreren Schlüsseln ihre bestimmten Werte zuweisen.
 * 
 * In JS ist dies die Definition eines Objekts: 
 * * Objekte bestehen aus (mehreren) Schlüssel-/Wertpaaren (auch Properties genannt)
 * * Werte können beliebige Datentypen haben
 * 
 * Alle Variablen, die keinem primitiven Datentypen angehören, sind in JS Objekte oder eine Ableitung davon.
 * Dies gilt sowohl für manuell angelegte Schlüssel-/Wertpaaren, als auch mit `new` erzeugte Datenstrukturen.
 * Auch Arrays sind eigentlich Objekte bestehende aus numerischen Schlüsseln (dem Array-Index) und deren Werten.
 * Dies ist die Erklärung zum Hinweis zur Aufgabe "arrayVariable" weiter oben: 
 * Die Funktion `Array.isArray()` wird benötigt, da der Typ eines Arrays immer `object` ist
 * 
 * Aufgabe: Erstelle ein einfaches Objekt mit 5 Schlüssel-/Wertpaaren. 
 * Nutze die folgende Form um ein solches Objekt anzulegen:
 * 
 * ```js
 * { 
 *   propNameA: propValueA,  
 *   propNameB: propValueB,
 * }
 * ```
 * 
 * Nutze für für die Werte alle der folgenden Datentypen:
 * * string
 * * number
 * * boolean
 * * array
 * * object
 * Gib diese Objekt zurück.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Glossary/Objekt
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Objekt_Literale
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects
 */
function objectVariable() {
  // TODO: erstelle ein Objekt mit genau 5 Schlüssel-/Wertpaaren
  return {
    a: "10",
    b: 20,
    c: true,
    d: [1,2,3],
    e: { x: 1 }
  }
}

/**
 * Auch Objekte können asugewertet und bearbeitet werden.
 * 
 * Zugriff auf den Wert eines Schlüssels `Key`: 
 * * `object.Key` (Dot-Notation) oder 
 * * `object["Key"]`, wenn der Schlüssel Leerzeichen enthält
 * 
 * Hinzufügen eines Elements über dieselben Notationen durch Zuweisung: 
 * ```js
 * object = {}
 * object.a = 1
 * object["b wie bertha"] = 2
 * ```
 * object: { a: 1, "b wie bertha": 2 }
 * 
 * Funktionen für das Arbeiten mit Objekten:
 * * `Object.keys(object)`: Gibt ein Array aller Schlüssel in der Form von [Schlüssel, Schlüssel] zurück.
 * * `Object.values(object)`: Gibt ein Array aller Werte in der Form von [Wert, Wert] zurück.
 * * `Object.entries(object)`: Gibt ein geschachteltes Array in der Form von [[Schlüssel, Wert], [Schlüssel, Wert]] zurück.
 * 
 * Aufgabe: Die Funktion bekommt ein geschachteltes Objekt übergeben, d.h.
 * der Wert des Schlüssels "someChildObject" ist ebenfalls ein Objekt
 * Gib alle Schlüssel dieses Kind-Objekts zurück
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Glossary/Objekt
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Grammatik_und_Typen#Objekt_Literale
 * * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Objects
 */
function objectManipulation(someObject) {
  // TODO: Gib alle Schlüssel des Kind-Objekts "someChildObject" zurück
  return Object.keys(someObject.someChildObject)
}

/**
 * Einfache Objekte, wie das aus der Aufgabe "objectVariable",
 * können in eine standardisierte String-Darstellung überführt werden,
 * welche auch zur Datenübertragung genutzt wird: [JSON](https://www.json.org/json-de.html)
 * 
 * JSON besteht ebenfalls aus (geschachtelten) Schlüssel-/Wertpaaren.
 * 
 * Zur Konvertierung gibt es Hilffunktionen:
 * 
 * * `JSON.parse(sring)`, um aus einem String ein Javascript Objekt zu machen
 * * `JSON.stringify(object)`, um aus einem Objekt einen JSON-String zu machen
 * 
 * Aufgabe: Die Funktion bekommt einen JSON-String als Parameter.
 * Konvertiere diesen String in ein Objekt.
 * Füge dem Objekt ein neues Shchlüssel-/Wertpaar hinzu: `x: 5`
 * Gibt das Objekt als JSON-String zurück
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/JSON
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/JSON
 */
function json(someJSONString) {
  // TODO: Konvertiere den String in ein Objekt
  const a = JSON.parse(someJSONString)
  // TODO: Füge das Schlüssel-/Wertpaar hinzu
  a.x = 5
  // TODO: Gib das Objekt als JSON-String zurück
  return JSON.stringify(a)
}

/**
 * Wir haben in diesen Übungen schon viele Funktionen vervollständigt und auch aufgerufen.
 * 
 * Kurze Wiederholung aus der ersten Aufgabe:
 * 
 * Definition von Funktionen:
 * * Funktionen werden mit dem Schlüsselwort `function` definiert
 * * Funktionen haben (bisher) immer einen Namen
 * * Funktionen haben keine oder beliebig viele Parameter
 * * Funktionen bestehen innerhalb von geschweiften Klammern aus normalem Javascript
 * * Funktionen können einen Wert zurückgeben indem das Schlüsselwort `return` vorangestellt wird
 * 
 * Aufrufe/Nutzen von Funktionen
 * * Funktionen werden mit ihrem Namen gefolgt von runden Klammern aufgerufen
 * * In den runden Klammern können durch Komma getrennt die Werte für Parameter angegeben werden
 * 
 * Wie wir z.B. bei Funktionen wie `text.split(...)`, `Object.keys(...)` & `JSON.parse(...)` gesehen haben,
 * können Funktionen auch Objekten zugeordnet sein und werden dann mit Dot-Notation aufgerufen.
 * 
 * Aufgabe: Rufe die Funktion `objectManipulation` von weiter oben, 
 * welche aus dem Kind-Object `someChildObject` ein Array der Objekt-Schlüssel zurückgibt,
 * mit der Variablen `testObject` auf.
 * Gib das Ergenis zurück.
 * 
 * Hinweis: würde die Funktion `objectManipulation` nicht nur lesend,
 * sondern auch ändernd auf das übergebene Objekt zugreifen (z.B. `someObject.someChildObject = "neuer Wetrt"`),
 * würde diese Änderung auch außerhalb der Funktion, d.h in unserer Tesfunktion `functionCall` sichtbar.
 * Der Grund ist, dass bei Objekten im Vergleich zu den primitiven Datentypen nicht nur der Wert (als Kopie),
 * sondern die Referenz auf das existierende Objekt übergeben wird. Somit weiße bei Funktionen auf dasselbe Objekt
 * und schriebende Manipulationen beeinflussen beide.
 * Da dies sehr undruchschaubar werden kann, sollte auf Änderungen von Objekten in einer Funktion, 
 * wenn möglich, verzichtet werden.
 * Besser ist dann z.B. der Einsatz von Array-Methoden, die immer ein neues Objekt erzeugen oder
 * `Object.assign({}, obj)`, um eine Kopie eines Objektes anzulegen.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen
 */
function functionCall() {
  const testObject = {
    someChildObject: {
      name: "Max",
      surname: "Mustermann",
      secret: "maybe not everyone should see this" 
    }
  }

  return objectManipulation(testObject)
}

/**
 * Der Aufruf einer Funktion kann, wenn die Funktion einen Rückgabewert liefert, einen Wert
 * erzeugen, der einer Variablen zugewiesen oder wiederrum zurückgegeben wird. Die möglichen Datentypen
 * haben wir bereits kennengelernt.
 * 
 * In JS gibt es jedoch noch eine Besonderheit im Vergleich zu anderen Programmiersprachen:
 * Funktionen können auch Variablen zugewiesen werden und wie Objekte anderen Funktionen übergeben werden.
 * 
 * Die Syntax dafür sieht so aus: `let addFunction = function(x, y) { return x + y; }`
 * 
 * Beispiel:
 * ```js
 * let addFunction = function(x, y) { return x + y; }
 * let multiplyFunction = function(x, y) { return x * y; }
 * let callWith50 = function(x, functionToCall) { return functionToCall(x, 50) }
 * callWith50(10, addFunction) // gibt 60 zurück
 * callWith50(10, multiplyFunction) // gibt 500 zurück
 * ```
 * 
 * Dieses Verhalten erlaubt es Funktionen zu kombinieren und flexibler einzusetzen.
 * Außerdem kann der Aufrufer einer Funktion mit Funktionsparameter teilweise beeinflussen, was die Funktion tut.
 * 
 * Aufgabe: Schreibe eine Funktion als Funktionsausdruck, also wie oben gezeigt.
 * Die Funktion soll eine mathematische Operation auf 2 Zahl ausführen, diese jedoch zuvor runden.
 * Die Operation soll jedoch, neben den Zahlen, beliebig vom Aufrufer definierbar sein.
 * Gib die definierte Funktion zurück.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen
 */
function functionExpression() {
  return function(x, y, fn) { return fn(Math.round(x), Math.round(y)) }
}

/** 
 * Ein weiteres Anwendungsgebiet von Funktionsparameter sind asynchrone Callbacks.
 * Diese werden genutzt, um eine vom Aufrufer bestimmte Aktion mit einem Ergebnis auszuführen.
 * Bei den bislang betrachteten Funktionen ist das wenig sinnvoll, wir haben ja den Rückgabewert.
 * Mit diesem kann der Aufrufe sowieso machen was er will.
 * 
 * Unabdingbar sind Callbacks jedoch, wenn die Operation, die das Ergebnis berechnet/abruft
 * eine unbekannte, lange Laufzeit hat. Beispiele sind Netzwerk oder Dateiabrufe.
 * (Detail: Da JS single-threaded ist, kann nicht einfach in einem anderen thread weitergearbeitet und 
 * auf das Ergebnis "gewartet" werden, wie das in anderen Programmiersprachen üblich ist)
 * 
 * In einem solchen Fall gibt die Funktion nicht das Ergebnis zurück,
 * sondern der Aufrufer definiert durch ein Callback, 
 * was nach dem Eintreffen des Ergebnisses damit getan werden soll.
 * 
 * Das einfachste Beispiel eines Callbacks ist die Funktion `setTimeout`,
 * die eine Zeit in ms und eine Funktion erwartet und 
 * die angegebene Funktion nach Ablauf der Zeit aufruft:
 * 
 * ```js
 * setTimeout(function() { console.log("time is over") }, 500)
 * ```
 * 
 * Aufgabe: Die Funktion bekommt eine Funktion `functionExpectingACallback` als Parameter übergeben.
 * Diese Funktion erwartet ebenfalls eine Funktion als Parameter.
 * Schreibe diese Funktion und rufe die Funktion `functionExpectingACallback` damit auf.
 * Die zu schreibende Funktion soll einen Array- und einen Funktions-Parameter erwarten.
 * Aus dem Array soll das 2. Element and die übergebene Funktion weitergegeben werden.
 * 
 * Hinweis: selbst wenn in der Callback-Funktion, die zu schreiben ist, ein Rückgabewert geliefert wird,
 * kann der Aufrufer der Funktion `functionExpectingACallback` dieses Ergebnis nicht als Rückgabewert erhalten.
 * Die Funktion wir ja im Kontext der Funktion `functionExpectingACallback` aufgerufen, welche bereits vorher
 * komplett durchlaufen wurde, um die Ausführung nicht zu blockieren.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen
 */
function callback(functionExpectingACallback) {
  // TODO: schreibe eine Funktion mit 2 Parameter: 1. Array, 2. Funkion
  // Rufe die übergebene Funktion mit dem 2. Array-Element als Übergabeparameter auf
  // Übergib die so definierte Funktion als Übergabeparameter an `functionExpectingACallback`
  functionExpectingACallback(function(array, fn) { fn(array[1])})
}

/**
 * Da der Einsatz von Funktionsparametern in JS sehr verbreitet ist,
 * wurde 2015 die sogenannte Pfeil- oder Lambdafunktion eingeführt.
 * 
 * Diese 3. Art Funktionen zu definieren ist kürzer und soll aufgrund der hohen
 * Verbreitung auch in folgender Aufgabe genutzt werden:
 * 
 * ```js
 * let fn = (x,y) => x + y;
 * let fn = (x,y) => { 
 *  let sum = x + y; 
 *  return sum;
 * }
 * ```
 * 
 * Folgendes unterscheidet Lambdas von Funktionsausdrücken:
 * * kein Schlüsselwort `function`
 * * Pfeil `=>` nach Parameterliste
 * * keine geschweiften Klammern und `return` nötig, wenn nur eine Zeile, die ein Ergebnis liefert
 * * bei mehreren Ausdrücken: geschweifte Klammern und `return` 
 * 
 * Detail: Lambda-Funktionen haben den Vorteil,
 * dass das Schlüsselwort `this` immer auf den umgebenden Kontext verweißt.
 * Bei den vorigen Funktionsausdrücken ist das nicht der Fall und die Referenz auf den Aufrufer geht verloren.
 * Weiter Infos auf [MDN](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen#Lexikalisches_this)
 * 
 * Aufgabe: Definiere dieselbe Funktion wie in Aufgabe `functionExpression` 
 * als einzeiliges Lambda (ohne geschweifte Klammern und return)
 * und gib sie zurück.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen
 */
function lambda() {
  return (x, y, fn) => fn(Math.round(x), Math.round(y))
}

/**
 * In der Aufgabe `functionCall` weiter oben haben wir eine Liste der Schlüssel
 * eines Kindobjektes zurückgegeben.
 * 
 * Das Ergebnis (ein Array) könnte mit den, in vielen Programmiersprachen typischen,
 * Schleifenstrukturen (for, while, do..while) verarbeitet werden.
 * In JS bieten sich jedoch einige eingebaute Array-Funktionen an,
 * um dasselbe Ergebnis auf einfachere Weise zu erhalten.
 * 
 * Wollen wir z.B. aus dem Objekt oben nur Schlüssel erhalten, die mit Namen zu tun haben,
 * könnten wir mit einer for-Schleife folgendes schreiben:
 * 
 * ```js
 * let result;
 * for (var counter = 0; counter < 3; counter++) {
 *   const key = arrayOfKeys[counter]
 *   if (key.includes("name")) {
 *     result.push(key)
 *   }
 * }
 * console.log(result) // gibt ['name', 'surname'] aus
 * ```
 * 
 * mit einer vereinfachten for-Schleife in JS zumindest:
 * ```js
 * let result;
 * for (var key of arrayOfKeys) {
 *   if (key.includes("name")) {
 *     result.push(key)
 *   }
 * }
 * console.log(result) // gibt ['name', 'surname'] aus
 * ```
 * 
 * Noch einfacher und insbesondere aussagekräftiger geht es mit der Array-Funktion `filter`,
 * die per Dot-Notation auf einer Array-Variablen aufgerufen werden kann.
 * Die wird mit einer Funktione aufgerufen, die als Filter dient und auf jedem Element angewandt wird.
 * Nur Elementen, für die diese Funktion `true` zurückgibt, sind im Ergebnis (einem Array) enthalten.
 * 
 * Aufgabe: Filtere die Schlüsselliste die die Funktion `functionCall` zurückgibt,
 * sodass nur noch Schlüssel, die das Wort "name" enthalten in einem neuen Array stehen.
 * Gib dieses Array zurück.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
function filter(){
  // TODO: Rufe die Funktion `functionCall` auf und speichere das Ergebnis in einer Variablen
  const arrayOfKeys = functionCall()
  // TODO: Filtere diese Array-Variable mit der Funktion `filter` und gib das Ergebnis zurück
  return arrayOfKeys.filter(k => k.includes("name"))
}

/**
 * Der große Vorteil an diesem Vorgehen ist, 
 * dass es sich einfach mit weiteren Array-Funktionen, 
 * die ähnlich funktionieren, kombinieren lässt, z.B.
 * 
 * * map: transformiert jedes Element im Array mit der angegebenen Funktion
 * * reduce: kombiniert alle Elemente eines Arrays zu einem einzigen Ergebnis
 * 
 * Für eine anschauliche Übersicht von nützlichen Funktionen siehe [./resources/js-array-methods-cheatsheet.png](./resources/js-array-methods-cheatsheet.png) Quelle: https://twitter.com/sulco/status/1281545450273865730/photo/1
 * 
 * Aufgabe: Die Funktion erhält ein Objekt ähnlich dem aus Aufgabe `functionCall`.
 * Filtere die Schlüssel des Kind-Objekts `details`, ähnlich zur vorigen Aufgabe, 
 * sodass nur noch Schlüssel mit dem Wort "secret" enthalten sind.
 * Transformiere dieses Ergebnis, sodass du die Werte zu diesen Schlüsseln erhältst.
 * Gib diese Werte als Array zurück.
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
function transform(testObject) {
  // TODO: Gib alle Werte der "secret"-Schlüssel aus dem Kind-Objekt "details" zurück
  return Object.keys(testObject.details).filter(k => k.includes("secret")).map(k => testObject.details[k])
}

/**
 * Bonus: in der vorigen Aufgabe ging beim Ergebnis die Zuordnung zu den Schlüsseln verloren.
 * 
 * Aufgabe: Gib ein geschachteltes Array mit Schlüsel-/Wertpaaren als [schlüssel, wert] zurück.
 * Der Rest entspricht der vorigen Aufgabe
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
function transformImproved(testObject) {
  // TODO: gib die Schlüssel zu den Werten der vorigen Aufgabe mit aus [[schlüssel, wert], [schlüssel, wert]]
  return Object.entries(testObject.details).filter(([k]) => k.includes("secret"))
}

/**
 * Bonus 2: in der vorigen Aufgabe war das Ergebnis ein geschachteltes Array.
 * 
 * Aufgabe: Gib ein Objekt mit Schlüsel-/Wertpaaren zurück.
 * Der Rest entspricht der vorigen Aufgabe
 * 
 * Referenz:
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array
 * * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Object
 */
function transformImprovedFurther(testObject) {
  // TODO: gib das gleiche Ergebnis wie in der vorigen Aufgabe als Objekt zurück
  const filtered = Object.entries(testObject.details).filter(([k]) => k.includes("secret"));
  return Object.fromEntries(filtered)
  // or
  // return Object.assign({}, ...filtered.map(([key, val]) => ({[key]: val})))
}

// FIXME: spread?

module.exports = {
  returnValue,
  undefinedVariable,
  nullVariable,
  numberVariable,
  numberUsageSimple,
  numberUsageMath,
  stringVariable,
  numberToString,
  stringManipulation,
  stringToArray,
  arrayVariable,
  arrayIncludes,
  condition,
  booleanExpressions,
  equality,
  objectVariable,
  objectManipulation,
  json,
  functionCall,
  functionExpression,
  callback,
  lambda,
  filter,
  transform,
  transformImproved,
  transformImprovedFurther
}