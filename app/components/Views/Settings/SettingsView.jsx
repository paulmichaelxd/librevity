import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import General from './General';
import Theme from './Theme';

const views = [
  { label: 'General', Component: General },
  { label: 'Conversion' },
  { label: 'Theme', Component: Theme },
];

const SettingsView = () => {
  const [step, setStep] = useState(0);
  const CurrentView = views[step].Component;

  return (
    <React.Fragment>
      <Tabs
        value={step}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newStep) => setStep(newStep)}
      >
        {views.map(({ label, Component }) => (
          <Tab
            key={label}
            label={label}
            disabled={!Component}
          />
        ))}
      </Tabs>

      <CurrentView />
    </React.Fragment>
  );
};

export default SettingsView;
