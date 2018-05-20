module.exports = (mongoose, config) => {
  const database = mongoose.connection;
  mongoose.Promise = Promise;
  mongoose.connect(config.database, {
    promiseLibrary: global.Promise
  });
  database.on('error', error => console.log(`Connection to BudgetManager database  failed: ${error}`));
  database.on('connected', () => console.log('Connection to BudgetManager database'));
  database.on('disconnected', () => console.log('Disconnected to BudgetManager database'));

  process.on('SIGINT', () => {
    database.close(() => {
      console.log('Kanban V2 termited, connection closed');
      process.exit(0);
    });
  });
}
