import { useEffect } from "react";
import * as fetchMovies from "../../store/fetchActions/movies";
import { Row } from "react-bootstrap";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";

export const ProducersInterval = () => {
  const dispatch = useDispatch();
  const { producersIntervalMin, producersIntervalMax } = useSelector(
    (state) => state?.movies
  );

  const columnsProducersInterval = [
    {
      title: "Producer",
      dataIndex: "producer",
      key: "producer",
    },
    {
      title: "Interval",
      dataIndex: "interval",
      key: "interval",
    },
    {
      title: "Previous Year",
      dataIndex: "previousWin",
      key: "previousWin",
    },
    {
      title: "Following Year",
      dataIndex: "followingWin",
      key: "followingWin",
    },
  ];

  useEffect(() => {
    dispatch(fetchMovies.getProducersInterval());
  }, [dispatch]);

  return (
    <Row className="table-area">
      <h6>Producers with longest and shortest interval between wins</h6>
      <p>Maximum</p>
      <Table
        dataSource={producersIntervalMax}
        columns={columnsProducersInterval}
        pagination={false}
      />
      <p>Minimum</p>
      <Table
        dataSource={producersIntervalMin}
        columns={columnsProducersInterval}
        pagination={false}
      />
    </Row>
  );
};

export default ProducersInterval;
