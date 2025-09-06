import React from 'react';
import { Plus } from 'lucide-react';
import { Widget } from './Widget';

export function Category({ category, onRemoveWidget, onAddWidget }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
        <button
          onClick={onAddWidget}
          className="flex items-center space-x-2 px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Widget</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={() => onRemoveWidget(widget.id)}
          />
        ))}
        
        {category.widgets.length === 0 && (
          <div className="col-span-full">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 mb-4">No widgets in this category</p>
              <button
                onClick={onAddWidget}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Widget</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}