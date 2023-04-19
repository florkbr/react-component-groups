import React from 'react';
import type { DetailsPageHeaderProps } from '../DetailsPageHeader';
import { DetailsPageHeader } from '../DetailsPageHeader';
import type { HorizontalNavProps } from '../HorizontalNav';
import { withRouter, HorizontalNav } from '../HorizontalNav';

export type DetailsPageProps = HorizontalNavProps & DetailsPageHeaderProps;

export const DetailsPage = withRouter<DetailsPageProps>(
  ({ ariaLabel, tabs, breadcrumbs, actionButtons, actionMenu, pageHeading, obj }) => (
    <>
      <DetailsPageHeader
        breadcrumbs={breadcrumbs}
        actionButtons={actionButtons}
        actionMenu={actionMenu}
        pageHeading={pageHeading}
        obj={obj}
      />
      <HorizontalNav ariaLabel={ariaLabel} tabs={tabs} />
    </>
  ),
);
