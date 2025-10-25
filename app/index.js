const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Application Kubernetes - Node.js</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #2980b9, #6dd5fa);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
          max-width: 600px;
        }
        h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2em;
          margin-top: 0;
        }
        .badge {
          margin-top: 20px;
          display: inline-block;
          background-color: #ffffff33;
          padding: 10px 20px;
          border-radius: 20px;
          font-weight: bold;
          color: #fff;
          border: 1px solid #fff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Application Node.js Déployée avec Kubernetes</h1>
        <p>Bienvenue ! Cette application est maintenant en ligne grâce à Docker & Kubernetes.</p>
        <div class="badge">Port : 8000 | Cluster Kubernetes actif</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Serveur disponible sur http://localhost:${port}`);
});
