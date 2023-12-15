export async function getPosts() {
    const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const result = await response.json();

    return result;
}   