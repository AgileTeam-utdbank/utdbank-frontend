import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getTransferById } from "../../api/transfers-service";
const TransferDetails = ({ transferId }) => {
  const [loading, setLoading] = useState(true);
  const [transfer, setTransfer] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getTransferById(transferId).then((resp) => {
      console.log(resp.data);
      setTransfer(resp.data);
      setLoading(false);
    });
  }, []);
  return (
    <Container>
      {!loading && (
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Button
              variant="secondary"
              className="mb-3"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft /> Back to transfers
            </Button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Transfer Description</td>
                  <td>{transfer.description}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>From Account Id</td>
                  <td>{transfer.fromAccountId}</td>
                </tr>
                <tr>
                  <td>To Account Id</td>
                  <td>{transfer.toAccountId}</td>
                </tr>
                <tr>
                  <td>Transaction Amount</td>
                  <td>{transfer.transactionAmount}</td>
                </tr>
                <tr>
                  <td>Currency Code</td>
                  <td>{transfer.currencyCode}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={3}></Col>
        </Row>
      )}
    </Container>
  );
};
export default TransferDetails;
