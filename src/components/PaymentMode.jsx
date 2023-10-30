import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import visaCardImage from '../assets/visa-master.png'
import mobileMoneyImage from '../assets/mobilemoney.png'


const API_KEY = 'your_api_key';
const API_SECRET = 'your_api_secret';
const HUBTEL_PAYMENT_URL = 'https://api.hubtel.com/v2/pos/onlinecheckout/items/initiate';

function PaymentMode() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(''); // 'card' or 'mobileMoney'
  const [paymentData, setPaymentData] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({
    card: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
    mobileMoney: {
      mobileNumber: '',
    },
  });

  const handlePayment = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePaymentSubmit = async () => {
    try {
      const response = await axios.post(HUBTEL_PAYMENT_URL, {
        apiKey: API_KEY,
        apiSecret: API_SECRET,
        paymentDetails: paymentDetails[paymentMethod], // Include payment details based on the selected method
      });
      setPaymentData(response.data);
      closeModal();
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with Hubtel</button>
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Modal"
        className="w-full max-w-md mx-auto p-4 mt-20 "
      >
        <h2 className="text-2xl font-bold">Payment Details</h2>
        <div className="mt-4">
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => handlePaymentMethodChange('card')}
              className="mr-2"
            />
            <img src={visaCardImage} alt="Visa Card" className="h-10 w-16 mt-2 mr-2" /> Visa Card/Master Card
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="mobileMoney"
              checked={paymentMethod === 'mobileMoney'}
              onChange={() => handlePaymentMethodChange('mobileMoney')}
              className="mr-2"
            />
            <img src={mobileMoneyImage} alt="Mobile Money" className="h-12 w-16 mt-2 mr-2 " />Mobile Money
          </label>
        </div>
        <form className="mt-4">
          {paymentMethod === 'card' && (
            <div>
              <label className="block mb-2">Card Number:</label>
              <input
                type="text"
                value={paymentDetails.card.cardNumber}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    card: { ...paymentDetails.card, cardNumber: e.target.value },
                  })
                }
                className="w-full border rounded p-2 mb-2"
              />
              <label className="block mb-2">Expiration Date:</label>
              <input
                type="text"
                value={paymentDetails.card.expirationDate}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    card: { ...paymentDetails.card, expirationDate: e.target.value },
                  })
                }
                className="w-full border rounded p-2 mb-2"
              />
              <label className="block mb-2">CVV:</label>
              <input
                type="text"
                value={paymentDetails.card.cvv}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    card: { ...paymentDetails.card, cvv: e.target.value },
                  })
                }
                className="w-full border rounded p-2 mb-2"
              />
            </div>
          )}
          {paymentMethod === 'mobileMoney' && (
            <div>
              <label className="block mb-2">Mobile Number:</label>
              <input
                type="text"
                value={paymentDetails.mobileMoney.mobileNumber}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    mobileMoney: { ...paymentDetails.mobileMoney, mobileNumber: e.target.value },
                  })
                }
                className="w-full border rounded p-2 mb-2"
              />
            </div>
          )}
          <button
            type="button"
            onClick={handlePaymentSubmit}
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Submit Payment
          </button>
        </form>
        <button onClick={closeModal} className="mt-4">Close</button>
      </Modal>

    </div>
  );
}

export default PaymentMode;
