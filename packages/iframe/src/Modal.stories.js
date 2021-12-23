import React from 'react';

import { Modal } from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Modal {...args} />;

export const PrimaryModal = Template.bind({});

