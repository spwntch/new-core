import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const avatar = await canvas.findByAltText('User');
  const fallback = await canvas.findByText('U');

  // Initial state check
  expect(avatar).toBeInTheDocument();
  expect(fallback).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playAccessibilityTest = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
