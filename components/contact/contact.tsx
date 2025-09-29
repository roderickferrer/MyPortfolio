"use client";
import React from "react";
import {useForm, ValidationError} from "@formspree/react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
export default function Contact() {
  const [state, handleSubmit] = useForm("xoqggqvw");

  return (
    <div id="contact" className="my-20 pt-5">
      <hr />
      <h2  className="uppercase pt-5">Feel free to message me or reach out.</h2>
    <form
      
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row md:justify-around gap-4 mt-20 mb-20"
    >
      <div>
        <Label htmlFor="email" className="mb-5">Email Address</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="example@email.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Label htmlFor="name" className="my-5">Name</Label>
        <Input id="name" type="name" name="name" placeholder="Name" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <div>
          <Label htmlFor="message" className="mb-5">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            name="message"
            className="md:w-96 h-40"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex flex-col items-end gap-2 mt-5 ">
          <Button
            type="submit"
            disabled={state.submitting}
            className="cursor-pointer"
          >
            Submit
          </Button>
      <ValidationError errors={state.errors} />
        </div>
      </div>
     
    </form>
    <hr />
    </div>
  );
}
