import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Button from './Button';

const meta: ComponentMeta<typeof Button> = {
  title: 'MyLib/Button',
  component: Button,
};

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    disabled: false,
    label: 'Button',
  },
};

export default meta;
