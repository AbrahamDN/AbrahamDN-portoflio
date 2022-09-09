import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;
const TEMPLATE_KEY = process.env.NEXT_PUBLIC_TEMPLATE_KEY;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const ContactForm = () => {
  const [submittedData, setSubmittedData] = useState({});

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const toast = useToast();
  const form = useRef<HTMLFormElement>(null);
  const onSubmit = handleSubmit((data) => setSubmittedData(data));

  const sendEmail = () => {
    if (!(SERVICE_KEY && TEMPLATE_KEY && API_KEY)) {
      toast({
        title:
          "Service down, unable to send message at the moment. Please try again or manually send message with a different email platform.",
        status: "error",
        isClosable: true,
      });
      return;
    }

    emailjs
      .sendForm(
        SERVICE_KEY || "",
        TEMPLATE_KEY || "",
        form.current || "",
        API_KEY || ""
      )
      ?.then(
        () => {
          toast({
            title: `Email sent`,
            status: "success",
            isClosable: true,
          });
          reset();
        },
        (err) =>
          toast({
            title: err.message,
            status: "error",
            isClosable: true,
          })
      );
  };

  const inputStyles = {
    borderColor: "black",
    borderRadius: "full",
    _focus: { borderColor: "black" },
    _hover: { borderColor: "black" },
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      sendEmail();
    }
  }, [isSubmitSuccessful, submittedData, reset]);

  return (
    <form
      ref={form}
      onSubmit={onSubmit}
      style={{ width: "100%", position: "relative" }}
    >
      <Flex
        h="fit-content"
        rowGap="2"
        columnGap="8"
        flexDir={["column", "row"]}
      >
        <Stack flex={1} gap="2">
          <FormControl
            pb={errors.name ? "2" : "0"}
            position="relative"
            isInvalid={Boolean(errors.name)}
          >
            <FormLabel>Name</FormLabel>
            <Input
              {...inputStyles}
              placeholder="Enter name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <FormHelperText position="absolute" bottom="-4" color="red">
                {errors.name.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            pb={errors.email ? "2" : "0"}
            position="relative"
            isInvalid={Boolean(errors.email)}
          >
            <FormLabel>Email</FormLabel>
            <Input
              {...inputStyles}
              placeholder="Enter email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <FormHelperText position="absolute" bottom="-4" color="red">
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>

          <FormControl
            pb={errors.subject ? "2" : "0"}
            position="relative"
            isInvalid={Boolean(errors.subject)}
          >
            <FormLabel>Subject</FormLabel>
            <Input
              {...inputStyles}
              placeholder="Enter subject"
              {...register("subject")}
            />
            {errors.subject && (
              <FormHelperText position="absolute" bottom="-4" color="red">
                {errors.subject.message}
              </FormHelperText>
            )}
          </FormControl>
        </Stack>

        <FormControl position="relative" flex={1}>
          <FormLabel>Message</FormLabel>
          <Textarea
            {...inputStyles}
            borderRadius="16"
            minH="40"
            h={"calc(100% - 2em)"}
            resize="none"
            isInvalid={Boolean(errors.message)}
            placeholder="Enter message"
            maxLength={1000}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 60,
                message: "Must be 60 - 1000 characters",
              },
              maxLength: {
                value: 1000,
                message: "Reached limit of 1000 characters",
              },
            })}
          />
          {errors.message && (
            <FormHelperText position="absolute" bottom="-6" color="red">
              {errors.message.message}
            </FormHelperText>
          )}
        </FormControl>
      </Flex>

      <Flex justifyContent="flex-end" mt="6">
        <Button
          type="submit"
          variant="outline"
          isDisabled={Boolean(Object.keys(errors).length)}
        >
          Send
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
