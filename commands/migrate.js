const pluralize = require('pluralize');
const to = require('to-case');
const mkdirp = require('mkdirp');
const timestamp = require('../utils/timestamp')();
const writeFile = require('../utils/write-file');


exports.command = 'migrate <prefix>'
exports.desc = 'Generates a migration file'
exports.builder = {
  table: {
    alias: 't',
    describe: 'The name of the table used in the migration',
    demand: false
  }
}
exports.handler = function (argv) {
  const { prefix, name, surname } = argv
  const migration = `
exports.up = function(knex, Promise) {

};

exports.down = function(knex, Promise) {

};
`;
  const sluggedname = to.slug(prefix);

  const path = `./migrations/${timestamp}-${sluggedname}.js`;
  mkdirp.sync(`${process.cwd()}/migrations/`);
  writeFile(path, migration);
  console.log(`created: ${path}`);

}
