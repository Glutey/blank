// function to generate markdown for README
function generateMarkdown(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
  </head>
  <body>
      <h1>${data.description}</h1>
      <h2> I am from ${data.location}</h2> */*/update with correct question header/*/*
      <h2>Bio</h2>
      <p>${data.bio}</p>
      <h3>My LinkedIn: https://www.linkedin.com/in/${data.linkedin}</h3>
      <h3>My Email: ${data.email}</h3>
      <h3>Check out my GitHub: ${data.github}</h3>
  </body>
  </html>`
; 
}

module.exports = generateMarkdown;
