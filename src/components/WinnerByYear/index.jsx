import { useEffect, useState } from "react";
import * as fetchMovies from "../../store/fetchActions/movies";
import { Row } from "react-bootstrap";
import { Table, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

export const WinnerByYear = () => {
  const dispatch = useDispatch();
  const { winnerByYear } = useSelector((state) => state?.movies);
  const [dataForm, setDataForm] = useState([]);

  const handleChange = (value, key) => {
    setDataForm({ ...dataForm, [key]: value });
  };

  const sendFilter = () => {
    dispatch(fetchMovies.getWinnerByYear(dataForm?.winners));
  };

  const columnsWinnerByYear = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
  ];

  useEffect(() => {
    dispatch(fetchMovies.getTopStudios());
  }, [dispatch]);

  return (
    <Row className="table-area">
      <h6>List movie winners by year</h6>
      <Row style={{ display: "flex", marginBottom: "1rem" }}>
        <Input
          id="winners"
          placeholder="Search by year"
          style={{ marginRight: "1rem" }}
          type="number"
          value={dataForm?.winners}
          onChange={(e) => {
            handleChange(e.target.value, "winners");
          }}
          maxLength={100}
        />
        <Button icon={<SearchOutlined />} onClick={sendFilter} size="large" />
      </Row>
      <Table
        dataSource={winnerByYear}
        columns={columnsWinnerByYear}
        pagination={false}
      />
    </Row>
  );
};

export default WinnerByYear;
