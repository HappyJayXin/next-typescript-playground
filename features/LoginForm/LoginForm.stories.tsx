import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import LoginForm from './LoginForm';

export default {
  title: 'Integration/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const ErrorMessage = Template.bind({});

ErrorMessage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(canvas.getByText('Please choose username.')).toBeInTheDocument();
  await expect(canvas.getByText('Please choose password.')).toBeInTheDocument();
};

export const SuccessSignIn = Template.bind({});

SuccessSignIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText('Username'), 'email@provider.com');
  await userEvent.type(canvas.getByLabelText('Password'), '00000000');
  await userEvent.click(canvas.getByRole('button'));
  await expect(
    canvas.queryByText('Please choose username.')
  ).not.toBeInTheDocument();
  await expect(
    canvas.queryByText('Please choose password.')
  ).not.toBeInTheDocument();
};
