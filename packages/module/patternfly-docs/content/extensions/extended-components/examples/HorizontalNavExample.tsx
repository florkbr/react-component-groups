import React from 'react';
import { HorizontalNav } from '@patternfly/react-component-groups';
import { BrowserRouter as Router } from 'react-router-dom';

export const BasicExample: React.FC = () => (
  <Router>
    <HorizontalNav
      tabs={[
        { key: 'Users', title: 'Users', content: <div>Users Tab Content</div>, ariaLabel: 'Users' },
        { key: 'Database', title: 'Database', content: <div>Database Tab Content</div>, ariaLabel: 'Database' }
      ]}
    />
  </Router>
);
