import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddressForm from '../componentes/AddressForm';

const AddAddress = () => {
  const navigate = useNavigate();

  const handleSave = (data) => {
    console.log('Endereço cadastrado:', data);
    navigate('/'); 
  };

  return (
    <div className="address-page">
      <h1>Cadastrar Endereço</h1>
      <AddressForm onSave={handleSave} />
    </div>
  );
};

export default AddAddress;
