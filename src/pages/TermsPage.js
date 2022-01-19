import Terms from "../components/terms/Terms";
import PageHeader from "../components/common/PageHeader";

const TermsPage = (props) => {
  return (
    <>
      <PageHeader image="terms.png" title="Terms & Conditions" />
      <Terms />
    </>
  );
};

export default TermsPage;
