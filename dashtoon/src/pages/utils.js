export async function query(data) {
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          "Accept": "image/png",
          "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  
    const result = await response.blob();
    return result;
  }
  
  // Example usage
//   query({ "inputs": "Astronaut riding a horse" }).then((response) => {
//     // Use the image, for example:
//     const imageUrl = URL.createObjectURL(response);
//     console.log(imageUrl); // You can use this URL to display the image
//   });
  