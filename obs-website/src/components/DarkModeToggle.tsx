import React from 'react';
import { Button, Tooltip } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useDarkMode } from '../contexts/DarkModeContext';
import '../styles/components/DarkModeToggle.less';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
      <Button
        type="text"
        icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
        onClick={toggleDarkMode}
        className={`dark-mode-toggle ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      />
    </Tooltip>
  );
};

export default DarkModeToggle;
