import { cn } from '../../../utils';
import { Form } from '../../shadcn-ui';

import { PropsWithChildren } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import SubmitButton from '../../components/submit-button/submit-button';

interface StackedFormProps {
  form: UseFormReturn<any, any, undefined>;
  submitButton: {
    label: string;
  };
  onSubmit: (values: z.infer<any>) => void;
  className?: string;
}
const StackedForm = ({
  form,
  children,
  submitButton,
  onSubmit,
  className,
}: StackedFormProps & PropsWithChildren) => {
  return (
    <div className={cn('', className)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            'flex flex-col space-between gap-x-16 gap-y-6 items-center px-4'
            // isMobile && 'flex-col',
          )}
        >
          {children}
          <SubmitButton
            size="xl"
            processing={form.formState.isSubmitting}
            className="w-full"
          >
            {submitButton.label}
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
};

export default StackedForm;
