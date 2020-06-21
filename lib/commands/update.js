

var core = require('../core');


const cmd = {
    command: 'update',
    aliases: ['update'],
    desc:    'Update companies and tags for problems',
    builder: function(yargs) {
      return yargs
        .example(chalk.yellow('leetcode update'), 'Update companies and tags for all problems')
    }
  };

  cmd.handler = function() {
    session.argv = argv;
    core.updateData();
  };

module.exports = cmd;