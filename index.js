const fs = require("fs");
const opt = {
    database: 'BigQuery'
}
const { Parser } = require('node-sql-parser/build/bigquery');
const parser = new Parser()
const query = `
WITH A AS (
    SELECT 1 as n
)
SELECT n
FROM A
WHERE n > 0
`;
const ast = parser.astify(query, opt);

fs.writeFileSync("ast.json", JSON.stringify(ast));