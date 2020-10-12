const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.sources': '.',
    // Entry point of your code
    'sonar.inclusions': 'src/**',
    'sonar.login': 'admin',
    'sonar.password': 'admin',

  },
}, () => {});
