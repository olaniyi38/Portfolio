import { Button } from "@material-ui/core"



const Contact = () => {
    return (
        <section id="contact">
            <h1 className="section-title">Get In Touch</h1>
            <div>
                <p>
                I'm Open to talk about how i can help you bring your amazing ideas
                to life. I'm Just an E-mail away.

                </p>
            <a href="mailto:sodiqalao38@gmail.com " target='blank'>                  
            <Button size="large" variant="contained" color="primary">Start a conversation</Button>
            </a>
            </div>
        </section>
    )
}

export default Contact
