const req = require.context('./', true, /.stories.js$/);
req.keys().forEach(filename => req(filename));
