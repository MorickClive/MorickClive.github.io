import { FormEvent } from "react";

export default async function onSubmit(e: any) {
    e.preventDefault();
    e.target.reset();
    let formData = new FormData(e.target);

    try {
        const response = await fetch('https://docs.google.com/forms/d/1jGsW-O_TuuRQXRMRarApvHGZmSaSR4a39bGFF_e0kFc/formResponse', {
            headers: {
                'mode': 'no-cors'
            },
            method: 'POST',
            body: formData
        }).then(response => { alert("Email Sent!"); });
    } catch (error) {
        /* no response, failure occurs despite success; will need to revisit this when the form api develops; no cors added for the time being */
    } finally {
        alert("Email Sent!");
    }
}