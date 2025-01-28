import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe: React.FC = () => {
  const [formData, setFormData] = useState({
    plato:'',
    category: '',
    price: '',
    description: '',
    image: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes', formData);
      alert('Recipe added successfully');    } catch (error) {
      alert('Error adding recipe');
    }
  };

  return (
    <>
    <section id="home" className="hero">
    </section>
    <center><h2 className="section-title">Agregar Plato 🍽️</h2></center>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Plato" onChange={e => setFormData({ ...formData, plato: e.target.value })} />
     
      <select
  value={formData.category}
  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
>
  <option value="" disabled>Selecciona una categoría</option>
  <option value="Desayuno">Desayuno</option>
  <option value="Almuerzo">Almuerzo</option>
  <option value="Cena">Cena</option>
</select>

      <textarea placeholder="Precio" onChange={e => setFormData({ ...formData, price: e.target.value })} />
      <textarea placeholder="Descripcion" onChange={e => setFormData({ ...formData, description: e.target.value })} />
      <input type="text" placeholder="Imagen URL" onChange={e => setFormData({ ...formData, image: e.target.value })} />
      <button type="submit">Add Recipe</button>
    </form>
    </>
  );
};

export default AddRecipe;