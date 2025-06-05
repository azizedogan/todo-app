const postAPI = async (
    URL, 
    body, 
    method = "POST", 
    headers = { "Content-Type": "application/json" }) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
      throw new Error("URL bulunamadı!");
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${URL}`, {
      method,
      headers,
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json();
    return data;

  } catch (err) {
    throw err;
  }
};

const getAPI = async (
    URL, 
    headers = { "Content-Type": "application/json" }) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
      throw new Error("URL bulunamadı!");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${URL}`, {
      method: "GET",
      headers,
      cache: "no-store",
    });

    const data = await res.json();
    return data;
    
  } catch (err) {
    throw err;
  }
};

export { postAPI, getAPI };