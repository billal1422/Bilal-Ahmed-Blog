import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import{cn} from"../../lib/utilities"

//Define button variants using`cva`
const buttonVariants=cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium trasition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring disable:pointer-events-none disable:opacity-50",
    {
        variants:{
            variant:{
                default:"bg-primry text-primary-foreground shadow hover:bg-primary/90",
                destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost:"hover:bg-accent hover:text-accent-foregroud",
                link:"text-primary underline-offset-4 hover:underline",
            },
            size:{
                default:"h-9 px-4 py-2",
                sm:"h-8 rounded-md text-xm",
                lg:"h-10 rounded=md px-8",
                icons:"h-9 w-9"
            },
        },
defaultVariants:{
    variant:"default",
    size:"default",
}
    }
);



export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>{
variant?:"default"|"destructive"|"outline"|"secondary"|"ghost"|"link";
size?:"default"|"sm"|"lg"|"icons";
asChild?:boolean;
}
const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(
({ className, variant="default",size="default",asChild=false,...props},ref)=>{
    const Comp="button";
    return(
    <Comp
    className={cn(buttonVariants({variant,size,className}))}
    ref={ref}
    {...props}
    />

    )
}
)
    Button.displayName="Button";
    export {Button,buttonVariants};
  