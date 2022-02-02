import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../api/admin-user-service";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";
import AccountsByUserId from "../../../components/employee/accounts/AccountsByUserId";
import { useStore } from "../../../store";

const AccountsByUserIdPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById(userId).then((resp) => {
      console.log(resp.data);
      setUser(resp.data);
    });
  }, []);

  return (
    <>
      <Topbar />
      <PageHeader
        title={`Accounts by Users`}
        image="accounts-pageheader-background-enginakyurt.jpg"
      />
      <Spacer size="50" />
      {user && (
        <Container>
          <Row>
            <Card>
              <Card.Body>
                <h5>SSN: {user.ssn}</h5>
                Full Name: {user.firstName} {user.lastName}
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}

      <Container className="mt-5">
        <AccountsByUserId userId={userId} />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsByUserIdPage;
