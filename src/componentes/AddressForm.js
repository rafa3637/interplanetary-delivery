import React, { useState, useEffect } from 'react';

const AddressForm = ({ initialData = { lot: '', details: '' }, onSave }) => {
  const [address, setAddress] = useState(initialData);

  useEffect(() => {
    setAddress(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(address);
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <div>
        <label htmlFor="lot">Lote:</label>
        <input
          type="text"
          id="lot"
          name="lot"
          value={address.lot}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="details">Detalhes:</label>
        <textarea
          id="details"
          name="details"
          value={address.details}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AddressForm;
