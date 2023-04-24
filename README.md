# Monkeys & Dungeons API
## Start Project
Follow the steps:
```bash
git clone https://github.com/Victor-Palha/monkeys-and-dungeons-api.git
cd monkeys-and-dungeons-api
npm install
npm run dev
```
## Routes
### Spells
*   Get all Spells: `http://localhost:5000/spells`
*   Query Spells: `http://localhost:5000/spells/query`
    *   **Query Params**
        *   **nome** -> Spell Name
        *   **classe** -> Spell Class
        *   **action** -> Action to conjure the spell (ex: `1 action`, `bonus action`, `reaction`)
        *   **concentration** -> If the spell require Concentration (ex: `true`, `false`)
        *   **ritual** -> If the spell can be cast as ritual (ex: `true`, `false`)
        *   **school** -> Spell School (ex: `Conjuration`, `Evocation`, etc...)
        *   **source** -> Book where spell are (ex: `XGE`, `PHB`, `TCE`, `AAG`, `AI`, `FTD`, `SCC`)
*   Unique Spell: `http://localhost:5000/spells/query/:id`
    *   **Query Params**
        * You need to informe the ID from the Spell!
