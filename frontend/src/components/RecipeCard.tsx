import React from 'react';
import '../styles/recipeCard.css'

interface Recipe {
  plato: string;
    category: string;
    price: number;
    description: string;
    image?: string;
}


interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { plato, category, price, description, image } = recipe;

  return (
    <div className="recipe-card">
      <img src={image || 'default.jpg'} alt={plato} />
      <h3>{plato}</h3>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <h4>precio:</h4>
      <p>{price}</p>
      <h4>descripcion:</h4>
      <p>{description}</p>
    </div>
  );
};

export default RecipeCard;
