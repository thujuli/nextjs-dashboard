import React from 'react';
import SideNav from '../ui/dashboard/sidenav';

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default DashboardLayout;
