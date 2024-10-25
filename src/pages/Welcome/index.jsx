import React from 'react';
// import { useSelector } from 'react-redux';
// import { Loading } from '../../components/Loading';
import { Container, Row } from "react-bootstrap";
import { NavBar } from '../../components/NavBar';
import { Table, Pagination } from 'antd';
import './styles.scss';


export const Welcome = () => {
  // const { status } = useSelector(state => state.loading)
  // if (status) return <Loading />;

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <NavBar />
      <Container className='grid'>
        <Row className='table-area'>
          <h6>List years with multiple winners</h6>
          <Table dataSource={dataSource} columns={columns} />
        </Row>

        <Row className='table-area'>
          <h6>Top 3 studios with winners</h6>
          <Table dataSource={dataSource} columns={columns} />
        </Row>

        <Row className='table-area'>
          <h6>Producers with longest and shortest interval between wins</h6>
          <Table dataSource={dataSource} columns={columns} />
        </Row>

        <Row className='table-area'>
          <h6>List movie winners by year</h6>
          <Table dataSource={dataSource} columns={columns} />
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
