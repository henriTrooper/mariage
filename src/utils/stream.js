const writeStream = require('fs').createWriteStream('logs.txt');

// Ecriture des logs dans un fichier externe
module.exports.writeLog = function writeLog(log, err) {
  if (!err) {
    /* router.logger.info('OK', log); */
    const streamWriteOK = `>>> Date : ${new Date().toLocaleString()}\n
     Informations: ${log}\n
     Probleme(s): Neant !\n`;
    writeStream.write(`${streamWriteOK}\n`);
  } else {
    /* router.logger.info('KO', log); */
    const streamWriteKO = `>>>>>>>>>> Date : ${new Date().toLocaleString()}\n
     Informations: ${log}\n
     Probleme(s): ${err}\n`;
    writeStream.write(`${streamWriteKO}\n`);
  }
};
