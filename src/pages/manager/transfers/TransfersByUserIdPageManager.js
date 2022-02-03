import React, { useEffect, useState } from "react";
import TransfersByUserId from "../../../components/manager/transfers/TransfersByUserId";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getUserById } from "../../../api/admin-user-service";
import { useParams } from "react-router-dom";

const TransfersByUserIdPageManager = () => {
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
      <PageHeader title="Transfers by User" image="money-transfer.jpg" />
      <Spacer size="50" />
      {user && (
        <Container>
          <Row>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <h5>SSN: {user.ssn}</h5>
                  <h5>
                    {user.firstName} {user.lastName}
                  </h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      )}
      <Spacer size="30" />
      <TransfersByUserId />
      <Spacer />
      <Footer />
    </>
  );
};

export default TransfersByUserIdPageManager;
