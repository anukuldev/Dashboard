import React, { useState, useMemo } from 'react';
import { X, Search, Plus } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

export function AddWidgetModal({ isOpen, onClose, categoryId }) {
  const { state, dispatch } = useDashboard();
  const [searchTerm, setSearchTerm] = useState('');
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const currentCategory = state.categories.find(cat => cat.id === categoryId);
  
  const filteredWidgets = useMemo(() => {
    return state.availableWidgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [state.availableWidgets, searchTerm]);

  const isWidgetInCategory = (widgetId) => {
    return currentCategory?.widgets.some(w => w.id === widgetId) || false;
  };

  const handleToggleWidget = (widget) => {
    dispatch({ type: 'TOGGLE_WIDGET', categoryId, widget });
  };

  const handleAddNewWidget = () => {
    if (newWidgetName.trim() && newWidgetText.trim()) {
      const newWidget = {
        id: `custom-${Date.now()}`,
        name: newWidgetName.trim(),
        text: newWidgetText.trim(),
        type: 'metric'
      };
      
      dispatch({ type: 'ADD_WIDGET', categoryId, widget: newWidget });
      setNewWidgetName('');
      setNewWidgetText('');
      setShowAddForm(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-900">
            Add Widget to {currentCategory?.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="p-4 flex-shrink-0">
            <p className="text-sm text-gray-600 mb-4">
              Personalise your dashboard by adding the following widgets
            </p>
            
            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search widgets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Available Widgets</span>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="flex items-center space-x-2 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create New</span>
              </button>
            </div>

            {showAddForm && (
              <div className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Create New Widget</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Widget Name"
                    value={newWidgetName}
                    onChange={(e) => setNewWidgetName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Widget Text/Description"
                    value={newWidgetText}
                    onChange={(e) => setNewWidgetText(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handleAddNewWidget}
                      disabled={!newWidgetName.trim() || !newWidgetText.trim()}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Add Widget
                    </button>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4">
            <div className="space-y-2 pb-4">
              {filteredWidgets.map((widget) => (
                <div key={widget.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="checkbox"
                    id={widget.id}
                    checked={isWidgetInCategory(widget.id)}
                    onChange={() => handleToggleWidget(widget)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={widget.id} className="flex-1 cursor-pointer">
                    <div className="font-medium text-sm text-gray-900">{widget.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{widget.text}</div>
                  </label>
                </div>
              ))}
            </div>
            
            {filteredWidgets.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No widgets found matching your search.
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-3 p-4 border-t bg-gray-50 flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}