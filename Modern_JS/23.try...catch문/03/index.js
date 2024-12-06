// try catch문

try {
  console.log("Start");

  const title = "섭이";
  console.log(title);

  title = "섭이";

  const language = "JavaScript";
  console.log(language);
} catch (error) {
  console.log("End");
  // console.log(error);
  console.error(error);

  console.log(error.name);
  console.log(error.message);
}
