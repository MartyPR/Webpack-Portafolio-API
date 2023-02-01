const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`)

//  "build": " node ./scripts/create-env.js && webpack --mode production --config webpack.config.js",