// https://stackoverflow.com/a/39914235
export async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
