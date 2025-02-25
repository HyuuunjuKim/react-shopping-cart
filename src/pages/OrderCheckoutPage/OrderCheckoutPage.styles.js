import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CheckoutListContainer = styled.div`
  width: 60%;
  margin-right: 5%;
  min-width: 500px;

  @media screen and (max-width: 376px) {
    width: 100%;
    min-width: 240px;
    margin-right: 0;
  }
`;

const CheckoutListTitle = styled.div`
  color: #333333;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0 0 20px 20px;
`;

const CheckoutList = styled.div`
  border-top: 4px solid #aaaaaa;

  & > * {
    border-bottom: 1.5px solid #cccccc;
    padding: 20px;
  }
`;

const PaymentInfoBoxContainer = styled.div`
  width: 90%;
  margin-top: 54px;
`;

export { Container, CheckoutListContainer, CheckoutListTitle, CheckoutList, PaymentInfoBoxContainer };
