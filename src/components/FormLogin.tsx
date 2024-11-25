/* eslint-disable react/jsx-no-undef */
"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { useForm } from 'react-hook-form'
import { formSchema } from '@/schemas/formSchema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import Link from 'next/link'


const FormLogin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    /* signIn("credentials", {
      ...values,
      callbackUrl: "/consultas"
    }) */
  }

  return (
    <div className="flex flex-col w-[80%] m-auto p-3">
      <h1 className="text-2xl font-semibold mb-3">Log in</h1>
      <div className="w-[75%]">
        <span>Por favor, preencha seu usuário e senha nos campos abaixo para iniciar no app.</span>
      </div>
      <div className="mt-16">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} >
            <div className="space-y-4 border-b-light-200 border-b mb-8 pb-6">
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Email</FormLabel>
                      <FormControl className="w-96">
                        <Input
                          className="rounded-lg enabled:border-brand-100 disabled:opacity-75"
                          placeholder="Ex: meu.email@gmail.com" {...field}/>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Senha</FormLabel>
                      <FormControl className="w-96">
                        <Input type='password' className="rounded-lg enabled:border-brand-100" placeholder="Ex: 123#_456" {...field}/>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <div className="w-[100%] flex justify-end">
                <Link href="#" className="text-sm font-semibold text-red">Esqueçeu a senha?</Link>
              </div>
            </div>
            <div className="w-[100%] flex justify-between items-center">
              <div className="items-top flex space-x-2 items-center">
                <Checkbox id="remember" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    lembrar de mim
                  </label>
                  </div>
              </div>
              <Button className="rounded-lg bg-orange w-32 hover:bg-orange/90">Entrar</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default FormLogin