export const initialDashboardData = {
  categories: [
    {
      id: 'cnapp',
      name: 'CNAPP Dashboard',
      widgets: []
    },
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'cloud-accounts',
          name: 'Cloud Accounts',
          text: 'Total: 2, Connected: 2, Not Connected: 0',
          type: 'chart'
        },
        {
          id: 'cloud-account-risk',
          name: 'Cloud Account Risk Assessment',
          text: 'Failed: 1689, Warning: 681, Not available: 36, Passed: 7253',
          type: 'chart'
        }
      ]
    },
    {
      id: 'cwpp',
      name: 'CWPP Dashboard',
      widgets: [
        {
          id: 'top-5-alerts',
          name: 'Top 5 Namespace Specific Alerts',
          text: 'No Graph data available!',
          type: 'alert'
        },
        {
          id: 'workload-alerts',
          name: 'Workload Alerts',
          text: 'No Graph data available!',
          type: 'alert'
        }
      ]
    },
    {
      id: 'registry',
      name: 'Registry Scan',
      widgets: [
        {
          id: 'image-risk',
          name: 'Image Risk Assessment',
          text: '1470 Total Vulnerabilities - Critical: 9, High: 150',
          type: 'progress'
        },
        {
          id: 'image-security',
          name: 'Image Security Issues',
          text: '2 Total Images - Critical: 2, High: 2',
          type: 'progress'
        }
      ]
    }
  ],
  availableWidgets: [
    {
      id: 'cloud-accounts',
      name: 'Cloud Accounts',
      text: 'Total: 2, Connected: 2, Not Connected: 0',
      type: 'chart'
    },
    {
      id: 'cloud-account-risk',
      name: 'Cloud Account Risk Assessment',
      text: 'Failed: 1689, Warning: 681, Not available: 36, Passed: 7253',
      type: 'chart'
    },
    {
      id: 'top-5-alerts',
      name: 'Top 5 Namespace Specific Alerts',
      text: 'No Graph data available!',
      type: 'alert'
    },
    {
      id: 'workload-alerts',
      name: 'Workload Alerts',
      text: 'No Graph data available!',
      type: 'alert'
    },
    {
      id: 'image-risk',
      name: 'Image Risk Assessment',
      text: '1470 Total Vulnerabilities - Critical: 9, High: 150',
      type: 'progress'
    },
    {
      id: 'image-security',
      name: 'Image Security Issues',
      text: '2 Total Images - Critical: 2, High: 2',
      type: 'progress'
    },
    {
      id: 'registry-scan',
      name: 'Registry Scan Summary',
      text: 'Total scanned: 156, Issues found: 45, Critical: 12',
      type: 'metric'
    },
    {
      id: 'compliance-overview',
      name: 'Compliance Overview',
      text: 'Compliant: 78%, Non-compliant: 22%, Under review: 5%',
      type: 'chart'
    },
    {
      id: 'threat-detection',
      name: 'Threat Detection',
      text: 'Active threats: 23, Resolved: 156, False positives: 12',
      type: 'alert'
    },
    {
      id: 'network-security',
      name: 'Network Security',
      text: 'Firewall rules: 245, Active connections: 1,234, Blocked: 67',
      type: 'metric'
    }
  ]
};