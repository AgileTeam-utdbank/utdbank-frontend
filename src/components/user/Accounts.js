import React, { useEffect, useState } from "react";
import { Table, Spinner, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAccounts } from "../../api/accounts-service";
const Accounts = () => {
  const [loading, setLoading] = useState(true);
  const [Accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  const showDetails = (id) => {
    navigate(`/account/${id}/user`);
  };
  useEffect(() => {
    getAccounts().then((resp) => {
      console.log(resp.data);
      setAccounts(resp.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <ButtonGroup aria-label="Basic example" className="p-3 ">
        <Button variant="primary" as={Link} to="/account/create">
          New account
        </Button>
      </ButtonGroup>

      <Table striped bordered hover responsive className="mt-3  d-lg-none">
        <thead>
          <tr>
            <th>#</th>
            <th>Account No</th>
            <th>Balance</th>
            <th>Currency Code</th>
            <th>Account Type</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Loading...
              </td>
            </tr>
          )}
          {Accounts.map((item, index) => (
            <tr
              key={index}
              onClick={() => showDetails(item.accountNo)}
              className="cursor-hand"
            >
              <td style={{ cursor: "pointer" }}>{index + 1}</td>
              <td style={{ cursor: "pointer" }}>{item.accountNo}</td>
              <td style={{ cursor: "pointer" }}>{item.balance}</td>
              <td style={{ cursor: "pointer" }}>{item.currencyCode} </td>
              <td style={{ cursor: "pointer" }}>{item.accountType}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table
        striped
        bordered
        hover
        responsive
        className="mt-3  d-none d-lg-table"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Account No</th>
            <th>Balance</th>
            <th>Currency Code</th>
            <th>Account Type</th>
            <th>Account Status Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Loading...
              </td>
            </tr>
          )}
          {Accounts.map((item, index) => (
            <tr
              key={index}
              onClick={() => showDetails(item.accountNo)}
              className="cursor-hand"
            >
              <td style={{ cursor: "pointer" }}>{index + 1}</td>
              <td style={{ cursor: "pointer" }}>{item.accountNo}</td>
              <td style={{ cursor: "pointer" }}>{item.balance}</td>
              <td style={{ cursor: "pointer" }}>{item.currencyCode} </td>
              <td style={{ cursor: "pointer" }}>{item.accountType}</td>
              <td style={{ cursor: "pointer" }}>{item.accountStatusType}</td>
              <td style={{ cursor: "pointer" }}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
export default Accounts;
