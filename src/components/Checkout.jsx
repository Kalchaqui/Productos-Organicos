import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setError(""); // Limpiar el error al escribir
  };

  const handlePayment = () => {
    const { cardNumber, cardName, expiryDate, cvv } = formData;

    // Validación de los campos
    const cardNumberRegex = /^[0-9]{16}$/; // Solo 16 dígitos
    const cardNameRegex = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Formato MM/AA
    const cvvRegex = /^[0-9]{3}$/; // Solo 3 dígitos

    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (
      !cardNumberRegex.test(cardNumber) ||
      !cardNameRegex.test(cardName) ||
      !expiryDateRegex.test(expiryDate) ||
      !cvvRegex.test(cvv)
    ) {
      setError("Los campos no son correctos.");
      return;
    }

    // Simulación del pago
    alert("¡Pago procesado con éxito!");
    window.location.href = "/"; // Redirige al inicio después del pago
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Facturación</h1>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Número de Tarjeta</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">Nombre en la Tarjeta</label>
          <input
            type="text"
            className="form-control"
            id="cardName"
            placeholder="Juan Pérez"
            value={formData.cardName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">Fecha de Expiración</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            placeholder="MM/AA"
            value={formData.expiryDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleInputChange}
          />
        </div>

        {/* Mensaje de error */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button 
          type="button" 
          className="btn btn-primary w-100 mt-3"
          onClick={handlePayment}
        >
          Confirmar Pago
        </button>
      </form>
    </div>
  );
};

export default Checkout;
