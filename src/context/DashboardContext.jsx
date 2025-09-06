import React, { createContext, useContext, useReducer } from 'react';
import { initialDashboardData } from '../data/dashboardData';

const DashboardContext = createContext(null);

function dashboardReducer(state, action) {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.widget]
              }
            : category
        )
      };
    
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.widgetId)
              }
            : category
        )
      };
    
    case 'TOGGLE_WIDGET':
      const categoryToUpdate = state.categories.find(cat => cat.id === action.categoryId);
      const widgetExists = categoryToUpdate?.widgets.find(w => w.id === action.widget.id);
      
      if (widgetExists) {
        // Remove widget
        return {
          ...state,
          categories: state.categories.map(category =>
            category.id === action.categoryId
              ? {
                  ...category,
                  widgets: category.widgets.filter(widget => widget.id !== action.widget.id)
                }
              : category
          )
        };
      } else {
        // Add widget
        return {
          ...state,
          categories: state.categories.map(category =>
            category.id === action.categoryId
              ? {
                  ...category,
                  widgets: [...category.widgets, action.widget]
                }
              : category
          )
        };
      }
    
    default:
      return state;
  }
}

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialDashboardData);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}