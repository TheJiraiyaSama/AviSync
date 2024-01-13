"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CButton } from "@/components/custom";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import fieldList, { formSchema } from "./fieldList";
import Image from "next/image";
import getImageData from "@/lib/get_image_data";
import { Input } from "@/components/ui/input";




const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [preview, setPreview] = useState("");

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log({ data });
  };

  return (
    <section>
      <p className={"heading-1 mb-20"}>Register Aircraft</p>
      <div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-8">
              {/* Input Fields */}
              <div className="flex basis-1/2 flex-col items-start justify-start gap-10">
                {fieldList.map((fieldItem) => (
                  <FormField
                    key={fieldItem.name}
                    control={form.control}
                    name={fieldItem.name as any}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{fieldItem.label}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={fieldItem.placeHolder}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              {/* Image and Buttons */}
              <div className="flex-center basis-1/2 flex-col pl-40">
                <div className="relative mb-10 h-[400px] w-[400px]">
                  {preview.length > 1 ? (
                    <Image
                      src={preview}
                      // width={400}
                      // height={400}
                      layout="fill"
                      objectFit="contain"
                      alt="Airplane"
                    />
                  ) : (
                    <p className="flex-center h-full w-full rounded bg-secondary text-primary">
                      Upload Image
                    </p>
                  )}
                </div>
                <div className="flex-center flex-col gap-11">
                  <FormField
                    control={form.control}
                    name={"image"}
                    render={({ field: { onChange, ...rest } }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder={"Upload File"}
                            type="file"
                            fieldSize="half"
                            className="text-center text-primary file:hidden"
                            onChange={(event) => {
                              const { files, displayUrl } = getImageData(event);
                              setPreview(displayUrl);
                              onChange(event);
                            }}
                            {...rest}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <CButton type="submit" asChild cVariant="accent">
                    Save
                  </CButton>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default Page;
