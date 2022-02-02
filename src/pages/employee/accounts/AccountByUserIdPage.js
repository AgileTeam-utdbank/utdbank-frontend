import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import PageHeader from "../../../components/common/PageHeader";
import Spacer from "../../../components/common/Spacer";
import Topbar from "../../../components/common/Topbar";
import AccountsByUserId from "../../../components/employee/accounts/AccountsByUserId";
import { useStore } from "../../../store";

const AccountsByUserIdPage = () => {
  const { userId } = useParams();

  return (
    <>
      <Topbar />
      <PageHeader
        title={`Accounts of ${userId}`}
        image="accounts-pageheader-background-enginakyurt.jpg"
      />
      <Spacer />
      <Container className="mt-5">
        <AccountsByUserId userId={userId} />
      </Container>
      <Spacer />
      <Footer />
    </>
  );
};

export default AccountsByUserIdPage;
