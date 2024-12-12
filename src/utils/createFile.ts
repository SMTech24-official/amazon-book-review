export async function createFile(url: string | null, fileName: string) {
  console.log(url);
  if (url) {
    const response = await fetch(url);
    const data = await response.blob();
    const metadata = {
      type: "image/jpeg",
    };
    const file = new File([data], fileName, metadata);
    return file;
  } else return null;
}
