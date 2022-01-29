import React, { useState, useEffect } from "react";
import { Table, Button, ButtonGroup, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAllUser, searchUsers } from "../../../api/admin-user-service";

const Users = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit ici: " + searchTerm);

    if (searchTerm) {
      searchUsers(searchTerm).then((resp) => {
        console.log(resp.data);
        setUsers(resp.data);
        setSearchTerm("");
      });
    }
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleEdit = (userId) => {
    navigate(`/manager/user/${userId}`);
  };

  useEffect(() => {
    getAllUser().then((resp) => {
      setUsers(resp.data);
      console.log(resp.data);
      setLoadingUsers(false);
    });
  }, []);

  return (
    <>
      <div className="user-list-top">
        {/* <ButtonGroup
          aria-label="Basic example"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <Button
            variant="primary"
            as={Link}
            to="/admin/users/new"
            style={{ width: "200px" }}
          >
            New User
          </Button>
        </ButtonGroup> */}
        <div className="conteiner-search">
          <form className="search-group" onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="text"
              autoFocus="autofocus"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
            <Button variant="warning" type="submit">
              Search
            </Button>
          </form>
        </div>
      </div>

      <Table striped bordered hover responsive className="admin-list mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>SSN</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {loadingUsers ? (
            <tr>
              <td colSpan={5}>
                <Spinner animation="border" size="sm" /> Users are loading...
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr
                key={index}
                onClick={() => handleEdit(user.id)}
                className="cursor-hand"
              >
                <td>{index + 1}</td>
                <td>{user.ssn}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.mobilePhoneNumber}</td>
                <td>{user.roles.join(" ")}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
