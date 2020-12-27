import * as yup from 'yup';

const personSchema = yup
  .object({
    firstName: yup.string().defined(),
    lastName: yup.string().defined(),
    email: yup.string().email().defined().nullable(),
  })
  .defined();

type Person = yup.InferType<typeof personSchema>;

export const YupDemo = () => {
  const person: Person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    email: null,
  };

  return (
    <div>
      <h2>Yup Demo</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <p>
        The person is valid: {personSchema.isValidSync(person) ? 'yes' : 'no'}
      </p>
    </div>
  );
};
