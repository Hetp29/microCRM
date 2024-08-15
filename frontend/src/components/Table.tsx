import React from 'react';

interface Record {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  created_at: string;
}

interface TableProps {
  records: Record[];
}

const Table: React.FC<TableProps> = ({ records }) => {
  return (
    <table className="table table-striped table-hover table-bordered">
      <thead className="table-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Zipcode</th>
          <th scope="col">Created At</th>
          <th scope="col">ID</th>
        </tr>
      </thead>
      <tbody>
        {records.map(record => (
          <tr key={record.id}>
            <td>{record.first_name} {record.last_name}</td>
            <td>{record.email}</td>
            <td>{record.phone}</td>
            <td>{record.address}</td>
            <td>{record.city}</td>
            <td>{record.state}</td>
            <td>{record.zipcode}</td>
            <td>{record.created_at}</td>
            <td>
              <a href={`/record/${record.id}`}>{record.id}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
