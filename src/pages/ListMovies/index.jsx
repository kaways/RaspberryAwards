import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import { Table, Button, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getMovies } from '../../store/fetchActions/movies';
import * as fetchMovies from '../../store/fetchActions/movies';
import './styles.scss';

export const ListMovies = () => {
  const { Option } = Select;
  const list = useSelector(state => state?.movies?.list);
  const totalElements = useSelector(state => state?.movies?.totalElements);
  const [dataForm, setDataForm] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleChange = (value, key) => {
    setDataForm({ ...dataForm, [key]: value });
  };

  const sendFilter = () => {
    dispatch(fetchMovies.getMovies(0, totalElements, dataForm?.winner, dataForm?.year));
  };

  const onHandleChangeSelect = (value) => {
    setDataForm({ ...dataForm, 'winner': value });
    dispatch(fetchMovies.getMovies(0, totalElements, value, dataForm?.year));
  };

  const options = [
    { id: 0, name: 'No', label: 'No' },
    { id: 1, name: 'Yes', label: 'Yes' },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title:
        <Row style={{ display: "flex", flexDirection: 'column', marginBottom: '1rem' }}>
          Year
          <Row style={{ display: "flex" }}>
            <Input
              id="winners"
              placeholder='Filter by year'
              style={{ marginRight: '0.5rem' }}
              type='number'
              value={dataForm?.year}
              onChange={e => {
                handleChange(e.target.value, 'year');
              }}
              maxLength={4}
            />
            <Button
              icon={<SearchOutlined />}
              onClick={sendFilter}
              size="large"
            />
          </Row>
        </Row >,
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title:
        <Row style={{ display: "flex", flexDirection: 'column', marginBottom: '1rem' }}>
          Winner?
          <Select
            placeholder='Yes/No'
            value={dataForm?.winner}
            onSelect={onHandleChangeSelect}>
            <Option>Selecione</Option>
            {options &&
              options.map(data => {
                return (
                  <Option key={data.id} value={data.id}>
                    {data.label}
                  </Option>
                );
              })}
          </Select>
        </Row>,
      dataIndex: 'winner',
      key: 'winner',
      render: content => {
        return content ? 'Yes' : 'No';
      },
    },
  ];

  return (
    <>
      <Container className='grid-movies'>
        <Row className='table-area-movies'>
          <h6>List movies</h6>
          <Table dataSource={list} columns={columns} />
        </Row>
      </Container>

    </>
  );
};

export default ListMovies;
