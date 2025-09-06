import React from 'react';
import { X, PieChart, BarChart3, AlertTriangle, TrendingUp } from 'lucide-react';

export function Widget({ widget, onRemove }) {
  const renderCloudAccountsChart = () => {
    return (
      <div className="flex items-center justify-center mt-4">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="12"
            />
            {/* Connected portion (blue) */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="12"
              strokeDasharray="188.5 0"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
          </div>
        </div>
        <div className="ml-6 space-y-2">
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
            <span>Connected (2)</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
            <span>Not Connected (0)</span>
          </div>
        </div>
      </div>
    );
  };

  const renderRiskAssessmentChart = () => {
    // Parse the numbers from the text
    const failed = 1689;
    const warning = 681;
    const notAvailable = 36;
    const passed = 7253;
    const total = failed + warning + notAvailable + passed;
    
    // Calculate percentages and stroke dash arrays
    const circumference = 2 * Math.PI * 30; // radius = 30
    const failedDash = (failed / total) * circumference;
    const warningDash = (warning / total) * circumference;
    const notAvailableDash = (notAvailable / total) * circumference;
    const passedDash = (passed / total) * circumference;
    
    let currentOffset = 0;
    
    return (
      <div className="flex items-center justify-center mt-4">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="12"
            />
            
            {/* Failed (Red) */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#ef4444"
              strokeWidth="12"
              strokeDasharray={`${failedDash} ${circumference - failedDash}`}
              strokeDashoffset={-currentOffset}
              strokeLinecap="round"
            />
            
            {/* Warning (Yellow) */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#eab308"
              strokeWidth="12"
              strokeDasharray={`${warningDash} ${circumference - warningDash}`}
              strokeDashoffset={-(currentOffset + failedDash)}
              strokeLinecap="round"
            />
            
            {/* Not Available (Gray) */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#6b7280"
              strokeWidth="12"
              strokeDasharray={`${notAvailableDash} ${circumference - notAvailableDash}`}
              strokeDashoffset={-(currentOffset + failedDash + warningDash)}
              strokeLinecap="round"
            />
            
            {/* Passed (Green) */}
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#22c55e"
              strokeWidth="12"
              strokeDasharray={`${passedDash} ${circumference - passedDash}`}
              strokeDashoffset={-(currentOffset + failedDash + warningDash + notAvailableDash)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">{total.toLocaleString()}</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        </div>
        <div className="ml-6 space-y-2">
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
            <span>Failed ({failed.toLocaleString()})</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
            <span>Warning ({warning.toLocaleString()})</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 bg-gray-500 rounded-full mr-3"></div>
            <span>Not available ({notAvailable})</span>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
            <span>Passed ({passed.toLocaleString()})</span>
          </div>
        </div>
      </div>
    );
  };

  const getWidgetIcon = () => {
    switch (widget.type) {
      case 'chart':
        return <PieChart className="w-8 h-8 text-blue-500" />;
      case 'progress':
        return <BarChart3 className="w-8 h-8 text-green-500" />;
      case 'alert':
        return <AlertTriangle className="w-8 h-8 text-yellow-500" />;
      case 'metric':
        return <TrendingUp className="w-8 h-8 text-purple-500" />;
      default:
        return <PieChart className="w-8 h-8 text-blue-500" />;
    }
  };

  const getWidgetColor = () => {
    switch (widget.type) {
      case 'chart':
        return 'border-blue-200 bg-blue-50';
      case 'progress':
        return 'border-green-200 bg-green-50';
      case 'alert':
        return 'border-yellow-200 bg-yellow-50';
      case 'metric':
        return 'border-purple-200 bg-purple-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className={`relative bg-white rounded-lg border-2 ${getWidgetColor()} p-4 hover:shadow-md transition-all duration-200 min-h-[280px]`}>
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          {getWidgetIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            {widget.name}
          </h3>
        </div>
      </div>
      
      {/* Render specific charts based on widget name */}
      {widget.name === 'Cloud Accounts' && renderCloudAccountsChart()}
      {widget.name === 'Cloud Account Risk Assessment' && renderRiskAssessmentChart()}
      
      {/* Show text for other widgets */}
      {widget.name !== 'Cloud Accounts' && widget.name !== 'Cloud Account Risk Assessment' && (
        <div className="mt-3">
          <p className="text-xs text-gray-600 leading-relaxed">
            {widget.text}
          </p>
        </div>
      )}
      
      {widget.type === 'progress' && (
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      )}
      
      {widget.type === 'chart' && widget.name !== 'Cloud Accounts' && widget.name !== 'Cloud Account Risk Assessment' && (
        <div className="mt-3 flex justify-center">
          <div className="w-16 h-16 rounded-full border-8 border-blue-200 border-t-blue-500 animate-pulse"></div>
        </div>
      )}
    </div>
  );
}