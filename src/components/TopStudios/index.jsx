import { useEffect } from "react";
import * as fetchMovies from "../../store/fetchActions/movies";
import { Row } from "react-bootstrap";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";

export const TopStudios = () => {
  const dispatch = useDispatch();
  const { topStudiosList } = useSelector((state) => state?.movies);

  const columnsTopStudios = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Win Count",
      dataIndex: "winCount",
      key: "winCount",
    },
  ];

  useEffect(() => {
    dispatch(fetchMovies.getTopStudios());
  }, [dispatch]);

  return (
    <Row className="table-area">
      <h6>Top 3 studios with winners</h6>
      <Table
        dataSource={topStudiosList}
        columns={columnsTopStudios}
        pagination={false}
      />
    </Row>
  );
};

export default TopStudios;
