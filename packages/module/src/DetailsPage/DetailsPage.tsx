import React from 'react';
import type { DetailsPageHeaderProps } from '../DetailsPageHeader';
import { DetailsPageHeader } from '../DetailsPageHeader';
import { HorizontalNav, withRouter } from '../HorizontalNav';

export type DetailsPageProps = HorizontalNav & DetailsPageHeaderProps;

export const DetailsPage = withRouter<DetailsPageProps>(
  ({ ariaLabel, tabs, breadcrumbs, actionButtons, actionMenu, pageHeading }) => (
    <>
      <DetailsPageHeader
        breadcrumbs={breadcrumbs}
        actionButtons={actionButtons}
        actionMenu={actionMenu}
        pageHeading={pageHeading}
      />
      <HorizontalNav ariaLabel={ariaLabel} tabs={tabs} />
    </>
  ),
);
