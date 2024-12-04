const Contact: React.FC = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>If you would like to get in touch or have any questions, feel free to reach out to me via email or through the contact form below.</p>
            
            <h2>Email</h2>
            <p>You can email me at <a href="mailto:severipalikko@gmail.com">severipalikko@gmail.com</a></p>
            
            <h2>Or use the contact form</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;