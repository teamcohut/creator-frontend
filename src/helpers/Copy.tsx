

export const Copy = (text: string) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            return true;
        })
        .catch(err => {
            return false;
        });
}