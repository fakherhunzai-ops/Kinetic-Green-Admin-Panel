import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

interface SettingsTab {
  id: string;
  name: string;
  icon: string;
}

const tabs: SettingsTab[] = [
  { id: 'general', name: 'General', icon: 'ri-settings-3-line' },
  { id: 'users', name: 'Users & Roles', icon: 'ri-team-line' },
  { id: 'security', name: 'Security', icon: 'ri-shield-check-line' },
  { id: 'notifications', name: 'Notifications', icon: 'ri-notification-3-line' },
];

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  avatar: string;
  lastActive: string;
}

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  // General Settings State
  const [companyName, setCompanyName] = useState('Tazzari EV');
  const [companyEmail, setCompanyEmail] = useState('info@tazzari-ev.com');
  const [companyPhone, setCompanyPhone] = useState('+39 051 123 4567');
  const [companyAddress, setCompanyAddress] = useState('Via Example 123, Bologna, Italy');
  const [vatNumber, setVatNumber] = useState('IT12345678901');
  const [website, setWebsite] = useState('https://tazzari-ev.com');
  const [timezone, setTimezone] = useState('UTC+1');
  const [currency, setCurrency] = useState('EUR');

  // Users State
  const [users, setUsers] = useState<User[]>([
    { id: '1', name: 'Marco Rossi', email: 'marco@tazzari-ev.com', role: 'Admin', status: 'active', avatar: 'MR', lastActive: '2 min ago' },
    { id: '2', name: 'Sofia Bianchi', email: 'sofia@tazzari-ev.com', role: 'Manager', status: 'active', avatar: 'SB', lastActive: '1 hour ago' },
    { id: '3', name: 'Luca Ferrari', email: 'luca@tazzari-ev.com', role: 'Sales', status: 'active', avatar: 'LF', lastActive: '3 hours ago' },
    { id: '4', name: 'Giulia Romano', email: 'giulia@tazzari-ev.com', role: 'Support', status: 'inactive', avatar: 'GR', lastActive: '2 days ago' },
  ]);

  // New User Form State
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('Sales');

  // Security State
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [minPasswordLength, setMinPasswordLength] = useState('8');
  const [requireUppercase, setRequireUppercase] = useState(true);
  const [requireNumbers, setRequireNumbers] = useState(true);
  const [requireSpecialChars, setRequireSpecialChars] = useState(true);
  const [passwordExpiry, setPasswordExpiry] = useState('90');
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [maxLoginAttempts, setMaxLoginAttempts] = useState('5');

  // Notifications State
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [newLeadAlerts, setNewLeadAlerts] = useState(true);
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);
  const [monthlyReports, setMonthlyReports] = useState(false);
  const [notificationEmail, setNotificationEmail] = useState('admin@tazzari-ev.com');

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAddUser = () => {
    if (newUserName && newUserEmail) {
      const newUser: User = {
        id: String(users.length + 1),
        name: newUserName,
        email: newUserEmail,
        role: newUserRole,
        status: 'active',
        avatar: newUserName.split(' ').map(n => n[0]).join('').toUpperCase(),
        lastActive: 'Just now'
      };
      setUsers([...users, newUser]);
      setNewUserName('');
      setNewUserEmail('');
      setNewUserRole('Sales');
      setShowAddUserModal(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleToggleUserStatus = (userId: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                    <input
                      type="url"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={companyEmail}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={companyPhone}
                      onChange={(e) => setCompanyPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">VAT Number</label>
                    <input
                      type="text"
                      value={vatNumber}
                      onChange={(e) => setVatNumber(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                    <select
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    >
                      <option value="UTC+1">UTC+1 (Rome)</option>
                      <option value="UTC+0">UTC+0 (London)</option>
                      <option value="UTC-5">UTC-5 (New York)</option>
                      <option value="UTC-8">UTC-8 (Los Angeles)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    >
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Users & Roles</h3>
                <p className="text-sm text-gray-600 mt-1">Manage team members and their access levels</p>
              </div>
              <button
                onClick={() => setShowAddUserModal(true)}
                className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <i className="ri-add-line"></i>
                Add User
              </button>
            </div>

            <div className="space-y-3">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 font-semibold text-sm">{user.avatar}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-900 text-sm">{user.name}</p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'active' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {user.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{user.email}</p>
                      <p className="text-xs text-gray-400 mt-1">Last active: {user.lastActive}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <select
                      value={user.role}
                      onChange={(e) => {
                        setUsers(users.map(u => 
                          u.id === user.id ? { ...u, role: e.target.value } : u
                        ));
                      }}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Sales">Sales</option>
                      <option value="Support">Support</option>
                      <option value="Viewer">Viewer</option>
                    </select>
                    <button
                      onClick={() => handleToggleUserStatus(user.id)}
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-teal-600 transition-colors"
                      title={user.status === 'active' ? 'Deactivate' : 'Activate'}
                    >
                      <i className={`ri-${user.status === 'active' ? 'pause' : 'play'}-circle-line text-xl`}></i>
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete user"
                    >
                      <i className="ri-delete-bin-line text-xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Role Permissions</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <i className="ri-shield-star-line text-teal-600 mt-0.5"></i>
                  <div>
                    <span className="font-medium text-gray-900">Admin:</span> Full access to all features and settings
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-user-settings-line text-teal-600 mt-0.5"></i>
                  <div>
                    <span className="font-medium text-gray-900">Manager:</span> Manage products, leads, and team members
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-shopping-cart-line text-teal-600 mt-0.5"></i>
                  <div>
                    <span className="font-medium text-gray-900">Sales:</span> Access to leads, products, and orders
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-customer-service-line text-teal-600 mt-0.5"></i>
                  <div>
                    <span className="font-medium text-gray-900">Support:</span> View and respond to customer inquiries
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="ri-eye-line text-teal-600 mt-0.5"></i>
                  <div>
                    <span className="font-medium text-gray-900">Viewer:</span> Read-only access to reports and data
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
              
              {/* Two-Factor Authentication */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Two-Factor Authentication (2FA)</p>
                    <p className="text-xs text-gray-500 mt-1">Add an extra layer of security to your account</p>
                  </div>
                  <button
                    onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      twoFactorAuth ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        twoFactorAuth ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                {twoFactorAuth && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors whitespace-nowrap">
                      Configure 2FA
                    </button>
                  </div>
                )}
              </div>

              {/* Password Rules */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900">Password Requirements</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Password Length</label>
                  <select
                    value={minPasswordLength}
                    onChange={(e) => setMinPasswordLength(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  >
                    <option value="6">6 characters</option>
                    <option value="8">8 characters</option>
                    <option value="10">10 characters</option>
                    <option value="12">12 characters</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Require Uppercase Letters</p>
                      <p className="text-xs text-gray-500">At least one uppercase letter (A-Z)</p>
                    </div>
                    <button
                      onClick={() => setRequireUppercase(!requireUppercase)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        requireUppercase ? 'bg-teal-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          requireUppercase ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Require Numbers</p>
                      <p className="text-xs text-gray-500">At least one number (0-9)</p>
                    </div>
                    <button
                      onClick={() => setRequireNumbers(!requireNumbers)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        requireNumbers ? 'bg-teal-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          requireNumbers ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Require Special Characters</p>
                      <p className="text-xs text-gray-500">At least one special character (!@#$%^&*)</p>
                    </div>
                    <button
                      onClick={() => setRequireSpecialChars(!requireSpecialChars)}
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        requireSpecialChars ? 'bg-teal-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          requireSpecialChars ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password Expiry</label>
                    <select
                      value={passwordExpiry}
                      onChange={(e) => setPasswordExpiry(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    >
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90">90 days</option>
                      <option value="180">180 days</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout</label>
                    <select
                      value={sessionTimeout}
                      onChange={(e) => setSessionTimeout(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="60">1 hour</option>
                      <option value="120">2 hours</option>
                      <option value="240">4 hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Login Attempts</label>
                  <select
                    value={maxLoginAttempts}
                    onChange={(e) => setMaxLoginAttempts(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  >
                    <option value="3">3 attempts</option>
                    <option value="5">5 attempts</option>
                    <option value="10">10 attempts</option>
                    <option value="unlimited">Unlimited</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Account will be locked after exceeding this limit</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Alerts</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Notification Email Address</label>
                <input
                  type="email"
                  value={notificationEmail}
                  onChange={(e) => setNotificationEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="admin@example.com"
                />
                <p className="text-xs text-gray-500 mt-1">All notifications will be sent to this email address</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email Notifications</p>
                    <p className="text-xs text-gray-500">Enable or disable all email notifications</p>
                  </div>
                  <button
                    onClick={() => setEmailNotifications(!emailNotifications)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      emailNotifications ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        emailNotifications ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {emailNotifications && (
                  <>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">New Lead Alerts</p>
                        <p className="text-xs text-gray-500">Get notified when new leads arrive</p>
                      </div>
                      <button
                        onClick={() => setNewLeadAlerts(!newLeadAlerts)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          newLeadAlerts ? 'bg-teal-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            newLeadAlerts ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Order Updates</p>
                        <p className="text-xs text-gray-500">Notifications for order status changes</p>
                      </div>
                      <button
                        onClick={() => setOrderUpdates(!orderUpdates)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          orderUpdates ? 'bg-teal-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            orderUpdates ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">System Alerts</p>
                        <p className="text-xs text-gray-500">Important system updates and maintenance notices</p>
                      </div>
                      <button
                        onClick={() => setSystemAlerts(!systemAlerts)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          systemAlerts ? 'bg-teal-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            systemAlerts ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Weekly Reports</p>
                        <p className="text-xs text-gray-500">Receive weekly performance summaries every Monday</p>
                      </div>
                      <button
                        onClick={() => setWeeklyReports(!weeklyReports)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          weeklyReports ? 'bg-teal-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            weeklyReports ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Monthly Reports</p>
                        <p className="text-xs text-gray-500">Comprehensive monthly analytics on the 1st of each month</p>
                      </div>
                      <button
                        onClick={() => setMonthlyReports(!monthlyReports)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${
                          monthlyReports ? 'bg-teal-500' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            monthlyReports ? 'translate-x-6' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and application preferences</p>
        </div>

        {showSuccess && (
          <div className="mb-6 p-4 bg-teal-50 border border-teal-200 rounded-lg flex items-center gap-3">
            <i className="ri-checkbox-circle-fill text-teal-500 text-xl"></i>
            <p className="text-teal-700 text-sm font-medium">Settings saved successfully!</p>
          </div>
        )}

        <div className="flex gap-6">
          {/* Sidebar Tabs */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <i className={`${tab.icon} text-lg`}></i>
                  <span className="font-medium text-sm whitespace-nowrap">{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              {renderTabContent()}
              
              <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end gap-3">
                <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors whitespace-nowrap"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUserModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Add New User</h3>
              <button
                onClick={() => setShowAddUserModal(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={newUserRole}
                  onChange={(e) => setNewUserRole(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Sales">Sales</option>
                  <option value="Support">Support</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowAddUserModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="flex-1 px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors whitespace-nowrap"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
