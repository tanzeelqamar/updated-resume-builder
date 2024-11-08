const form = document.getElementById('resume-form');
const generateResumeElement = document.getElementById('generate-resume');
generateResumeElement.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const socialMediaAccounts = document.getElementById('social-media-accounts').value;
    const objective = document.getElementById('objective').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    const resumeContent = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Social Media Accounts:</strong> ${socialMediaAccounts}</p>
        <h3>Objective</h3>
        <p>${objective}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    generateResumeElement.innerHTML = resumeContent;
    generateResumeElement.style.display = 'block';
});