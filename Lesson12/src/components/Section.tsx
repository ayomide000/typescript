import { ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
}

//You can give the title a default value since it is optional in the type
const Section = ({children, title = "My Subheading"}: SectionProps ) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default Section