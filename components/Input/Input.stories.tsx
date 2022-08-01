import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  id: 'username',
  label: 'Username',
  placeholder: 'Username',
  error: 'Please choose username.'
};
