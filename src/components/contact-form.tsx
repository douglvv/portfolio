"use client";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { register } from "module";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "O nome precisa ter no mínimo 2 caracteres.",
    })
    .max(50, {
      message: "O nome pode ter no máximo 50 caracteres.",
    }),
  email: z
    .string()
    .min(1, { message: "Por favor preencha seu email." })
    .email("Por favor preencha um email válido."),
  message: z.string().min(1, { message: "Por favor digite uma mensagem." }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    alert("submited!");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 text-sm lg:text-base"
    >
      <div className="mb-4">
        <input
          {...register("name")}
          type="text"
          id="name"
          name="name"
          className="text-custom-white mt-1 px-4 py-2 w-full border 
                rounded-md focus:outline-none focus:ring focus:border-primary
                tracking-wider bg-primary/20"
          placeholder="Nome"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-4">
        <input
          {...register("email")}
          type="email"
          id="email"
          name="email"
          className="text-custom-white mt-1 px-4 py-2 w-full border 
                rounded-md focus:outline-none focus:ring focus:border-primary
                tracking-wider bg-primary/20"
          placeholder="Endereço de email"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-8">
        <textarea
          {...register("message")}
          id="message"
          name="message"
          rows={4}
          className="text-custom-white mt-1 px-4 py-2 w-full border 
                rounded-md focus:outline-none focus:ring focus:border-primary
                tracking-wider bg-primary/20"
          placeholder="Deixe sua mensagem"
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      <Button
        className="w-full tracking-wide font-medium text-base lg:text-lg py-6 uppercase"
        variant={"default"}
        size={"lg"}
        type="submit"
      >
        Enviar
      </Button>
    </form>
  );
};

export default ContactForm;
