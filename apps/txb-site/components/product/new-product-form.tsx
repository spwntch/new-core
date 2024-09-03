import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  RadioGroup,
  RadioGroupItem,
  StackedForm,
  Textarea,
} from '@spwntch/react-ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const productFormSchema = z.object({
  productName: z.string().min(1, { message: 'Required' }),
  productCategory: z.string().min(1, { message: 'Required' }),
  targetMarket: z.string().min(1, { message: 'Required' }),
  productDescription: z.string(),
});

export type ProductFormInputs = z.infer<typeof productFormSchema>;

const NewProductForm = () => {
  const form = useForm<ProductFormInputs>({
    mode: 'onSubmit',
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      productName: '',
      productCategory: '',
      targetMarket: '',
      productDescription: '',
    },
  });

  const handleFormSubmit = async (values: ProductFormInputs) => {
    console.log(values);
    form.reset();
  };

  return (
    <StackedForm
      form={form}
      submitButton={{
        label: 'SUBMIT',
      }}
      onSubmit={handleFormSubmit}
      className="w-full"
    >
      <FormField
        control={form.control}
        name="productName"
        render={({ field }) => (
          <FormItem className="min-w-64 w-full">
            <FormLabel>Product Name</FormLabel>
            <FormControl>
              <Input disabled={form.formState.isSubmitting} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="productCategory"
        render={({ field }) => (
          <FormItem className="space-y-3 w-full">
            <FormLabel>Product Category</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="physical-product" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Physical Product
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="digital-product" />
                  </FormControl>
                  <FormLabel className="font-normal">Digital Product</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="service" />
                  </FormControl>
                  <FormLabel className="font-normal">Service</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            {/* <FormMessage /> */}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="targetMarket"
        render={({ field }) => (
          <FormItem className="space-y-3 w-full">
            <FormLabel>Product Category</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="b2c" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Business to Consumer
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="b2b" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Business to Business{' '}
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="b2c-and-b2b" />
                  </FormControl>
                  <FormLabel className="font-normal">Both</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            {/* <FormMessage /> */}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="productDescription"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Product Description (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Tell us a little bit more about the product you're planning to market."
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </StackedForm>
  );
};

export default NewProductForm;
