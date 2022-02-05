import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

import { getAccountByUserId } from "../../../api/admin-service";
import { BiDetail, BiTransfer } from "react-icons/bi";

const AccountsByUserId = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    getAccountByUserId(userId).then((resp) => {
      setAccounts(resp.data);
      console.log(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ButtonGroup aria-label="Basic example" className="mb-3">
        <Button
          onClick={() => navigate(`/account/${userId}/create/employee`)}
          variant="primary"
          disabled={loading}
        >
          New Account
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => navigate("/employee/users")}
        >
          Back to Users
        </Button>
      </ButtonGroup>

      <Table striped bordered hover responsive className="mt-3  d-md-none">
        <thead>
          <tr>
            <th>Id</th>
            <th>Account</th>
            <th>Balance</th>
            <th>Currency</th>
            <th>Details</th>
            <th>Transfers</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={6}>Loading...</td>
            </tr>
          )}
          {accounts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.accountNo}
              </td>

              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.balance}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.currencyCode}
              </td>

              <td>
                <Button as={Link} to={`/account/${item.accountNo}/employee`}>
                  <BiDetail />
                </Button>
              </td>
              <td>
                <Button
                  as={Link}
                  to={`/transfer/${item.accountNo}/accountNo/employee`}
                >
                  <BiTransfer />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table
        striped
        bordered
        hover
        responsive
        className="mt-3 d-none d-md-table d-xl-none"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Account</th>
            <th>Balance</th>
            <th>Currency</th>
            <th>Account Type</th>
            <th>Details</th>
            <th>Transfers</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={6}>Loading...</td>
            </tr>
          )}
          {accounts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.accountNo}
              </td>

              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.balance}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.currencyCode}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.accountType}
              </td>

              <td>
                <Button as={Link} to={`/account/${item.accountNo}/employee`}>
                  <BiDetail /> &nbsp; <span>Details</span>
                </Button>
              </td>
              <td>
                <Button
                  as={Link}
                  to={`/transfer/${item.accountNo}/accountNo/employee`}
                >
                  <BiTransfer /> &nbsp; <span>Transfers</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Table
        striped
        bordered
        hover
        responsive
        className="mt-3 d-none d-xl-table"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Account</th>
            <th>Description</th>
            <th>Balance</th>
            <th>Currency</th>
            <th>Account Type</th>
            <th>Account Status</th>
            <th>Account Creation Date</th>
            <th>Details</th>
            <th>Transfers</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={6}>Loading...</td>
            </tr>
          )}
          {accounts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.accountNo}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.description}{" "}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.balance}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.currencyCode}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.accountType}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {item.accountStatusType}
              </td>
              <td
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/account/${item.accountNo}/employee`)}
              >
                {moment(item.createdDate).format("MM/DD/YYYY HH:mm:ss")}
              </td>
              <td>
                <Button as={Link} to={`/account/${item.accountNo}/employee`}>
                  <BiDetail /> &nbsp; <span>Details</span>
                </Button>
              </td>
              <td>
                <Button
                  as={Link}
                  to={`/transfer/${item.accountNo}/accountNo/employee`}
                >
                  <BiTransfer /> &nbsp; <span>Transfers</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default AccountsByUserId;
