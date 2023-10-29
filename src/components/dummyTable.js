import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tabs from './db/tabs.json';

const DummyTable = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    setData(tabs.find(e => e.id === id).title.split(' '));
  }, [id]);

  return (
    <>
      <table>
        <tr>
          <td>{data?.[0]}</td>
          <td>{data?.[1]}</td>
        </tr>
      </table>
    </>
  );
};

export default DummyTable;
