import { Button, Flex, FlexItem, Tooltip } from '@patternfly/react-core';
import React from 'react';

export interface ActionButtonProp {
  label: string;
  callback: (event: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  id?: string;
  isDisabled?: boolean;
  tooltip?: string;
};

export interface ActionButtonsProps {
  actionButtons: ActionButtonProp[];
};

const ActionButton: React.FC<ActionButtonProp> = ({
  label,
  callback,
  variant = 'primary',
  id,
  isDisabled,
  tooltip,
}) => {
  const tooltipRef = React.useRef();
  return (
    <>
      <Button
        variant={variant}
        onClick={callback}
        isAriaDisabled={isDisabled}
        aria-describedby={id}
        innerRef={tooltipRef}
      >
        {label}
      </Button>
      {tooltip ? <Tooltip id={id} content={tooltip} reference={tooltipRef} /> : null}
    </>
  );
};

export const ActionButtons: React.FC<ActionButtonsProps> = ({ actionButtons }) => (
  <Flex>
    {actionButtons.map((actionButton, i) => (
      <FlexItem key={actionButton?.id ?? i}>
        <ActionButton
          label={actionButton.label}
          callback={actionButton.callback}
          variant={actionButton?.variant}
          id={actionButton?.id}
          isDisabled={actionButton?.isDisabled}
          tooltip={actionButton?.tooltip}
        />
      </FlexItem>
    ))}
  </Flex>
);

export default ActionButtons;
