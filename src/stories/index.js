const req = require.context('./', true, /.stories.(js|ts)$/);
req.keys().forEach(filename => req(filename));
