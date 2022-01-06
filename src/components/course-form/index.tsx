import { FormEvent, useState } from 'react';
import {
  chakra,
  VStack,
  InputGroup,
  Input,
  InputRightElement,
  useColorModeValue,
  Heading,
  Text,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { HiOutlineMail } from 'react-icons/hi';
import useSWR from 'swr';

import fetcher from '@/utils/fetcher';
import { Subscribers } from '@/types/subscribers';
import { Form, FormState } from '@/types/form-state';
import { Course } from '@/types/course';
import Link from '../link';

type Props = {
  course: Course;
};

const CourseForm = ({ course: { formId, title } }: Props) => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const { data } = useSWR<Subscribers>(
    `/api/courses/subscribers/${formId}`,
    fetcher
  );
  const detailColor = useColorModeValue('gray.500', 'gray.400');

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch(`/api/courses/subscribe/${formId}`, {
      body: JSON.stringify({
        email: e.currentTarget.elements['email'].value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error, message } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    setForm({
      state: Form.Success,
      message,
    });
  };

  return (
    <VStack
      spacing={3}
      p={{ base: 4, md: 6 }}
      bg={useColorModeValue('gray.50', 'gray.700')}
      rounded='md'
      w='full'
      alignItems='flex-start'
    >
      <Heading size='md'>Subscribe to my course 🤓</Heading>
      <Text>Get notified when I publish my &quot;{title}&quot; course!</Text>
      {form.state !== Form.Success && form.state !== Form.Error && (
        <>
          <chakra.form
            name='subscribe-form'
            target='_blank'
            w='full'
            onSubmit={subscribe}
          >
            <InputGroup w='full'>
              <Input
                variant='filled'
                placeholder='email@example.com'
                type='email'
                name='email'
                disabled={form.state === Form.Loading}
              />
              <InputRightElement>
                <IconButton
                  size='sm'
                  aria-label='Subscribe'
                  type='submit'
                  name='subscribe'
                  isLoading={form.state === Form.Loading}
                  icon={<Icon as={HiOutlineMail} />}
                />
              </InputRightElement>
            </InputGroup>
          </chakra.form>
          <Text fontSize='sm' color={detailColor}>
            Join {data?.count}+ subscribers
          </Text>
        </>
      )}
      {form.state === Form.Success && (
        <Text size='sm' color='green.500'>
          {form.message}
        </Text>
      )}
      {form.state === Form.Error && (
        <Text size='sm' color='red.500'>
          {form.message} 😕 Reach out to me on{' '}
          about this.
        </Text>
      )}
    </VStack>
  );
};

export default CourseForm;
