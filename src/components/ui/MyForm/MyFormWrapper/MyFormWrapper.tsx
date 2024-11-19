
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; 
import { FormProvider, useForm } from "react-hook-form";

import { ConfigProvider } from "antd";
import { cn } from "@/lib/utils";

const MyFormWrapper = ({
  onSubmit,
  className,
  children,
  defaultValues,
  resolver,
}: {
  onSubmit: (data: any) => void;
  className?: string;
  children: React.ReactNode;
  defaultValues?: any;
  resolver?: import("react-hook-form").Resolver<any, any>;
}) => {
  // Change formConfig type to allow dynamic properties
  const formConfig: Record<string, any> = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const {
    handleSubmit,
    //  reset
  } = methods;

  const submit = (data: any) => {
    onSubmit(data);
    // reset();
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            hoverBorderColor: "#9B5983",
            activeBorderColor: "#9B5983",
          },
        //   Select: {
        //     colorBgElevated: isDark ? ' #191E3A' : '#F5F5F5',
        //     colorText: isDark ? 'white' : '#212121',

        //     selectorBg: isDark ? '#191E3A' : '#F5F5F5',
        //     optionSelectedBg: isDark ? '#3697d8' : '#e6f4ff',
        // },
          Input: {
            hoverBorderColor: "#9B5983",
            activeBorderColor: "#9B5983",
          },
          Checkbox: {
            colorBorder: "#7F56D9",
            colorPrimary: "#7F56D9",
            colorPrimaryHover: "#7F56D9",
          },
          DatePicker: {
            colorPrimary: "#7F56D9",
            colorPrimaryHover: "#7F56D9",
            colorBorder: "#7F56D9",
            colorText: "#7F56D9",
            colorTextDisabled: "#7F56D9",
          }
        },
      }}
    >
      <FormProvider {...methods}>
        <form className={cn("", className)} onSubmit={handleSubmit(submit)}>
          {children}
        </form>
      </FormProvider>
    </ConfigProvider>
  );
};

export default MyFormWrapper;
