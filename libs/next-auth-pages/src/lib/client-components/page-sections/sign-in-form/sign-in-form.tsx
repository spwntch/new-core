import { zodResolver } from '@hookform/resolvers/zod';
import { FormControl, FormField, FormItem, FormLabel, Input, StackedForm } from '@spwntch/react-ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignInFormInputs = z.infer<typeof signInFormSchema>;

export const SignInForm = () => {
  const form = useForm<SignInFormInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleFormSubmit = async (values: SignInFormInputs) => {
    console.log(values);
  };

  return (
    <StackedForm
      form={form}
      submitButton={{
        label: 'SIGN IN WITH EMAIL',
      }}
      onSubmit={handleFormSubmit}
      className=""
    >
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="min-w-64 w-full">
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input disabled={form.formState.isSubmitting} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem className="min-w-64 w-full">
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input disabled={form.formState.isSubmitting} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </StackedForm>
  );
};
