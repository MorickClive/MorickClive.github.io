export default async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    try {
        const response = await fetch('https://docs.google.com/forms/d/1jGsW-O_TuuRQXRMRarApvHGZmSaSR4a39bGFF_e0kFc/formResponse', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: formData
        }).then(response => { alert("Email Sent!"); });

        if (response.ok) {
            alert("Email Sent!");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    } finally {
        e.target.reset();
    }
}