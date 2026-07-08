import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import {tv, type VariantProps} from "tailwind-variants"

const buttonVariants = tv({
    variants: {
        variant: {
            primary: "bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2 mt-2",
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

type PropsButton = ComponentProps<"button"> & VariantProps<typeof buttonVariants>

const Button = ({variant, className, children, ...props}: PropsButton) => {
    const classButton = twMerge(buttonVariants({variant, className}))
    return (
        <button className={classButton} {...props}>
            {children}
        </button>
    )
}
export default Button
