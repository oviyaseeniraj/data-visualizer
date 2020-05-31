import React from "react";
import { Col } from "antd";
import ChartRenderer from "../components/ChartRenderer";
import Dashboard from "../components/Dashboard";
import DashboardItem from "../components/DashboardItem";
const DashboardItems = [
  {
    id: 0,
    name: "Total Cases",
    vizState: {
      query: {
        measures: ["Covid.totalCases"],
        timeDimensions: [
          {
            dimension: "Covid.recordDt",
            granularity: "day"
          }
        ],
        filters: []
      },
      chartType: "line"
    }
  },
  {
    id: 1,
    name: "New Cases",
    vizState: {
      query: {
        measures: ["Covid.newCases"],
        timeDimensions: [
          {
            dimension: "Covid.recordDt",
            granularity: "day"
          }
        ],
        filters: []
      },
      chartType: "line"
    }
  },
  {
    id: 2,
    name: "Growth Rate",
    vizState: {
      query: {
        measures: ["Covid.growthRate"],
        timeDimensions: [
          {
            dimension: "Covid.recordDt",
            granularity: "day"
          }
        ],
        filters: []
      },
      chartType: "line"
    }
  },
  {
    id: 3,
    name: "Flight Bookings Percent",
    vizState: {
      query: {
        measures: ["Covid.flightChangePercent"],
        timeDimensions: [
          {
            dimension: "Covid.recordDt",
            granularity: "day"
          }
        ],
        filters: []
      },
      chartType: "line"
    }
  },
  {
    id: 4,
    name: "Gas Price",
    vizState: {
      query: {
        measures: ["Covid.gasPrice"],
        timeDimensions: [
          {
            dimension: "Covid.recordDt",
            granularity: "day"
          }
        ],
        filters: []
      },
      chartType: "line"
    }
  },
  {
    id: 5,
    name: "Deaths",
    vizState: {
      query: {
        measures: ["Covid.deaths"],
        timeDimensions: [
          {
            dimension: "Covid.recordDt",
            granularity: "day"
          }
        ],
        filters: []
      },
      chartType: "line"
    }
  }
];

const DashboardPage = () => {
  const dashboardItem = item => (
    <Col
      span={24}
      lg={12}
      key={item.id}
      style={{
        marginBottom: "24px"
      }}
    >
      <DashboardItem title={item.name}>
        <ChartRenderer vizState={item.vizState} />
      </DashboardItem>
    </Col>
  );

  const Empty = () => (
    <div
      style={{
        textAlign: "center",
        padding: 12
      }}
    >
      <h2>
        There are no charts on this dashboard. Use Playground Build to add one.
      </h2>
    </div>
  );

  return DashboardItems.length ? (
    <Dashboard dashboardItems={DashboardItems}>
      {DashboardItems.map(dashboardItem)}
    </Dashboard>
  ) : (
    <Empty />
  );
};

export default DashboardPage;
