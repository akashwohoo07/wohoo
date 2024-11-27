import React from 'react';
import { Users, Shield, AlertCircle, CheckCircle, TrendingUp, BarChart2, Activity } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Total Users', 
      value: '156', 
      change: '+12.5%',
      icon: Users, 
      color: 'blue',
      description: 'Active users in the system'
    },
    { 
      title: 'Active Roles', 
      value: '12', 
      change: '+2.4%',
      icon: Shield, 
      color: 'green',
      description: 'Configured role types'
    },
    { 
      title: 'Pending Requests', 
      value: '3', 
      change: '-5.6%',
      icon: AlertCircle, 
      color: 'yellow',
      description: 'Awaiting approval'
    },
    { 
      title: 'Active Sessions', 
      value: '24', 
      change: '+8.2%',
      icon: CheckCircle, 
      color: 'purple',
      description: 'Current online users'
    }
  ];

  const getColorClasses = (color) => {
    const classes = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      yellow: 'bg-yellow-50 text-yellow-600',
      purple: 'bg-purple-50 text-purple-600'
    };
    return classes[color] || classes.blue;
  };

  const activities = [
    { 
      type: 'user',
      message: 'New user registered',
      time: '2 hours ago',
      icon: Users,
      color: 'blue'
    },
    { 
      type: 'role',
      message: 'Role permissions updated',
      time: '4 hours ago',
      icon: Shield,
      color: 'green'
    },
    { 
      type: 'alert',
      message: 'System backup completed',
      time: '6 hours ago',
      icon: CheckCircle,
      color: 'purple'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
          <p className="text-gray-500 mt-1">Monitor system activity and performance</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
          <BarChart2 className="h-5 w-5 text-gray-500" />
          <span className="text-gray-600">Generate Report</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <div className="mt-2 flex items-baseline">
                  <p className="text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <span className={`ml-2 text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
              </div>
              <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${getColorClasses(activity.color)}`}>
                  <activity.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800">System Status</h3>
            <Activity className="h-5 w-5 text-gray-500" />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Server Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-lg">Online</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Memory Usage</span>
                <span className="text-sm text-gray-800">64%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">CPU Load</span>
                <span className="text-sm text-gray-800">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;