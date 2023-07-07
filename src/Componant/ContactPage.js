import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h2>Contact</h2>
            <p>Have any questions or feedback? Fill out the form below:</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" rows="4" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactPage;
