import React from 'react';
import ChefifyHeader from './components/ChefifyHeader';
import RecipeBoxPage from './components/RecipeBoxPage';
import ChefifyFooter from './components/ChefifyFooter';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <ChefifyHeader />
      
      {/* Main Content - Grows to fill available space */}
      <main className="flex-grow">
        <RecipeBoxPage />
      </main>
      
      {/* Footer - Always at the bottom */}
      <ChefifyFooter />
    </div>
  );
}

export default App;