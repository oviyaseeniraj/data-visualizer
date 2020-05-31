module.exports = (sequelize, Sequelize) => {
  const Covid = sequelize.define('covid', {
    record_dt: {
      type: Sequelize.DATE,
      primaryKey: true
    },
    covid_cases: {
      type: Sequelize.INTEGER
    },
    new_covid_cases: {
      type: Sequelize.INTEGER
    },
    covid_growth_rate: {
      type: Sequelize.DECIMAL
    },
    num_flight_change_percent: {
      type: Sequelize.DECIMAL
    },
    us_gas_price: {
      type: Sequelize.DECIMAL
    },
    deaths: {
      type: Sequelize.INTEGER
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'covid'
    });
  return Covid;
}