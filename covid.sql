BEGIN;

CREATE TABLE IF NOT EXISTS public.covid (
	record_dt date NOT NULL,
	covid_cases integer NOT NULL,
	new_covid_cases integer NOT NULL,
	covid_growth_rate numeric NOT NULL,
	num_flight_change_percent numeric,
	us_gas_price numeric,
	deaths integer DEFAULT 0 NOT NULL
);

COMMIT;
