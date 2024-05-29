import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddressForm from '../componentes/AddressForm';

const EditAddress = () => {
  const [initialData, setInitialData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddress = async () => {
      const fetchedAddress = { lot: '1234', details: 'Exemplo de endereço' }; 
      setInitialData(fetchedAddress);
    };

    fetchAddress();
  }, [id]);

  const handleSave = (data) => {
    console.log('Endereço atualizado:', data);
    navigate('/'); 
  };

  return (
    <div className="address-page">
      <h1>Editar Endereço</h1>
      {initialData ? (
        <AddressForm initialData={initialData} onSave={handleSave} />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default EditAddress;
