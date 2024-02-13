import { db } from "./db";

db.connect()
  .then((res) => console.log("Connected ✅!"))
  .catch((err) => console.log(err));

export async function getData() {
  const data = await db.query("SELECT * FROM quotes");
  return data.rows;
}

export async function saveData(quote: string, author: string) {
  try {
    await db.query("INSERT INTO quotes(author, quote) VALUES ($1, $2)", [
      author,
      quote,
    ]);
    return "Quote saved successfully ✅!";
  } catch (error) {
    console.log(error);
    return "Something went wrong... ⛔";
  }
}

export async function updateData(id: string, author: string, quote: string) {
  try {
    await db.query("UPDATE quotes SET author = $1, quote = $2 WHERE id = $3", [
      author,
      quote,
      id,
    ]);
    return "Quote updated successfully ✅!";
  } catch (error) {
    console.log(error);
    return "Something went wrong... ⛔";
  }
}

export async function deleteData(id: string) {
  try {
    await db.query("DELETE FROM quotes WHERE id = $1", [id]);
    return "Quote deleted successfully ✅!";
  } catch (error) {
    console.log(error);
    return "Something went wrong... ⛔";
  }
}
