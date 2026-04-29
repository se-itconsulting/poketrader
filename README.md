# PokeTrader

Mobile-first Web-App-Prototyp für ein Pokémon-Portfolio mit Foto-Scan, Set-/Kartendaten, Preisquellen, Grading-Werten und Chatbot.

## Enthalten

- Dashboard für Portfolio-Wert, Sammlung, Märkte und Grading-Matrix
- Suchseite für Artikel, Karten, Sets und Sealed-Produkte
- Buy-Radar für kaufbare Listings mit Deal-Score, Marktpreis und Watchlist-Aktion
- Eigenes Portfolio mit lokalem Bild-Upload, Positionen, Menge, Zustand und Gesamtwert
- Set-Katalog mit English/Japanese Filter, Set-Auswahl, Kartenliste und Sealed-Produkten
- Kamera-/Foto-Upload über `accept="image/*"` und `capture="environment"`
- UI-Platzhalter für Pokémon TCG API, eBay Browse API, Cardmarket und Sealed-Produkte
- Chatbot-Oberfläche für spätere OpenAI-Anbindung

## Geplante Live-Anbindungen

- Karten und Sets: Pokémon TCG API (`https://docs.pokemontcg.io/`) oder ein spezialisierter Pricing-Anbieter
- English ist der primäre Katalog; Japanese Sets/Karten laufen als eigener Sprachfilter mit separaten Produktdaten
- eBay: Browse API (`https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search`) für aktive Listings und Sold-Comps, wenn verfügbar
- Cardmarket: API 2.0 (`https://api.cardmarket.com/ws/documentation`) mit eingeschränktem Zugang; Cardmarket nimmt laut Help-Center aktuell keine neuen API-Anträge allgemein an
- Vision: Kartenfoto an ein Backend senden, dort OCR/Vision-Erkennung und Matching ausführen
- Chatbot: serverseitig mit eigenem Portfolio-Kontext und Preis-Snapshots

## Lokal öffnen

Die App ist aktuell statisch und kann direkt im Browser geöffnet werden:

```txt
/Users/sidneyeisenhut/dev/github/poketrader/index.html
```
