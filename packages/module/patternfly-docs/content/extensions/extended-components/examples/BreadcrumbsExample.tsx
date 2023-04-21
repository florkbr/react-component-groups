import React from 'react';
import { Breadcrumbs } from '@patternfly/react-component-groups';

export const BasicExample: React.FC = () => (
  <Breadcrumbs
    breadcrumbs={[
      { name: 'Home', path: '/' },
      { name: 'Section', path: '/section' },
      { name: 'Section landing', path: '/section-landing' }
    ]}
  />
);
