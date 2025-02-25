import PropTypes from 'prop-types';
import { numberWithCommas } from '../../shared/utils';
import { Container, Title, Content, PaymentDetail, PaymentButton } from './PaymentInfoBox.styles';

const PaymentInfoBox = ({ title, detailText, price, buttonText, onClick, isDisable }) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      <PaymentDetail>
        <span>{detailText}</span>
        <span>{`${numberWithCommas(price)} 원`}</span>
      </PaymentDetail>
      <PaymentButton onClick={onClick} disabled={isDisable}>
        {buttonText}
      </PaymentButton>
    </Content>
  </Container>
);

PaymentInfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  detailText: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisable: PropTypes.bool,
};

PaymentInfoBox.defaultProps = {
  isDisable: false,
};

export default PaymentInfoBox;
