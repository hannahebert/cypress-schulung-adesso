# Prompt Engineering Methoden

## 1. Prompt Engineering – Gestaltung und Optimierung von Prompts
- **Erklärung:** Prompts sind gezielte Eingaben, die so gestaltet werden, dass KI-Modelle präzise und relevante Antworten geben. Ein gut formuliertes Prompt hilft dem Modell, die Aufgabe besser zu verstehen.
- **Beispiel:** Statt einfach „Schreibe einen Test für `add(a, b)`“ zu fragen, wäre ein klarer Prompt: „Erstelle einen Unit-Test mit Jest für die Funktion `add(a, b)`, die die Summe von `a` und `b` zurückgibt.“

---

## 2. Prompt-Komponenten: Instruktionen
- **Erklärung:** Eine präzise Aufgabenbeschreibung führt zu besseren Ergebnissen. Die Anweisung spezifiziert genau, was das Modell tun soll.
- **Beispiel:** „Erstelle einen Unit-Test mit Jest für die Funktion `add(a, b)`, die die Summe zurückgibt.“

---

## 3. Prompt-Komponente: Kontext
- **Erklärung:** Zusätzliche Hintergrundinformationen helfen dem Modell, die Anfrage besser zu verstehen.
- **Beispiel:** „Die Funktion `add(a, b)` ist eine einfache JavaScript-Funktion, die zwei Zahlen addiert. Es ist wichtig, typische Werte, Grenzwerte und falsche Eingaben zu testen.“

---

## 4. Zielgruppe
- **Erklärung:** Die Definition der Zielgruppe passt Ton und Stil der Antwort an. Das Modell formuliert die Antwort entsprechend den Erwartungen der Zielgruppe.
- **Beispiel:** „Die Tests werden von strengen Prüfern bewertet. Sie erwarten klar kommentierten Code, bei dem die Absicht jedes Testfalls ersichtlich ist.“

---

## 5. Reflexion & Selbstvalidierung
- **Erklärung:** Eine Selbstüberprüfung veranlasst das Modell, seine Antwort zu validieren und hilft, die Qualität zu verbessern.
- **Beispiel:** „Erkläre, was du bei jedem Schritt machst. Überlege, welche Verbesserungsvorschläge du als Software-Architekt hättest.“

---

## 6. Schrittweise Anleitungen
- **Erklärung:** Komplexe Aufgaben werden in mehrere Schritte aufgeteilt. Das Modell wird so durch die Aufgabe geführt.
- **Beispiel:** Statt „Schreibe eine Datenanalyse“ könnte man aufteilen in: „Erstelle eine Liste aller Datenpunkte“, „Führe eine Analyse durch“, „Fasse die Ergebnisse zusammen.“

---

## 7. Negative Anweisungen
- **Erklärung:** Dem Modell wird gesagt, was es vermeiden soll, um die Antwort einzuschränken.
- **Beispiel:** „Schreibe einen Artikel über JavaScript, vermeide jedoch Fachbegriffe und halte die Sprache einfach.“

---

## 8. Verwendung von Beispielen (Few-Shot Learning)
- **Erklärung:** Beispiele zeigen dem Modell die gewünschte Antwortstruktur, was die Relevanz erhöht.
- **Beispiel:** „Hier sind zwei Beispiele für Tests für die Funktion `add(a, b)`. Verwende diese Struktur für die nächsten Tests.“

---

## 9. „Als ob“-Technik (Role-Playing Prompts)
- **Erklärung:** Das Modell nimmt eine bestimmte Rolle ein, z. B. einen „erfahrenen Java-Entwickler“, und gibt Antworten aus dieser Perspektive.
- **Beispiel:** „Du bist ein erfahrener Entwickler, der Junior-Entwicklern das Schreiben von Unit-Tests beibringt.“

---

## 10. Aufzählung von spezifischen Bedingungen
- **Erklärung:** Spezifische Bedingungen oder Randbedingungen erhöhen die Genauigkeit der Antwort.
- **Beispiel:** „Erstelle eine Anleitung für Node.js, die auf MacOS und Windows funktioniert.“

---

## 11. Zusammenfassungs-Anfragen
- **Erklärung:** Eine kurze Antwort kann durch die Anweisung „Fasse zusammen“ angefordert werden.
- **Beispiel:** „Fasse die wichtigsten Punkte dieses Codes in ein bis zwei Sätzen zusammen.“

---

## 12. Verwendung von Fehlerfall-Beispielen
- **Erklärung:** Fehlerfälle als Eingabe verbessern die Präzision der Tests.
- **Beispiel:** „Erstelle Tests für `subtract(a, b)` und berücksichtige typische Fehlerfälle, z. B. das Übergeben von Zeichenketten statt Zahlen.“