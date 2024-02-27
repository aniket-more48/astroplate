import React from "react";
import {
    Accordion as BaseAccordion,
    AccordionContent as BaseAccordionContent,
    AccordionItem as BaseAccordionItem,
    AccordionTrigger as BaseAccordionTrigger,
  } from "./../ui/Accordian";
  
  interface Props {
    data: {
      title?: string;
      description?: string;
    }[];
  }
  
export function Accordion1({ data }: Props) {
    console.log('data',data)
    return (
      <BaseAccordion type="single" collapsible className="w-full">
        {data.map((item, i) => {
          return (
            <BaseAccordionItem value={`item-${i.toFixed()}`}>
              <BaseAccordionTrigger>{item.title}</BaseAccordionTrigger>
              <BaseAccordionContent>{item.description}</BaseAccordionContent>
            </BaseAccordionItem>
          );
        })}
      </BaseAccordion>
    );
  }