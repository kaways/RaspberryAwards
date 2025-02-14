import { useEffect } from "react";
import * as fetchMovies from "../../store/fetchActions/movies";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "react-bootstrap";
import { Table } from "antd";

export const MultipleWinners = () => {
  const dispatch = useDispatch();
  const { multipleWinnersList } = useSelector((state) => state?.movies);

  const columnsMultipleWinners = [
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Win Count",
      dataIndex: "winnerCount",
      key: "winnerCount",
    },
  ];

  useEffect(() => {
    dispatch(fetchMovies.getMultipleWinners());
  }, [dispatch]);

  return (
    <>
      <Row className="table-area">
        <h6>List years with multiple winners</h6>
        <Table
          dataSource={multipleWinnersList}
          columns={columnsMultipleWinners}
          pagination={false}
        />
      </Row>
    </>
  );
};

export default MultipleWinners;
