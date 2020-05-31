cube(`Covid`, {
  sql: `SELECT *, date_trunc('year', record_dt) as record_year, date_trunc('month', record_dt) as record_year_month FROM public.covid`,
  
  joins: {
    
  },
  
  measures: {
    totalCases: {
      sql: 'covid_cases',
      type: `sum`,
      drillMembers: [year, month, recordDt]
    },
    newCases: {
      sql: 'new_covid_cases',
      type: `sum`,
      drillMembers: [year, month, recordDt]
    },
    growthRate: {
      sql: 'covid_growth_rate',
      type: `avg`,
      format: `percent`,
      drillMembers: [year, month, recordDt]
    },
    flightChangePercent: {
      sql: 'num_flight_change_percent',
      type: `avg`,
      format: `percent`,
      drillMembers: [year, month, recordDt],
    },
    gasPrice: {
      sql: 'us_gas_price',
      type: `avg`,
      format: `currency`,
      drillMembers: [year, month, recordDt]
    },
    deaths: {
      sql: 'deaths',
      type: `sum`,
      drillMembers: [year, month, recordDt]
    }
  },
  
  dimensions: {
    recordDt: {
      sql: `record_dt`,
      type: `time`
    },
    year: {
      sql: `record_year`,
      type: `time`
    },
    month: {
      sql: `record_year_month`,
      type: `time`
    }
  }
});
