# JS Basics Übungen

Dieses Verzeichnis enthält Übungen für die Grundlagen in Javascript.

## Voraussetzung

* VS Code installiert
* (optional, aber empfohlen) VS Code Erweiterungen installiert
  * [JSDoc Markdown highlight](https://marketplace.visualstudio.com/items?itemName=bierner.jsdoc-markdown-highlighting)
  * [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

## Aufbau

```
├── exercises.js          => Die Übungen liegen in dieser Datei
├── exercises.test.js     => Diese Datei enthält Testfälle für die Übungen
├── package.json          => Diese Datei enthält Informationen zu diesem Projekt und den benötigten Abhängigkeiten
└── readme.md             => Diese Datei
```

Um die Aufgaben bearbeiten zu können, müsen zunächst einige Hilfspakete als Abhängigkeiten installiert werden.

Die benötigten Pakete sind in der Datei [package.json](package.json) unter `dependencies`/`devDependencies` zu finden, z.B.:

* [Jest](https://jestjs.io/en/) das Testframework, mit welchem die Tests für die Aufgaben geschrieben und ausgeführt werden. Diese Tests sind vordefiniert und in der Datei [exercises.test.js](exercises.test.js) zu finden.
* [ESLint](https://eslint.org/), ein sogenannter Linter, welcher syntaktische Fehler im Code findet und hervorhebt

Diese Abhängigkeiten werden mit folgendem Befehl installiert:

`npm install` oder kürzer `npm i`

Um diesen Befehl im aktuellen Verzeichnis ausführen zu können, kann das integrierte Terminal in VS Code genutzt werden:
1. `STRG/CMD + ⇧ + P` öffnet die Kommando-Palette, hier können Befehl in VS Code gesucht werden
2. Suche nach "Integr..." zeigt das Integrierte Terminal als Ergebnis an
3. `ENTER` um diese zu öffnen

In diesem Terminal wird der obige Befehl eingegeben und danach auch die Testausführung stattfinden.

## Vorgehen

1. Testausführung über das integrierte Terminal starten

    ```
    npm test
    ```

    Die Tests werden initial und bei jeder Änderung in der Datei [exercises.js](exercises.js) ausgeführt und es wird ein Gesamtüberblick über die Erfolgsquote ausgegeben.

    TODO: syntax der Fehlermeldung beschreiben

2. Aufgabe bearbeiten

    Editieren der Datei [exercises.js](exercises.js).
    Jede Funktion stellt eine Aufgabe dar. Innerhalb der geschweiften Klammern wird die Aufgabe durch das Schrieben von Javascript-Anweisungen gelöst. Über der Funnktionen befindet sich die Aufgabenbeschreibung in Form einer [JSDoc](https://en.wikipedia.org/wiki/JSDoc)-Funktionsdokumentation

3. Testergebnisse prüfen

    Ist das Ergebnis korrekt wir der Testfall grün und die nächste Aufgabe kann bearbeitet werden

4. Zurück zu 2.
