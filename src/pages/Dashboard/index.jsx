import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Loading } from '../../components/Loading';
import { Container, Row } from "react-bootstrap";
import { NavBar } from '../../components/NavBar';
import { Table, Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import * as fetchMovies from '../../store/fetchActions/movies';
import './styles.scss';


export const Dashboard = () => {
  const dispatch = useDispatch();
  const { multipleWinnersList, topStudiosList, producersIntervalMin, producersIntervalMax, winnerByYear } = useSelector(state => state.movies);
  const [dataForm, setDataForm] = useState();

  useEffect(() => {
    dispatch(fetchMovies.getMultipleWinners());
    dispatch(fetchMovies.getTopStudios());
    dispatch(fetchMovies.getProducersInterval());
  }, []);

  const sendFilter = () => {
    dispatch(fetchMovies.getWinnerByYear(dataForm?.winners));
  };

  const handleChange = (value, key) => {
    setDataForm({ ...dataForm, [key]: value });
  };

  const columnsMultipleWinners = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Win Count',
      dataIndex: 'winnerCount',
      key: 'winnerCount',
    },
  ];

  const columnsTopStudios = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Win Count',
      dataIndex: 'winCount',
      key: 'winCount',
    },
  ];

  const columnsProducersInterval = [
    {
      title: 'Producer',
      dataIndex: 'producer',
      key: 'producer',
    },
    {
      title: 'Interval',
      dataIndex: 'interval',
      key: 'interval',
    },
    {
      title: 'Previous Year',
      dataIndex: 'previousWin',
      key: 'previousWin',
    },
    {
      title: 'Following Year',
      dataIndex: 'followingWin',
      key: 'followingWin',
    },
  ];

  const columnsWinnerByYear = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
  ];


  return (
    <>
      <NavBar />
      <Container className='grid'>
        <Row className='table-area'>
          <h6>List years with multiple winners</h6>
          <Table dataSource={multipleWinnersList} columns={columnsMultipleWinners} pagination={false} />
        </Row>

        <Row className='table-area'>
          <h6>Top 3 studios with winners</h6>
          <Table dataSource={topStudiosList} columns={columnsTopStudios} pagination={false} />
        </Row>

        <Row className='table-area'>
          <h6>Producers with longest and shortest interval between wins</h6>
          <p>Maximum</p>
          <Table dataSource={producersIntervalMax} columns={columnsProducersInterval} pagination={false} />
          <p>Minimum</p>
          <Table dataSource={producersIntervalMin} columns={columnsProducersInterval} pagination={false} />
        </Row>

        <Row className='table-area'>
          <h6>List movie winners by year</h6>
          <Row style={{ display: "flex", marginBottom: '1rem' }}>
            <Input
              id="winners"
              placeholder='Search by year'
              style={{ marginRight: '1rem' }}
              type='number'
              value={dataForm?.winners}
              onChange={e => {
                handleChange(e.target.value, 'winners');
              }}
              maxLength={100}
            />
            <Button
              icon={<SearchOutlined />}
              onClick={sendFilter}
              size="large"
            />
          </Row>
          <Table dataSource={winnerByYear} columns={columnsWinnerByYear} pagination={false} />
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
