import React, { useState, useMemo } from 'react';
import { useDashboard } from '../context/DashboardContext';
import { Category } from './Category';
import { AddWidgetModal } from './AddWidgetModal';
import { SearchBar } from './SearchBar';

export function Dashboard() {
  const { state, dispatch } = useDashboard();
  const [searchTerm, setSearchTerm] = useState('');
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    categoryId: ''
  });

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return state.categories;
    
    return state.categories.map(category => ({
      ...category,
      widgets: category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        widget.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.widgets.length > 0
    );
  }, [state.categories, searchTerm]);

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', categoryId, widgetId });
  };

  const handleAddWidget = (categoryId) => {
    setModalConfig({ isOpen: true, categoryId });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, categoryId: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <Category
              key={category.id}
              category={category}
              onRemoveWidget={(widgetId) => handleRemoveWidget(category.id, widgetId)}
              onAddWidget={() => handleAddWidget(category.id)}
            />
          ))}
          
          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No widgets or categories found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>

      <AddWidgetModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        categoryId={modalConfig.categoryId}
      />
    </div>
  );
}