import React from 'react';

import AvatarComponent from './components/Avatar';
import DashboardButton from './components/DashboardButton';
import LogoButton from './components/LogoButton';
import LogoutButton from './components/LogoutButton';

const DashboardItems = () => {
  const logoButton = <LogoButton />;
  const dashboard = <DashboardButton name={'داشبورد'} href={'/mentor'} />;
  const eventsButton = <DashboardButton name={'رویدادها'} href={'/events'} />;
  const workshopsButton = <DashboardButton name={'کارگاه‌ها'} href={'/'} disabled iconImage='presentation.png' />;
  const profileButton = <DashboardButton name={'مشخصات'} href={'/'} disabled iconImage='user.png' />;
  const logoutButton = <LogoutButton />;
  const Avatar = <AvatarComponent />;

  return {
    desktopLeftItems: [logoutButton, Avatar],
    desktopRightItems: [logoButton, dashboard,],
    mobileLeftItems: [logoButton,],
    mobileRightItems: [],
    mobileMenuListItems: [dashboard,],
  };
};

export default DashboardItems;
