const { Command } = require('commander');
const program = new Command();
const axios = require('axios');

program
  .name('simpleHttp')
  .version('0.0.1')

program
  .command('get')
  .argument('<string>', 'path to request')
  .action((string) => {
    axios.get(string).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  });

program.parse();
