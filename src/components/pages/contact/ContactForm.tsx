import {ContactFormProps} from "@/types/contact";
import {PaperAirplaneIcon} from "@heroicons/react/16/solid";
import {FormEvent, useState} from "react";
import {sendContactEmail} from "@/app/actions/sendContactEmail";

export const ContactForm = ({
                                heading,
                                namePlaceholder,
                                emailPlaceholder,
                                messagePlaceholder,
                                buttonPlaceholder,
                                className
                            }:ContactFormProps) => {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        setStatus("sending");
        const result = await sendContactEmail(formData);

        if ("success" in result) {
            setStatus("success");
            form.reset();
        } else {
            setStatus("error");
        }
    }
    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full items-center ">
            <h1 className="text-3xl md:text-4xl font-regular text-center">
                {heading}
            </h1>
            <form
                onSubmit={handleSubmit}
                className={`${className} flex flex-col gap-4 max-w-lg w-full items-center`}
            >
                <input
                    type="text"
                    name="name"
                    placeholder={namePlaceholder}
                    required
                    className="
                        w-full border-2 border-muted rounded-xl bg-background px-4 py-2 text-lg
                        text-foreground placeholder-muted focus:outline-none focus:border-accent-secondary"
                />
                <input
                    type="email"
                    name="email"
                    placeholder={emailPlaceholder}
                    required
                    className="
                        w-full border-2 border-muted rounded-xl bg-background px-4 py-2 text-lg
                        text-foreground placeholder-muted focus:outline-none focus:border-accent-secondary"
                />
                <textarea
                    name="message"
                    placeholder={messagePlaceholder}
                    rows={4}
                    required
                    className="
                        w-full border-2 border-muted rounded-xl bg-background px-4 py-2 text-lg
                        text-foreground placeholder-muted focus:outline-none focus:border-accent-secondary resize-none"
                />
                <button
                    type="submit"
                    className="
                        inline-flex items-center gap-2 text-white bg-accent-secondary
                        hover:bg-accent-secondary-hover
                        px-6 py-3 rounded-md transition disabled:opacity-50">
                    {status === "sending" ? "Sending..." : buttonPlaceholder}
                    <PaperAirplaneIcon className="w-5 h-5" />
                </button>
                {status === "success" && <p className="text-accent mt-2">Message sent!</p>}
                {status === "error" && <p className="text-attention mt-2">Something went wrong. Please try again.</p>}
            </form>
        </div>
    )
}


