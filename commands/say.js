exports.command = 'say <prefix>'
exports.desc = 'Prints: <prefix> name surname'
exports.builder = {
  name: {
    alias: 'n',
    describe: 'Pass the name',
    demand: true
  },
  surname: {
    alias: 's',
    describe: 'Pass the surname',
    demand: false
  }
}
exports.handler = function (argv) {
  const { prefix, name, surname } = argv
  const message = prefix + (name ? ' ' + name : '') + (surname ? ' ' + surname : '')
  console.log(message)
}
