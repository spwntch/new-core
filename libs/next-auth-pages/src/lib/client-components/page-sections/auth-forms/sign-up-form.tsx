import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  StackedForm,
} from '@spwntch/react-ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const signupFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type SignUpFormInputs = z.infer<typeof signupFormSchema>;

export const SignUpForm = () => {
  const form = useForm<SignUpFormInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleFormSubmit = async (values: SignUpFormInputs) => {
    console.log(values);
  };

  return (
    <StackedForm
      form={form}
      submitButton={{
        label: 'CREATE NEW ACCOUNT',
      }}
      onSubmit={handleFormSubmit}
      className=""
    >
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem className="min-w-64 w-full">
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input disabled={form.formState.isSubmitting} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem className="min-w-64 w-full">
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input disabled={form.formState.isSubmitting} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
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
